import React from 'react';

import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import { GuessForm } from './guess-form';

describe('GuessForm component', () => {

  it('should render without crashing', () => {
    shallow(<GuessForm />)
  });

  it('should render something', () => {
    const wrapper = shallow(<GuessForm />)
    expect(wrapper).toBeDefined()
  });


})






