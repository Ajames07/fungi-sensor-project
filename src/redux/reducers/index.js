import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import sensorDataList from './sensorReducer';

const store = combineReducers({
  user,
  login,
  sensorDataList,
});

export default store;
