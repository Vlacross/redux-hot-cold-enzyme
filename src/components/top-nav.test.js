import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import {TopNav} from './top-nav'


describe('topNav', () => {

  it('should render without crashing', () => {
    shallow(<TopNav />)
  });

  it('renders something', () => {
    const wrapper = shallow(<TopNav />)
    expect(wrapper).toBeDefined()
  });

  it('renders a ul with 3 listing elements', () => {
    const wrapper = shallow(<TopNav />)
    expect(wrapper.find('ul').children()).toHaveLength(3)
  });

  it('trigger dispatch on click of NewGame', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch}/>)
    console.log(wrapper.find('.new').simulate('click'))
    expect(dispatch).toHaveBeenCalled()
  });

});
