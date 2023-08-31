import { combineReducers } from 'redux';
import inViewReducer from './inViewReducer';
import emailReducer from './emailReducer';

export default combineReducers({
  inView: inViewReducer,
  email: emailReducer,
});
