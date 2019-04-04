import React from 'react';
import { mount } from 'enzyme';
import FilterDropdown from '../FilterDropdown';

describe('FilterDropdown Component', () => {
  it('should render a non-connected component', () => {
    const props = {};

    const component = mount(<FilterDropdown {...props} />);
    expect(component.render()).toMatchSnapshot('non-connected');
  });
});
