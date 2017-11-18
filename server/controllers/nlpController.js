// let User = require('../sequelize.js').User;
// let RowEntry = require('../sequelize.js').RowEntry;
let path = require('path');

let textract = require('textract');
let parseApplicationText = require('./nlpResources/nlp_demo.js').parseApplicationText;

exports.loadApplicationKeywords = function(req, res) {
  console.log('req.body: ', req.body);
  console.log(req.body.url);
  console.log(req.body.text);
  if (req.body.url.length <= 0) {
    console.log('url not found, returning process on only text')
    res.send(parseApplicationText(req.body.text));
  } else {
    textract.fromUrl(req.body.url,(error, text) => {

    let newString = text +  req.body.text;
    // console.log('newString: ', newString);
    // console.log(parseApplicationText(newString));
    res.send(parseApplicationText(newString));
    });
  }
}