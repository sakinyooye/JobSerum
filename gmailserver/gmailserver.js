
var express = require('express');
var google = require('googleapis');
var OAuthClient = google.auth.OAuth2;
var gmail = google.gmail('v1');
var readline = require('readline');
var plus = google.plus('v1');
var people = google.people('v1');
var atob = require('atob');

require('./sequelize.js');
let User = require('./sequelize.js').User;
//let RowEntry = require('./sequelize.js').RowEntry;
let Company = require('./sequelize.js').Company;
let Artifact = require('./sequelize.js').Artifacts;
let Contact = require('./sequelize.js').Contact;
let RowEntry = require('./sequelize.js').RowEntry;

var clientID = require('./keys/googleOAuth.js').clientID;
var clientSecret = require('./keys/googleOAuth.js').clientSecret;
var redirectURL = require('./keys/googleOAuth.js').redirectURL;

var app = express();


app.get('/authcode', function(req, res){
	console.log(req.query.code);

	res.send();
})

var authorizationClient = new OAuthClient(clientID, clientSecret, redirectURL);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function decode(string) {
  return decodeURIComponent(escape(atob(string.replace(/\-/g, '+').replace(/\_/g, '/'))));
}

function getText(response) {
  var result = '';
  // In e.g. a plain text message, the payload is the only part.
  var parts = [response.payload];

  while (parts.length) {
    var part = parts.shift();
    if (part.parts) {
      parts = parts.concat(part.parts);
    }
    if (part.mimeType === 'text/plain') {
      // Continue to look for a 'text/html' part.
      result = decode(part.body.data);
      break; //added line
    } else if (part.mimeType === 'text/html') {
      // 'text/html' part found. No need to continue.
      //result = decode(part.body.data);
      //break;
    }
  }
  
  return result;
}

function getAccessToken (oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
    scope: ['https://mail.google.com/', 'https://www.googleapis.com/auth/user.emails.read', 'profile'], 
    approvalprompt: 'force'
    //scope: 'https://www.googleapis.com/auth/plus.me' // can be a space-delimited string or an array of scopes
    //NEEDS TO BE CHANGED
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function (code) {
    // request access token
    oauth2Client.getToken(code, function (err, tokens) {
      if (err) {
        return callback(err);
      }
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.setCredentials(tokens);
      authorizationClient = oauth2Client;


      setInterval(function(){
		callback(authorizationClient, handleEmail);
      }, 30000);
      //callback(oauth2Client, handleEmail);
    });
  });
};

var handleEmail = function(authorizationClient, emailAddresses){
	getEmailList(authorizationClient, emailAddresses, processEmails);
}

//Pass off to Seamus
var getUserEmailAddressesFromGoogle = function(authorizationClient, callBack){
	people.people.get({auth: authorizationClient, resourceName: 'people/me', personFields: 'emailAddresses'}, function(err, person){
  		if(err){
  			console.error(err)
  		}

  		var emailAddresses = person.emailAddresses.map(function(emailAddress){
  			return emailAddress.value
  		})
  	})  
}

var getUserEmailAddresses = function(authorizationClient, callBack){
	User.findAll({attributes: ['googleId', 'emailAddress']}).then((users) => {
		emailAddressList = users.map((user)=> {
			return({email: user.dataValues.emailAddress, googleId: user.dataValues.googleId});
		}).filter((emailAddress)=> emailAddress.email !== null && emailAddress.email !== '');
		console.log('EMAIL ADDRESS LIST');
		console.log(emailAddressList);
		callBack(authorizationClient, emailAddressList);
	});
}

var getEmailList = function(authorizationClient, emailAddresses, callBack){
	var emailList = [];
	gmail.users.messages.list({userId: 'me', auth: authorizationClient}, function(err, messages){
		if(err){console.error(err)}; 

		emailList = emailList.concat(messages.messages);
		if(emailList.length > 0 && !emailList.includes(undefined)){
			console.log('Processing Emails...............');
			callBack(authorizationClient, emailList, emailAddresses);
			console.log('Done Processing Emails..........')
		} else {
			console.log('There are no Emails to process................')
		}
		

		//I am not handling for if there are over 100 emails. 
	})
}

var parseEmailBodyForRecord = function(body){
	var returnObj = {};
	//body.replace()
	bodyArr = body.split('\n');
	bodyArr = bodyArr.filter((line)=> line!=='\r').map((line)=> line.replace('\r', '')).filter((line)=>line!=='');
	//console.log(bodyArr);

	if(bodyArr.length!== 12){
		return returnObj;
	}

	bodyArr.forEach((line) => {
		lineArr = line.split(': ');
		if(lineArr.length!==2){
			return returnObj;
		}
		console.log(lineArr);
		returnObj[lineArr[0]] = lineArr[1];
	});

	returnObj.Tags = returnObj.Tags.split(',');

	console.log(returnObj);
	return returnObj;
}

