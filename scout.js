var Scout = require('zetta').Scout;
var util = require('util');
var five = require('johnny-five');
var BoardDriver = require('./driver');
var Board = five.Board;

var opts = {
  repl: false,
  debug: false  
}

var JohnnyFiveBoardScout = module.exports = function() {
  Scout.call(this);  
};
util.inherits(JohnnyFiveBoardScout, Scout);

JohnnyFiveBoardScout.prototype.init = function(next) {
  var self = this;
  var board = new Board(opts);
  board.on('ready', function() {
    self.discover(
    
  });
  next();
};



