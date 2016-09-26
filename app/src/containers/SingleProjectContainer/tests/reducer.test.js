import expect from 'expect';
import singleProjectReducer, { initialState } from '../reducer';

describe('singleProjectReducer', () => {
  it('returns the initial state', () => {
    expect(
      singleProjectReducer(undefined, {})
    ).toEqual(initialState);
  });
});
