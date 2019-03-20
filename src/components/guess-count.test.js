import React from 'react';

import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import { GuessCount } from './guess-count';

describe('GuessCount component', () => {

  it('should render without crashing', () => {
    shallow(<GuessCount />)
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<GuessCount guessCount={1} />)
    expect(wrapper).toBeDefined();
  });

  it('should set variable \'guessNoun\' to singluar', () => {
    const wrapper = shallow(<GuessCount guessCount={1} />)
    expect(wrapper.props().children[3]).toEqual('guess');
  });

  it('should set variable \'guessNoun\' to plural', () => {
    const wrapper = shallow(<GuessCount guessCount={2} />)
    expect(wrapper.props().children[3]).toEqual('guesses');
  });

  it('should set variable \'guessNoun\' to singluar', () => {
    const guessCount = 55
    const wrapper = shallow(<GuessCount guessCount={guessCount} />)
    expect(wrapper.find('#count').props().children).toEqual(guessCount);
  });


})



