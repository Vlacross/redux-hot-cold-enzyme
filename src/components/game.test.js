import React from 'react';
import { shallow } from 'enzyme';
import {connect} from 'react-redux';
import {generateAuralUpdate, restartGame} from '../actions';

import Game from './game';

describe('<Game />', () => {

  it('renders without crashing', () => {
    shallow(<Game />)
  })

  it('renders something', () => {
    const wrapper = shallow(<Game />)
    // console.log(wrapper.find('InfoSection'))
    expect(wrapper).toBeDefined()
  })

  it('renders header', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.find('Header')).toBeTruthy()
  })

  it('renders main section with 3 components', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.find('main').children()).toHaveLength(3)
  })

  it('should render 3 child components', () => {
    const wrapper = shallow(<Game />);  
    expect(wrapper.find('InfoSection', 'StatusSection', 'GuessSection')).not.toBeFalsy()
  });


})