var fs = require('fs');

var filename = '02.txt';
var contents = fs.readFileSync(filename).toString().trim().split('\n');
var paper_area = 0;
var ribbon_length = 0;

console.log(contents.length);

for (var i = 0; contents.length; i++) {
  if (!contents[i]) {
    break;
  }

  var dimensions = contents[i];
  var box = dimensions.split('x');
  var l = parseInt(box[0]);
  var w = parseInt(box[1]);
  var h = parseInt(box[2]);
  var lw = l * w;
  var wh = w * h;
  var lh = l * h;

  var shortest = Math.min(lw, wh, lh);

  if (shortest === lw) {
    ribbon_length += (2 * l) + (2 * w);
  } else if (shortest === wh) {
    ribbon_length += (2 * w) + (2 * h);
  } else if (shortest === lh) {
    ribbon_length += (2 * l) + (2 * h);
  }

  ribbon_length += (l * w * h);

  paper_area += (2 * lw) + (2 * wh) + (2 * lh) + Math.min(lw, wh, lh);
}

console.log("paper area required is " + paper_area);
console.log("ribbon length is " + ribbon_length);
