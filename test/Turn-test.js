const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('objects')
    expect(turn.guess).to.deep.equal('objects')
  });

  it('should store a card object', function() {
    const card = new Card(1, 'What is the correct answer?', ['correct answer', 'wrong answer', 'idk'], 'correct answer')
    const turn = new Turn('wrong answer', card)
    expect(turn.card).to.deep.equal({id: 1, question: 'What is the correct answer?', answers: ['correct answer', 'wrong answer', 'idk'], correctAnswer: 'correct answer'})
  });

  it("should return the turn's guess", function() {
    const card = new Card(1, 'What is the correct answer?', ['correct answer', 'wrong answer', 'idk'], 'correct answer')
    const turn = new Turn('wrong answer', card)
    expect(turn.returnGuess()).to.deep.equal('wrong answer')
  });

  it("should return the turn's card", function() {
    const card = new Card(1, 'What is the correct answer?', ['correct answer', 'wrong answer', 'idk'], 'correct answer')
    const turn = new Turn('wrong answer', card)
    expect(turn.returnCard()).to.deep.equal({id: 1, question: 'What is the correct answer?', answers: ['correct answer', 'wrong answer', 'idk'], correctAnswer: 'correct answer'})
  });

  it("should evaluate the guess and return boolean based on if it's correct", function() {
    const card = new Card(1, 'What is the correct answer?', ['correct answer', 'wrong answer', 'idk'], 'correct answer')
    const turn = new Turn('wrong answer', card)
    expect(turn.evaluateGuess()).to.deep.equal(false)
  });

  it('should give feedback based on if question is correct or not', function() {
    const card = new Card(1, 'What is the correct answer?', ['correct answer', 'wrong answer', 'idk'], 'correct answer')
    const turn = new Turn('correct answer', card)
    expect(turn.giveFeedback()).to.deep.equal('correct!')
  });
})
