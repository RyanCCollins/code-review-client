import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';
import landingContainer from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LoginContainer/reducer';

const rootReducer = combineReducers({
  loginContainer,
  landingContainer,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
