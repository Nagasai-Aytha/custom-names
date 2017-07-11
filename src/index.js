var customNames = require('./custom-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports ={
  all : customNames,
  random: uniqueRandomArray(customNames)
}
