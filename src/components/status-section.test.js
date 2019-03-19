import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import  StatusSection  from './status-section';


describe('StatusSection', () => {

  it('should render without crashing', () => {
    shallow(<StatusSection />)
  });

  it('should something', () => {
    const wrapper = shallow(<StatusSection />)
    expect(wrapper).toBeDefined()
  });

  it('renders 3 components', () => {
    const wrapper = shallow(<StatusSection />)
    expect(wrapper.children()).toHaveLength(3)
  });

  it('renders the proper components', () => {
    const wrapper = shallow(<StatusSection />)
    expect(wrapper.find('GuessCount', 'GuessList', 'AuralStatus')).toBeTruthy()
  });

});
