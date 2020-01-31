const Turn = require('../src/Turn');

class Round {
  constructor(deck, incorrectGuesses = []) {
    this.deck = deck.cards;
    this.turns = 0;
    this.card = this.deck[0];
    this.incorrectGuesses = incorrectGuesses;
  }

  returnCurrentCard() {
    this.card = this.deck[[this.turns]];
    return this.card;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.card);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.turns)
    }
    this.turns++;
    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((100-100*(this.incorrectGuesses.length/this.turns)))
  }

  endRound() {
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
