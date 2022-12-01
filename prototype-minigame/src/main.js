import Phaser from 'phaser'

// import HelloWorldScene from './HelloWorldScene'
import Game from './Game'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [Game],
}

export default new Phaser.Game(config)