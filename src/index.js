/* global Phaser */
import 'phaser';

import { debug } from 'util';
import SimpleScene from './scenes/simple-scene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene,
};

const game = new Phaser.Game(gameConfig);
debug(game);
