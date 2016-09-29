import UserInfo from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<UserInfo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <UserInfo
        user={{
          name: 'Ryan Collins',
          avatar: 'https://ryancollins.io/avatar.png',
        }}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
