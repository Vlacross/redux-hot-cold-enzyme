import React from 'react';

import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import { Feedback } from './feedback';

describe('Feedback component', () => {

  it('should render without crashing', () => {
    shallow(<Feedback />)
  });

  it('should render something', () => {
    const wrapper = shallow(<Feedback />)
    expect(wrapper).toBeDefined()
  });

  it('should render the passed feedback', () => {
    const mockFeed = 'mockFeed'
    const wrapper = shallow(<Feedback guessCount={2} feedback={mockFeed} />)
    expect(wrapper.props().children[0]).toEqual(mockFeed)
  });

  it('should render guessAgain span after first guess', () => {
    const mockFeed = 'mockFeed'
    const wrapper = shallow(<Feedback guessCount={2} feedback={mockFeed} />)
    expect(wrapper.find('span')).toBeTruthy()
  });

  it('should not render guessAgain span before first guess is submitted', () => {
    const mockFeed = 'mockFeed'
    const wrapper = shallow(<Feedback guessCount={0} feedback={mockFeed} />)
    expect(wrapper.props().children[2]).toBeFalsy()
  });


});


