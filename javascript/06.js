var fs = require('fs');
var filename = '06.txt';

var grid_size = 1000;

// pre-fill our grid system
var grid = setUpGrid(grid_size);

var directions_p1 = {
  "turn on" : turnOn,
  "turn off" : turnOff,
  "toggle" : toggle
} ;

var directions_p2  = {
  "turn on" : increaseByOne,
  "turn off" : decrease,
  "toggle" : increaseByTwo
}

var instructions = fs.readFileSync(filename).toString().trim().split('\n');
var regex = /^(turn on|toggle|turn off)\s+(\d+,\d+)\sthrough\s(\d+,\d+)$/ig;

function setUpGrid(size) {
  var grid = [];

  for (var i = 0; i < size; i++) {
    grid.push(Array.apply(null, Array(size)).map(function () { return 0; }));
  }

  return grid;
}

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

// part 2 functions
function increase(lights, start, finish, by) {
  for (var x = start.x; x <= finish.x; x++) {
    for (var y = start.y; y <= finish.y; y++) {
      lights[x][y] = lights[x][y] + by;
    }
  }
}

function decrease(lights, start, finish) {
  for (var x = start.x; x <= finish.x; x++) {
    for (var y = start.y; y <= finish.y; y++) {
      lights[x][y] = Math.max(lights[x][y] - 1, 0);
    }
  }
}

function increaseByOne(lights, start, finish) {
  increase(lights, start, finish, 1);
}

function increaseByTwo(lights, start, finish) {
  increase(lights, start, finish, 2);
}

// part 1 solution
instructions.forEach(function (instruction) {
  var match = /^(turn on|toggle|turn off)\s+(\d+,\d+)\sthrough\s(\d+,\d+)$/ig.exec(instruction.trim());
  directions_p1[match[1]](grid, stringToCoords(match[2]), stringToCoords(match[3]));
});

console.log(grid.reduce(function (total, row) {
  return total + row.reduce(function (rowTotal, column) {
    return rowTotal + column;
  }, 0)
}, 0));



// part 2 solution
grid = setUpGrid(grid_size);

instructions.forEach(function (instruction) {
  var match = /^(turn on|toggle|turn off)\s+(\d+,\d+)\sthrough\s(\d+,\d+)$/ig.exec(instruction.trim());
  directions_p2[match[1]](grid, stringToCoords(match[2]), stringToCoords(match[3]));
});

console.log(grid.reduce(function (total, row) {
  return total + row.reduce(function (rowTotal, column) {
    return rowTotal + column;
  }, 0)
}, 0));
