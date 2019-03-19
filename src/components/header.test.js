import React from 'react';

import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import Header from './header';

describe('Header component', () => {

  it('should render without crashing', () => {
    shallow(<Header />)
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toBeDefined()
  });

  it('should render proper number of elements', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.children()).toHaveLength(2)
  });

  it('should render topnav component', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('TopNav')).toBeTruthy()
  });
  

})
