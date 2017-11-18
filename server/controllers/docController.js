let Sequelize = require('sequelize');
let RowEntry = require('../sequelize.js').RowEntry;

// this takes in a resume
exports.addResume = function(req, res) {
  console.log('req.body: ', req.body); 
  // this updates the RowEntry with the new url.
  // { name: 'https://docs.google.com/document/d/1TDt6VgaDqQqNZPXjLJcCuSZhmppEd9ui_RKgu8-IbqI/edit?usp=drive_web',
  // url: 'Devon\'s CMA Group LP Assignments',
  // recordId: 6 }
   console.log(req.body.recordId)

    RowEntry.findOne({
      where: {
        id: req.body.recordId
      }
    }).then(results => {
    	console.log(results);
      let stateUpdate = {};
      stateUpdate['resumeName'] = req.body.name;
      stateUpdate['resumeURL'] = req.body.url;
      // console.log(stateUpdate);
      results.update(stateUpdate)
      .then(() => {
        res.status(200)
        res.send(results)
      })
    })



  // entries from the RowEntry
  // resumeName: { type: Sequelize.STRING, defaultValue: '' },
  // resumeURL: { type: Sequelize.STRING, defaultValue: '' },


}

exports.addCoverLetter = function(req, res) {
  console.log('req.body: the cover letter endpoint', req.body);

  // entries from the RowEntry
  // coverLetterName: { type: Sequelize.STRING, defaultValue: '' }, 
  // coverLetterURL: { type: Sequelize.STRING, defaultValue: ''},
    RowEntry.findOne({
      where: {
        id: req.body.recordId
      }
    }).then(results => {
    	console.log(results);
      let stateUpdate = {};
      stateUpdate['coverLetterName'] = req.body.name;
      stateUpdate['coverLetterURL'] = req.body.url;
      // console.log(stateUpdate);
      results.update(stateUpdate)
      .then(() => {
        res.status(200)
        res.send(results)
      })
    })
}