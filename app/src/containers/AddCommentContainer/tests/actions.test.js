import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('AddComment actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.ADDCOMMENT_DEFAULT_ACTION,
      };
      expect(actions.addCommentDefaultAction()).toEqual(expected);
    });
  });
});
