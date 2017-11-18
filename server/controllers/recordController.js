require('../sequelize.js');
let User = require('../sequelize.js').User;
let RowEntry = require('../sequelize.js').RowEntry;
let Company = require('../sequelize.js').Company;
let path = require('path');
let axios = require('axios');

exports.getAllRecords = function(req, res) {
    // console.log('getAllRecords ===== req.params ========>')
    // console.log(req.user.id);
    // console.log('params: googleId: ', req.params.googleId);
    // console.log('props googleId: ', this.props.googleId)
    RowEntry.findAll({include: [{model: Company}], where: {googleId: req.user.id}})
      .then((records) => {
        // console.log(records);
        //if (typeof records) res.send([]);
        res.status(200)
        res.send(records)
      })
    // res.send();
  }

  exports.getRecentRecords = function(req, res) {

    RowEntry.findAll({include: [{model: Company}], order: ['updatedAt', 'DESC'], where: {googleId: req.params.googleId}})
      .then((records) => {
        //console.log(records);
        res.status(200)
        res.send(records)
      })
  }
  
exports.update = function(req, res) {
    RowEntry.findOne({
      where: {
        id: req.body.id
      }
    }).then(results => {
      let stateUpdate = {};
      stateUpdate[req.body.stateName] = req.body.value;
      // console.log(stateUpdate);
      results.update(stateUpdate)
      .then(() => {
        res.status(200)
        res.send(results)
      })
    })
  }



exports.insert = function (req, res) {
    // console.log(req.body);
    console.log('attempting to insert');
    // console.log(req.body.companyValue);
    // var companyId;
    console.log(req.body.companyValue);
    var newCompanyId;
    Company.findOne({
      where: {
        name: req.body.companyValue
      }
    }).then((results) => {
      if (results) {
        console.log('=======================');
        console.log(results.dataValues.id);
        newCompanyId = results.dataValues.id;
      } else {
        console.log('results are null')
        Company.create({
          name: req.body.companyValue
        }).then((x) => {
            console.log('x, ', x.dataValues.id);
            // console.log('x ', x.dataValues.id);
            newCompanyId = x.dataValues.id;
          })
        .then(() => {
          // console.log('new comapny id: ', newCompanyId)
          RowEntry.create({
            companyId : newCompanyId,
            location : req.body.locationValue,
            contact : req.body.contactValue,
            notes : req.body.notesValue,
            keywords : req.body.tags.map((x) => x = x.text).join(' '),
            // coverLetter : req.body.coverLetter,
            // resume : req.body.resume,
            firstInterview : req.body.firstInterview,
            secondInterview : req.body.secondInterview,
            offer : req.body.offer,
            rejected : req.body.rejected
            
          })
          .then(() => res.end())
        })
      } 
    })
  }
  

 exports.deleteRecord = function(req, res) {
    // console.log(req.body)
    RowEntry.findOne({
      where: {
        id: req.body.id
      }
    }).then(id => {
      // console.log(id)
      id.destroy();
      res.status(201)
      res.send();
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    })
  }

exports.search = function(req, res) {
    // console.log(req.body);
    RowEntry.findAll({
      where: {
        $or: [
          // check out all string fields
          {company: {like: '%' + req.body.searchValue + '%'}},
          {location: { like: '%' + req.body.searchValue + '%'}},
          {contact: { like: '%' + req.body.searchValue + '%'}},
          {notes: {like: '%' + req.body.searchValue + '%'}},
          {keywords: {like: '%' + req.body.searchValue + '%'}}
        ]
      }
    })
    .then(results => {
      res.status(200)
      // console.log(results);
      res.send(results)
    })
  }

// this is for handling the front end routes. 
exports.frontRoute = function (req, res) {
console.log(path.join(__dirname, '/../../react-client/dist/', 'index.html'));
  res.sendFile(path.join(__dirname, '/../../react-client/dist/', 'index.html'));
};


exports.getRecordsByGoogleId = function(req, res) {
  console.log('some poor soul still needs to write getRecordsByGoogleId')
}










