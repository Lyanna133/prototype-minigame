import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    preload()
    {
        // load in spritesheet
        this.load.spritesheet('sokoban', 'textures/sokoban_tilesheet.png', {
        frameWidth: 64
        })
    }

    create()
    {
        // animations and choosing img from spritesheet
        this.anims.create({
            key: 'down-walk',
            frames: this.anims.generateFrameNumbers('sokoban', { start: 52, end: 54 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'up-walk',
		    frames: this.anims.generateFrameNumbers('sokoban', { start: 55, end: 57 }),
		    frameRate: 10,
		    repeat: -1
        })

        this.anims.create({
            key: 'left-walk',
            frames: this.anims.generateFrameNumbers('sokoban', { start: 81, end: 83 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'right-walk',
		    frames: this.anims.generateFrameNumbers('sokoban', { start: 78, end: 80 }),
		    frameRate: 10,
		    repeat: -1
        })

        // start the game scene
        this.scene.start('game')
    }
}