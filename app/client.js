'use strict';
var $ = require('jquery');
require('howler');

var djjff = new Howl({
//hidden track from DJ Jester the Filipino Fist:
  urls: ['./assets/sounds/DJJFF_hiddentrack.mp3'],
  volume: 0.5
});

var comp = new Howl({
  urls: ['./assets/sounds/CartoonComp.mp3', './assets/sounds/CartoonComp.ogg',
  './assets/sounds/CartoonComp.wav'],
  sprite: {
    boing: [0, 2000],
    zip: [2000, 700],
    pop: [4000, 500],
    shake: [4500, 1000],
    slip: [6500, 1000]
  }
});

$(function() {

  $('#ex1-play1').on('click', function() {
    comp.play('boing');
  });
  $('#ex1-play2').on('click', function() {
    comp.play('zip');
  });
  $('#ex1-play3').on('click', function() {
    comp.play('pop');
  });
  $('#ex1-play4').on('click', function() {
    comp.play('shake');
  });
  $('#ex1-play5').on('click', function() {
    comp.play('slip');
  });
  $('#ex1-play6').on('click', function() {
    comp.play('boing');
    comp.play('zip');
    comp.play('pop');
    comp.play('shake');
    comp.play('slip');
  });

  $('#ex2-play').on('click', function() {
    djjff.stop().fadeIn(0.5, 10).play();
  });
  $('#ex2-pause').on('click', function() {
    djjff.pause();
  });
  $('#ex2-stop').on('click', function() {
    djjff.stop();
  });
  $('#ex2-fadein').on('click', function() {
    djjff.pause().fadeIn(0.5, 2000);
  });
  $('#ex2-fadeout').on('click', function() {
    djjff.fadeOut(0, 2000);
  });
});
