var fs = require('fs');
var filename = '07.txt';
var instructions = fs.readFileSync(filename).toString().trim().split('\n');
instructions = instructions.map(function(i) {
  var rObj = {};
  var parts = i.trim().split('->');
  rObj.command = parts[0].trim();
  rObj.output = parts[1].trim();
  return rObj;
})

var starter = [];
var usedInstructions = [];



var wires = {};
var gates = {
  'AND' : andGate,
  'LSHIFT' : lShiftGate,
  'RSHIFT' : rShiftGate,
  'NOT' : notGate,
  'OR' : orGate
} ;

function andGate(left, right, target) {

}

function lShiftGate(left, shift, target) {

}

function rShiftGate(left, shift, target) {

}

function notGate(left, target) {

}

function orGate(left, right, target) {

}

function onlyDigits(input) {
  return /^\d+$/g.test(input);
}

// find starting locations (e.g. `1 -> ab`)
for (var i = 0; i < instructions.length; i++) {
  var inst = instructions[i];
  if (onlyDigits(inst.command)) {
    wires[inst.output] = inst.command;
    // doesn't actually delete, just sets to undefined
    delete instructions[i];
  }
}

while (true) {
  for (var wire in wires) {

  }

  break;
}
