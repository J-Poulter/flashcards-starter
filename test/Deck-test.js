const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck')
describe('Deck', function() {

  it('should be an instance of Deck', function() {
    const deck = new Deck ([]);
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have an array of the cards it contains or an empty array if it has none', function() {
    const card1 = new Card(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()");
    const card2 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?", ["filter()", "find()", "map()"], "filter()");
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(13, "The callback function for map() returns a modified version of the current element.", ["true", "false"], "true");
    const deck = new Deck([card1, card2, card3, card4]);
    expect(deck.cards).to.deep.equal([card1, card2, card3, card4]);
  });

  it('should be able to count the number of cards it contains', function() {
    const card1 = new Card(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()");
    const card2 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?", ["filter()", "find()", "map()"], "filter()");
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(13, "The callback function for map() returns a modified version of the current element.", ["true", "false"], "true");
    const deck = new Deck([card1, card2, card3, card4]);
    expect(deck.countCards()).to.equal(4);
  });
})
