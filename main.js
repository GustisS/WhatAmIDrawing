var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'b9c822b5fcb84fa49d40361117c730c7'
});
