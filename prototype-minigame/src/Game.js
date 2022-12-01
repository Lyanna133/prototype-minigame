import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }

    create()
    {

        // this.add.image(400, 300, 'sokoban', 52)
        this.add.sprite(400, 300, 'sokoban', 52)
            .play('down-walk') //playing of the animation
    }
}