var insertToRecordsTable = function (bodyObject) {
    // console.log(req.body);
    console.log('attempting to insert');
    // console.log(req.body.companyValue);
    // var companyId;
    console.log(bodyObject.Company);
    var newCompanyId;
    Company.findOne({
      where: {
        name: bodyObject.Company
      }
    }).then((results) => {
      if (results) {
        console.log('=======================');
        console.log(results.dataValues.id);
        newCompanyId = results.dataValues.id;
      } else {
        console.log('results are null')
        Company.create({
          name: bodyObject.Company
        }).then((x) => {
            console.log('x, ', x.dataValues.id);
            // console.log('x ', x.dataValues.id);
            newCompanyId = x.dataValues.id;
          })}})
        .then(() => {
          // console.log('new comapny id: ', newCompanyId)
          console.log('New Company Id ', newCompanyId);
          console.log('Tags ', bodyObject.Tags.map((x) => x = x.text).join(' '));
          RowEntry.create({
            googleId: bodyObject.googleId, 
            companyId : newCompanyId, // this is relational

            location : bodyObject.Location,
            notes : bodyObject.Notes,
            
            tags : bodyObject.Tags.map((x) => x).join(' '),
            //jobApplicationURL : req.body.jobApplicationURL,

            firstInterview : bodyObject['First Interview'] === 'Yes' ? true : false,
            secondInterview : bodyObject['Second Interview'] === 'Yes' ? true : false,
            offer : bodyObject.Offer === 'Yes' ? true : false,
            rejected : bodyObject.Rejected === 'Yes' ? true : false,

            // this is for the document management. 
            /*coverLetterName : req.body.coverLetterName, 
            coverLetterURL : req.body.coverLetterURL,
            resumeName : req.body.resumeName, 
            resumeURL : req.body.resumeURL, */

            // This is for the fullContact: 
            contactValue: bodyObject.Contact,  // this is the name
            contactEmailAddress: bodyObject['Contact Email'], 
            /*socialProfiles: req.body.socialProfiles, */
                   
          })
          .then(console.log('Successfully Inserted'))
        })
      } 


//Version of processEmails to process new records.
var processEmails = function(authorizationClient, emailList, filterEmailGoogleId, callBack){
	//Not currently handling threads
	console.log(filterEmailGoogleId)
	for(var i = 0; i < emailList.length; i++){
		//get each email in the the inbox
		gmail.users.messages.get({userId: 'me', id: emailList[i].id, auth: authorizationClient}, function(err, message) {
	  		if (err) {
	  			return console.log('An error occured', err);
	  		}

	  		var messageDetails = [];
	  		var emailContent = {};
	  		emailContent.messageId = message.id;

	  		//iterate over headers and populate email content object
	  		for(var i = 0; i < message.payload.headers.length; i++){
	  			var headerName = message.payload.headers[i].name;
	  			var headerValue = message.payload.headers[i].value;

	  			if(headerName === 'To') {
	  				emailContent.To = headerValue;
	  			} else if(headerName === 'From') {
					emailContent.From = headerValue;
	  			} else if(headerName === 'Subject') {
	  				emailContent.Subject = headerValue;
	  			} else if(headerName === 'Date') {
	  				emailContent.Date = headerValue;
	  			} else if(headerName === 'Cc') {
	  				emailContent.Cc = headerValue;
	  			}
	  		}

	  		//get plain text body and put onto emailContent object
	  		emailContent.Body = getText(message);

	  		//parse out from email address;
	  		var fromAddress = emailContent.From.includes('<') && emailContent.From.includes('>') ? emailContent.From.split('<')[1].split('>')[0] : emailContent.From;

	  		//if the current email is an email from a user of JobSerum...

	  		for (var i = 0; i < filterEmailGoogleId.length; i++){
	  			userEmail = filterEmailGoogleId[i].email.toUpperCase();

	  			if(userEmail === fromAddress.toUpperCase()){
	  				emailContent.googleId = filterEmailGoogleId[i].googleId;
	  				console.log(emailContent);
					var bodyObject = parseEmailBodyForRecord(emailContent.Body);
					bodyObject.googleId = filterEmailGoogleId[i].googleId;
					insertToRecordsTable(bodyObject);
					break;
	  			}

	  		}

	  		/*if(filterEmailGoogleId.map((emailIdPair) => emailIdPair.email.toUpperCase()).includes(fromAddress.toUpperCase())){
	  			//(2) insert email into Artifacts Table (3)Add contacts from email

	  			
	  			var bodyObject = parseEmailBodyForRecord(emailContent.Body);
	  			//enter email content into database
	  		} */
			console.log('<<<<<<<<<<  >>>>>>>>>>>');

  		})
	}

	//Delete emails after finished.
	/*for(var z = 0; z < emailList.length; z++){
		gmail.users.messages.trash({userId: 'me', id: emailList[z].id, auth: authorizationClient}, function(err, message){
			if (err) {
				return console.log('An error occured', err);
			}
			console.log('Deleted processed emails');
		})
	}*/

}

