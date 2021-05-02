import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import register from './register';
import apis from './getAPIReducer';

export default combineReducers({
  alerts,
  auth,
  navigation,
  register,
  apis,
});
