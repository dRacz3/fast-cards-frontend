const gameStateTextNicer = new Map();

gameStateTextNicer.set('STARTING', 'Game is starting.');
gameStateTextNicer.set('PLAYERS_SUBMITTING_CARDS', 'Submit your best cards.');
gameStateTextNicer.set('TZAR_CHOOSING_WINNER', 'Time to chose a winner!');
gameStateTextNicer.set('FINISHED', 'This game has ended.');
gameStateTextNicer.get(undefined, '');
gameStateTextNicer.get(null, '');

module.exports = {
  gameStateTextNicer,
};
