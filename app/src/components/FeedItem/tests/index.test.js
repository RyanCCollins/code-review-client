import FeedItem from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FeedItem />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedItem
        project={{
          title: 'Hello World',
          description: 'A project',
          slug: 'hello-world',
          comments: [
            {
              id: 0,
              content: 'Hello World',
            },
          ],
          user: {
            name: 'Ryan Collins',
          },
        }}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
