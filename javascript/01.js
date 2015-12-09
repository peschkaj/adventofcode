var fs = require('fs');

var filename = '01.txt';
var contents = fs.readFileSync(filename).toString().trim();

function countFloors(floors) {
  return floors.split('')
               .map(s => {
                            switch(s) {
                              case '(': return 1;
                              case ')': return -1;
                              default: return;
                            }
                          })
                          .reduce((previous, current) => previous + current);
}

function getPositionAtFloor(floors, floor) {
  var found = false;
  var position = 1;
  var floor = 0;

  floors.split('').forEach(f => {
    floor += (f === '(') ? 1 : -1;
    if (floor === -1) {
      found = true;
    }

    if (!found) {
      position++;
    }
  });

  return position;
}

console.log(countFloors(contents));
console.log(getPositionAtFloor(contents, -1));