//VERSION OF PROCESS EMAILS TO PROCESS NEW CONTACTS
/*var processEmails = function(authorizationClient, emailList, filterEmailAddresses, callBack){
	//Not currently handling threads

	console.log(emailList);

	for(var i = 0; i < emailList.length; i++){
		//get each email in the the inbox
		gmail.users.messages.get({userId: 'me', id: emailList[i].id, auth: authorizationClient}, function(err, message) {
	  		if (err) {
	  			return console.log('An error occured', err);
	  		}

	  		var messageDetails = [];
	  		var emailContent = {};
	  		emailContent.messageId = message.id;

	  		//iterate over headers and populate email content object
	  		for(var i = 0; i < message.payload.headers.length; i++){
	  			var headerName = message.payload.headers[i].name;
	  			var headerValue = message.payload.headers[i].value;

	  			if(headerName === 'To') {
	  				emailContent.To = headerValue;
	  			} else if(headerName === 'From') {
					emailContent.From = headerValue;
	  			} else if(headerName === 'Subject') {
	  				emailContent.Subject = headerValue;
	  			} else if(headerName === 'Date') {
	  				emailContent.Date = headerValue;
	  			} else if(headerName === 'Cc') {
	  				emailContent.Cc = headerValue;
	  			}
	  		}

	  		//get plain text body and put onto emailContent object
	  		emailContent.Body = getText(message);

	  		//parse out from email address;
	  		var fromAddress = emailContent.From.includes('<') && emailContent.From.includes('>') ? emailContent.From.split('<')[1].split('>')[0] : emailContent.From;
	  		var toAddressStr = emailContent.To;
	  		var ccAddressStr = emailContent.Cc;

	  		//if the current email is an email from a user of JobSerum...
	  		if(filterEmailAddresses.map((emailAddress) => emailAddress.toUpperCase()).includes(fromAddress.toUpperCase())){
	  			//(2) insert email into Artifacts Table (3)Add contacts from email

	  			//enter email content into database
	  			Artifact.create({to: emailContent.To,
	  				from: emailContent.From,
	  				subject: emailContent.Subject,
	  				date: emailContent.Date, 
	  				cc: emailContent.Cc, 
	  				body: emailContent.Body
	  			})
	  			.then(function(){
	  				console.log('Created Artifact: ', emailContent);
	  				toAddressArr = toAddressStr.split(' ');
	  				ccAddressArr = ccAddressStr ? ccAddressStr.split(' ') : [];

	  				//iterate over all of the to addresses and add those which are not JobSerum or the user into the database
	  				toAddressArr.forEach(function(elem) {
		  				var toAddress;
		  				if(elem.includes('@')) {
		  					var toAddress = elem.includes('<') && elem.includes('>') ? elem.split('<')[1].split('>')[0] : elem;
		  					toAddress = toAddress.endsWith(',') ? toAddress.slice(0, toAddress.length - 1) : toAddress;
			  				if(toAddress.toUpperCase() !== 'JobSerumGITSS@gmail.com'.toUpperCase() && toAddress.toUpperCase() !== fromAddress.toUpperCase()){
			  					Contact.create({emailAddress : toAddress});
			  					console.log('Created contact: ', toAddress);
			  				}
		  				}
	  				});

	  				//iterate over all of the Cc addresses and add those which are not JobSerum or the user into the database
	  				ccAddressArr.forEach(function(elem){
	  					var ccAddress;
		  				if(elem.includes('@')) {
		  					var ccAddress = elem.includes('<') && elem.includes('>') ? elem.split('<')[1].split('>')[0] : elem;
		  					ccAddress = ccAddress.endsWith(',') ? ccAddress.slice(0, ccAddress.length - 1) : ccAddress;
			  				if(ccAddress.toUpperCase() !== 'JobSerumGITSS@gmail.com'.toUpperCase() && ccAddress.toUpperCase() !== fromAddress.toUpperCase()){
			  					Contact.create({emailAddress : ccAddress});
			  					console.log('Created contact: ', ccAddress);
			  				}
		  				}
	  				});
	  			});
	  		} 
			console.log('<<<<<<<<<<  >>>>>>>>>>>');

  		})
	}

	//Delete emails after finished.
	for(var z = 0; z < emailList.length; z++){
		gmail.users.messages.trash({userId: 'me', id: emailList[z].id, auth: authorizationClient}, function(err, message){
			if (err) {
				return console.log('An error occured', err);
			}
			console.log('Deleted processed emails');
		})
	}

}*/

  app.listen(app.listen(8080, function() {
  	console.log('listening on port 8080')
	}))


getAccessToken(authorizationClient, getUserEmailAddresses);







