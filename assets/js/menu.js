var Menu = {
	preload: function() {
		game.load.image('menu', './assets/images/zergback.svg');
	},
	create: function()  {
		this.add.sprite(0, 0, 'menu');
	}
};