var game;

game=new Phaser.Game(650, 450, Phaser.AUTO,'');

game.state.add('Menu', Menu);

game.state.start('Menu');