import React from 'react';
import { mount } from 'enzyme';
import FilterInput from '../FilterInput';

describe('FilterInput Component', () => {
  it('should render a non-connected component', () => {
    const props = {
      id: 'lorem',
      label: 'dolor',
      value: 'ipsum'
    };

    const component = mount(<FilterInput {...props} />);
    expect(component.render()).toMatchSnapshot('non-connected');
  });
});
