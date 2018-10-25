/* global Phaser window */
import 'phaser';

import SimpleScene from './scenes/simple-scene';

const gameConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1800 },
      debug: true,
    },
  },
  backgroundColor: '#ffffff',
  scene: SimpleScene,
};

new Phaser.Game(gameConfig); // eslint-disable-line
