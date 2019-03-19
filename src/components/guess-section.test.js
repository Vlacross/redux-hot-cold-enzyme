import React from 'react';

import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import GuessSection from './guess-section'

describe('GuessSection component', () => {

  it('should render without crashing', () => {
    shallow(<GuessSection />)
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<GuessSection />)
    expect(wrapper).toBeDefined()
  });

  it('should render proper components', () => {
    const wrapper = shallow(<GuessSection />)
    expect(wrapper.find('Feedback', 'GuessForm')).toBeTruthy()
  });

});

