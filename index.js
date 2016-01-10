var pixel = require('node-pixel');
var five = require('johnny-five');


var opts = {
  repl: false,
  debug: false  
}
var board = new five.Board(opts);
var strip = null;

board.on('ready', function() {
  
  strip = new pixel.Strip({
    board: this,
    controller: 'FIRMATA', 
    data: 6,
    length: 1,
    color_order: pixel.COLOR_ORDER.RGB
  });
  
  strip.on('ready', function() {
    strip.clear();
    strip.show();
  });  

  strip.on('error', function(err) {
    console.log(err);  
  });
  

});
