var fs = require('fs');

var filename = '01.txt';
var contents = fs.readFileSync(filename).toString().trim();

function countFloors(floors) {
  var symbols = floors.split('');
  console.log(symbols);
  var floorCount = symbols.map(s => {
                                      switch(s) {
                                        case '(': return 1;
                                        case ')': return -1;
                                        default: return;
                                      }
                                    })
                                    .reduce((previous, current) => previous + current);
  return floorCount;
}

console.log(countFloors(contents));
