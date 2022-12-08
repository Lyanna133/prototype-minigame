//loading in all the assets before the game starts
import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    preload()
    {
        //loading in of the spritesheet
        this.load.spritesheet('sokoban', 'textures/sokoban_tilesheet.png',{
            frameWidth: 64
        })
        //loading in of the animal img for in the boxes
        this.load.image('crocodile', 'textures/crocodile.png')
        this.load.image('giraffe', 'textures/giraffe.png')
        this.load.image('penguin', 'textures/penguin.png')
        this.load.image('parrot', 'textures/parrot.png')
        this.load.image('owl', 'textures/owl.png')
    }

    create()
    {
        // getting all the animations from the spritesheet, so the player walks
        this.anims.create({
            key: 'down-idle',
            frames: [{ key: 'sokoban', frame: 52 }]
        })
        this.anims.create({
            key: 'down-walk',
            frames: this.anims.generateFrameNumbers('sokoban', { start: 52, end: 54 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'up-idle',
            frames: [{ key: 'sokoban', frame: 55 }]
        })
        this.anims.create({
            key: 'up-walk',
            frames: this.anims.generateFrameNumbers('sokoban', { start: 55, end: 57 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'left-idle',
            frames: [{ key: 'sokoban', frame: 81 }]
        })
        this.anims.create({
            key: 'left-walk',
            frames: this.anims.generateFrameNumbers('sokoban', { start: 81, end: 83 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'right-idle',
            frames: [{ key: 'sokoban', frame: 78 }]
        })
        this.anims.create({
            key: 'right-walk',
            frames: this.anims.generateFrameNumbers('sokoban', { start: 78, end: 80 }),
            frameRate: 10,
            repeat: -1
        })
        
        //start of the game scene
        this.scene.start('game')
    }
    
}