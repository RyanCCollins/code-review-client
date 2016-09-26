import UserInfo from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<UserInfo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <UserInfo />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
