import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import { AuralStatus } from './aural-status';

describe('AuralStatus component', () => {

  it('should render without crashing', () => {
    shallow(<AuralStatus />)
  });

  it('should render something', () => {
    const wrapper = shallow(<AuralStatus />)
    expect(wrapper).toBeDefined()
  });

  it('should render something', () => {
    const mockAuralStatus = 'mockAuraul'
    const wrapper = shallow(<AuralStatus auralStatus={mockAuralStatus} />)
    expect(wrapper.props().children).toEqual(mockAuralStatus)
  });





});



