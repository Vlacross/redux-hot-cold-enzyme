import reducer from './reducer'

import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('reducer', () => {

  

  it('should return initial state when passed unrecognized action', () => {
    const state = reducer(undefined, {type: 'null'})
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: state.correctAnswer
    });
    
  });

  describe('makeGuess', () => {

    it('should add guess to store.state.guesses arr', () => {

      let guess = 22
    let act = makeGuess(guess)
    let state;
    state = reducer(undefined, act)
    expect(state.guesses).toContain(guess)
    });
    
  });
  
  describe('restartGame', () => {

    it('should return an empty array', () => {
      let guess = 24;
      let act = makeGuess(guess);
      let state;
      state = reducer(undefined, act);

      state = reducer(undefined, restartGame());
      expect(state.guesses).toHaveLength(0)
    });

  });

  describe('generateAuralUpdate', () => {

    it('should return aural update', () => {
      let state = reducer(undefined, generateAuralUpdate())
      expect(state.auralStatus).toEqual('Here\'s the status of the game right now: Make your guess! You\'ve made 0 guesses.')
    })

  })




})




