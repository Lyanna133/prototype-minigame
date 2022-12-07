import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
  

    constructor()
    {
        super('game')
    }

    create()
    {
        
        const {width, height }    = this.scale

        this.player = this.physics.add.sprite(width * 0.5, height * 0.6, 'sokoban')
            .setSize(40, 16)
            .setOffset(12, 38)
            .play('down-idle')

        // creating the box
        const boxGroup = this.physics.add.staticGroup()

        // creating multiple boxes

        let xPer = 0.25
        let y = 150

        for (let row = 0; row < 3; ++row)
        {
            for (let col = 0; col < 3; ++col)
            {
                const box = boxGroup.get(width * xPer, y, 'sokoban', 10)
                
                box.setSize(64, 32)
                    .setOffset(0, 32)

                xPer += 0.25
            }
    
            xPer = 0.25
            y += 150
        }

        // collider between player and boxes, no running through them
        this.physics.add.collider(this.player, boxGroup)
    }

    init()
    {
        //give acces to arrowkeys
        this.cursors = this.input.keyboard.createCursorKeys()	

    }
    update()
    {
        //being able to walk with the arrowkeys
        const speed = 200
    
        if (this.cursors.left.isDown)
        {
            this.player.setVelocity(-speed, 0)
            this.player.play('left-walk', true)
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocity(speed, 0)
            this.player.play('right-walk', true)
        }
        else if (this.cursors.up.isDown)
        {
            this.player.setVelocity(0, -speed)
            this.player.play('up-walk', true)
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocity(0, speed)
            this.player.play('down-walk', true)
        }
        else
        {
            this.player.setVelocity(0, 0)
            const key = this.player.anims.currentAnim.key
            const parts = key.split('-')
            const direction = parts[0]
            this.player.play(`${direction}-idle`)
        }
        
        // player is behind boxes when behind them and in front when in front them
        this.children.each(c => {
            /** @type {Phaser.Physics.Arcade.Sprite} */
            // @ts-ignore
            const child = c
    
            child.setDepth(child.y)
        })
        
    }
    
}