var fs = require('fs');
var regex = require('regex');
var filename = '05.txt';

var strings = fs.readFileSync(filename).toString().trim().split('\n');

// part 1
function hasThreeVowels(line) {
  return /([aeiou].*){3,}/ig.test(line);
}

function hasDoubles(line) {
  return /(.)\1/.test(line);
}

function isNotNaughty(line) {
  return !(/ab|cd|pq|xy/.test(line));
}

console.log(strings.reduce(function (total, line) {
  return total + ((hasThreeVowels(line) && hasDoubles(line) && isNotNaughty(line)) ? 1 : 0);
}, 0));



// part 2
function nonOverlappingPairs(line) {
  return /(.).\1/ig.test(line);
}

function specialRepeat(line) {
  return /(..).*\1/ig.test(line);
}

console.log(strings.reduce(function(total, line) {
  return total + ((nonOverlappingPairs(line) && specialRepeat(line)) ? 1 : 0);
}, 0));
