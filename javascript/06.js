var fs = require('fs');
var filename = '06.txt';

var grid = [];
var grid_size = 1000;

// pre-fill our grid system
for (var i = 0; i < grid_size; i++) {
  grid.push(Array.apply(null, Array(grid_size)).map(function () { return 0; }));
}

var directions_p1 = {
  "turn on" : turnOn,
  "turn off" : turnOff,
  "toggle" : toggle
} ;

var instructions = fs.readFileSync(filename).toString().trim().split('\n');
var regex = /^(turn on|toggle|turn off)\s+(\d+,\d+)\sthrough\s(\d+,\d+)$/ig;

function stringToCoords(s) {
  var parts = s.split(',');
  return { 'x': parseInt(parts[0]), 'y': parseInt(parts[1]) };
}

function turnOn(lights, start, finish) {
  for (var x = start.x; x <= finish.x; x++) {
    for (var y = start.y; y <= finish.y; y++) {
      lights[x][y] = 1;
    }
  }
}

function turnOff(lights, start, finish) {
  for (var x = start.x; x <= finish.x; x++) {
    for (var y = start.y; y <= finish.y; y++) {
      lights[x][y] = 0;
    }
  }
}

function toggle(lights, start, finish) {
  for (var x = start.x; x <= finish.x; x++) {
    for (var y = start.y; y <= finish.y; y++) {
      lights[x][y] = (lights[x][y] ? 0 : 1);
    }
  }
}

instructions.forEach(function (instruction) {
  var match = /^(turn on|toggle|turn off)\s+(\d+,\d+)\sthrough\s(\d+,\d+)$/ig.exec(instruction.trim());
  directions_p1[match[1]](grid, stringToCoords(match[2]), stringToCoords(match[3]));
})

console.log(grid.reduce(function (total, row) {
  return total + row.reduce(function (rowTotal, column) {
    return rowTotal + column;
  }, 0)
}, 0));
