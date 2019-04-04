import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { ConnectedFilters, Filters } from '../Filters';

describe('Filters Component', () => {
  it('should render a non-connected component', () => {
    const props = {
      children: 'lorem ipsum'
    };

    const component = mount(<Filters {...props} />);
    expect(component.render()).toMatchSnapshot('non-connected');
  });
});
