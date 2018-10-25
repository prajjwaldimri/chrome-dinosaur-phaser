/* global Phaser */
module.exports = class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.spritesheet('player', 'assets/main-sprite.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.physics.add.sprite(100, 450, 'player');
  }
};
