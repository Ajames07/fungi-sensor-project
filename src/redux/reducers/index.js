import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import sensorDataList from './sensorReducer';
import notesDataList from './notesReducer';

const store = combineReducers({
  user,
  login,
  sensorDataList,
  notesDataList,
});

export default store;
