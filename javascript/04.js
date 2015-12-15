var crypto = require('crypto');

var key = 'iwrupvqb';
var target1 = '00000';
var target2 = target1 + '0';
var targets = [target1, target2];


targets.forEach(function(t) {
  var counter = 1;
  while (true) {
    var value = key + counter;
    var md = crypto.createHash('md5');
    var hd = md.update(value).digest('hex');
    if (hd.startsWith(t)) {
      console.log('Target ' + t
                  + ' count ' + counter
                  + ' hash ' + hd);

      break;
    }

    counter++;
  }

});
