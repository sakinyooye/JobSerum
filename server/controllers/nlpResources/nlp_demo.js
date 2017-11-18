let _ = require('underscore');

// let exampleApplication = require('./example_job_app.js');

exports.parseApplicationText = function (text) {
    console.log('parseApplicationText text: ', text);
    text = text.split(' ').join(' ');
    let keywordsRe = / /gi;
    let javascriptKeywords = require('./termLists/javascripKeywords.js').replace(keywordsRe,'').split('\n').map((x) => x = x.toLowerCase());

    let textRe = / /gi;
    //console.log((text).split(' ').replace(textRe, '').normalize().nouns().data().map((x) => x = x.text.toLowerCase()));
    let processedNouns = (text).split(' ').map((x) => x.replace(textRe, '')).map((x) => x = x.toLowerCase());
    // processedNouns = processedNouns.map((x) => x.text.replace(textRe, ''));

    console.log(_.intersection(processedNouns,javascriptKeywords));
    return _.intersection(processedNouns,javascriptKeywords);
} 

