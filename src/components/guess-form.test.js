import React from 'react';

import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';

import { connect } from 'react-redux';

import { GuessForm } from './guess-form';

describe('GuessForm component', () => {

  it('should render without crashing', () => {
    shallow(<GuessForm />)
  });

  it('should render something', () => {
    const wrapper = shallow(<GuessForm />)
    expect(wrapper).toBeDefined()
  });

  it('should render input and button', () => {
    const wrapper = shallow(<GuessForm />)
    expect(wrapper.find('input', 'button')).toBeTruthy()
  });

  it('should recreate an instance of component', () => {
    const wrapper = mount(<GuessForm />)
    const instance = wrapper.instance()
    expect(instance).toBeInstanceOf(GuessForm)
  });

  it('should trigger submit method', () => {
    const event = jest.fn();
    const wrapper = mount(<GuessForm onSubmit={event} dispatch={event} />)
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'onSubmit')
    const button = wrapper.find('button')
    button.simulate('submit')
    expect(spy).toHaveBeenCalled()
  });


})






