import expect from 'expect';
import addCommentReducer, { initialState } from '../reducer';

describe('addCommentReducer', () => {
  it('returns the initial state', () => {
    expect(
      addCommentReducer(undefined, {})
    ).toEqual(initialState);
  });
});
