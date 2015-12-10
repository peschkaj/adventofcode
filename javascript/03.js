var fs = require('fs');

var filename = '03.txt';
var contents = fs.readFileSync(filename).toString().trim().split('');
/* Our grid is a multidimension array and uses an x, y coordination plane.
   North is y +1
   South is y -1
   East is  x +1
   West is  x -1
 */
var move = {
  "^": moveNorth,
  "v": moveSouth,
  ">": moveEast,
  "<": moveWest
};

function moveNorth(currentLocation, grid) {
  currentLocation.y = currentLocation.y + 1;
  return visitHouse(currentLocation, grid);
}

function moveSouth(currentLocation, grid) {
  currentLocation.y = currentLocation.y - 1;
  return visitHouse(currentLocation, grid);
}

function moveEast(currentLocation, grid) {
  currentLocation.x = currentLocation.x + 1;
  return visitHouse(currentLocation, grid);
}

function moveWest(currentLocation, grid) {
  currentLocation.x = currentLocation.x - 1;
  return visitHouse(currentLocation, grid);
}

function followDirections(directions) {
  var currentPosition = { 'x': 0, 'y': 0 };
  // initialize a 1 by 1 grid
  var grid = { 0: { 0: 0 } };

  // visit the first house
  grid = visitHouse(currentPosition, grid);

  grid = directions.reduce(
    function (grid, direction) {
      return move[direction](currentPosition, grid)
    }, grid);

  return grid;
}

function visitHouse(location, grid) {
  if (grid[location.x] === undefined) {
    grid[location.x] = { 0: 0 }
  }

  grid[location.x][location.y] = (grid[location.x][location.y] || 0) + 1;
  return grid;
}

function countPresents(grid) {
  var count = 0;

  Object.keys(grid).forEach(function (x) {
    Object.keys(grid[x]).forEach(function (y) {
      if (grid[x][y] && grid[x][y] > 0) {
        count = count + 1;
      }
    })
  });

  return count;
}

var santaMap = followDirections(contents);
var housesWithPresents = countPresents(santaMap);

console.log(housesWithPresents + " houses received presents.");
