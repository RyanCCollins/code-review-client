import CardItem from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CardItem />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CardItem>
        <div>
          Hello World
        </div>
      </CardItem>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
