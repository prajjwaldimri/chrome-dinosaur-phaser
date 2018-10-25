/* global Phaser */
import 'phaser';

import SimpleScene from './scenes/simple-scene';

const gameConfig = {
  width: 680,
  height: 450,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  backgroundColor: '#ffffff',
  scene: SimpleScene,
};

new Phaser.Game(gameConfig); // eslint-disable-line
