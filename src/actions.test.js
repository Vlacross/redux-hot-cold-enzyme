import {RESTART_GAME, restartGame, MAKE_GUESS, makeGuess, GENERATE_AURAL_UPDATE, generateAuralUpdate } from './actions';


describe('makeGuess', () => {

  it('should return action', () => {
    const guess = 42;
    const action = makeGuess(guess)
    expect(action.type).toEqual(MAKE_GUESS)
    expect(action.guess).toEqual(guess)
  });

})

describe('restartGame', () => {

  it('should return restart action', () => {
    
    const correctAnswer = Math.round(Math.random() * 100) + 1
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME)
    expect(action.correctAnswer).toEqual(correctAnswer)
  });

})

describe('generateAuralUpdate', () => {
  
  it('should return aural update', () => {
    const action = generateAuralUpdate()
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE)
  })
})
