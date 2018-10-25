/* global Phaser */

let player;
let ground;

module.exports = class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.spritesheet('playerStanding', 'assets/player-stand.png', {
      frameWidth: 88,
      frameHeight: 103,
    });
    this.load.spritesheet('playerDucking', 'assets/player-duck.png', {
      frameWidth: 118,
      frameHeight: 100,
    });
    this.load.spritesheet('ground', 'assets/ground.png', {
      frameWidth: 1202,
      frameHeight: 24,
    });
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    // Player Physics
    player = this.physics.add.sprite(0, 300, 'player');
    player.setSize(88, 90, false);
    player.setCollideWorldBounds(true);

    // Ground
    ground = this.physics.add.staticGroup();
    ground.create(0, 420, 'ground').refreshBody();

    this.physics.add.collider(player, ground);

    // PLayer Animations
    this.anims.create({
      key: 'running',
      frames: this.anims.generateFrameNumbers('playerStanding', { start: 2, end: 3 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: 'ducking',
      frames: this.anims.generateFrameNumbers('playerDucking', { start: 0, end: 2 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: 'default',
      frames: [{ key: 'playerStanding', frame: 0 }],
    });

    this.anims.create({
      key: 'dead',
      frames: [{ key: 'playerStanding', frame: 4 }],
    });

    player.anims.play('running');
    console.log(player.anims);
  }

  update() {
    // Player Controls
    if (this.cursors.up.isDown && player.body.touching.down) {
      player.anims.play('default');
      player.setVelocityY(-330);
    } else if (this.cursors.down.isDown && player.body.touching.down) {
      if (player.anims.currentAnim.key !== 'ducking') {
        player.anims.play('ducking');
      }
      player.setSize(118, 90, false);
    } else if (player.anims.currentAnim.key !== 'running') {
      // Play default running animation always
      player.anims.play('running');
      player.setSize(88, 90, false);
    }
  }
};
