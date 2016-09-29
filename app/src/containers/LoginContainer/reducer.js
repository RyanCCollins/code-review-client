import * as types from './constants';

export const initialState = {
  errors: [],
};

const loginReducer =
  (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

export default loginReducer;
