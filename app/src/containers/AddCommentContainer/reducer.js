import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isSubmitting: false,
};

const addCommentReducer =
  (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

export default addCommentReducer;
