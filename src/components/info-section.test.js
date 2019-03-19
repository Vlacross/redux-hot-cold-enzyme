import React from 'react';

import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import InfoSection from './info-section.js';

describe('info-section componenet', () => {

  it('should render without crashing', () => {
    shallow(<InfoSection />)
  });

  it('should render something', () => {
    const wrapper = shallow(<InfoSection />)
    expect(wrapper).toBeDefined()
  });

  it('should render the proper number of elements', () => {
    const wrapper = shallow(<InfoSection />)
    expect(wrapper.children()).toHaveLength(4)

  })



})


