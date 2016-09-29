import AddComment from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<AddComment />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <AddComment />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
