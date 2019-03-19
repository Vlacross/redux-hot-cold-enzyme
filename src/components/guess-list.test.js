import React from 'react';

import Enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import { connect } from 'react-redux';

import { GuessList } from './guess-list';

describe('GuessList component', () => {
  
  it('should render without crashing', () => {
    render(<GuessList guesses={[]}/>)
  });

  it('should render without crashing', () => {
    let guesses = [22]
    const wrapper = shallow(<GuessList guesses={guesses}/>)
    console.log(wrapper.children().length)
    expect(wrapper).toBeDefined()
  })

  it('should render same number of children as guesses', () => {
    let guesses = [22, 42, 55]
    const wrapper = shallow(<GuessList guesses={guesses}/>)
    console.log(wrapper.children().length)
    expect(wrapper.children().length).toEqual(guesses.length)
  })






});

