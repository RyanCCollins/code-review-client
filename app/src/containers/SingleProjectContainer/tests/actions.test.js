import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('SingleProject actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.SINGLEPROJECT_DEFAULT_ACTION,
      };
      expect(actions.singleProjectDefaultAction()).toEqual(expected);
    });
  });
});
