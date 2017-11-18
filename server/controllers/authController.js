// possibly needs schema
let User = require('../sequelize').User;
let RowEntry = require('../sequelize').RowEntry;
let path = require('path');

var GOOGLE_CLIENT_ID = require('../keys/googleOAuth.js').GOOGLE_CLIENT_ID
var GOOGLE_CLIENT_SECRET = require('../keys/googleOAuth.js').GOOGLE_CLIENT_SECRET
var REDIRECT_URL = require('../keys/googleOAuth.js').REDIRECT_URL;

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport')

passport.serializeUser(function(user, done) {
	console.log('serializeUser')
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('deserializeUser')
  done(null, obj);
});

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: REDIRECT_URL,
    scope: [
    'profile',  
    'https://www.googleapis.com/auth/drive', 
    'hrrps://ww.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/user.emails.read',
    'https://www.googleapis.com/auth/drive.readonly', 

    ], 
  },

  function(accessToken, refreshToken, params, profile, done) {
    profile.accessToken = accessToken
    profile.expires_in = params.expires_in
    if (refreshToken !== undefined) profile.refreshToken = refreshToken
    // console.log('profile', profile)
    // send to db
    User.findOne({where : {googleId : profile.id} })
      .then(function(obj) {
        // console.log('this is the profile', profile)
        console.log('this is the email: ', profile.emails[0].value)
        // if that obj exists
        if (obj) {
          return obj.update({
            emailAddress : profile.emails[0].value,
            accessToken : profile.accessToken, 
            expires_in : profile.expires_in, 
            refreshToken : profile.refreshToken,
            profileJSON : profile._json
          })
        } else {
          return User.create({
            emailAddress : profile.emails[0].value,
            googleId : profile.id,
            accessToken : profile.accessToken, 
            expires_in : profile.expires_in, 
            refreshToken : profile.refreshToken,
            profileJSON : profile._json
          })
        }
      })
      .then(done(null, profile))
    }
  )
);


exports.authenticate = passport.authenticate('google', { 
  successRedirect: '/auth/callback', 
  failureRedirect: '/auth/callback',
  scope: [
    'profile', 
    'https://www.googleapis.com/auth/drive', 
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/user.emails.read',
    'https://www.googleapis.com/auth/drive.readonly', 
    ],
  accessType: 'offline',
  approvalPrompt: 'force'
})


exports.return = passport.authenticate('google', { 
  accessType: 'offline',
  approvalPrompt: 'force',
  successRedirect: '/', 
  failureRedirect: '/login',
	scope: [
    'profile', 
    'https://www.googleapis.com/auth/drive', 
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/user.emails.read',
    'https://www.googleapis.com/auth/drive.readonly', 
  ],
})

exports.destroySession = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  })
};


exports.getSessionDisplayName = function(req, res) {
  let userFullName = req.session.passport.user.displayName || null
  res.send(userFullName)
}

exports.getSessionAll = function(req, res) {
  res.send(req.session.passport)
}



// # dropping tables from the PSQL command line: 
// drop schema public cascade;
// drop schema public cascade;
// create schema public;









