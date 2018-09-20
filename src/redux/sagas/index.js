import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import SensorSaga from './SensorSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    SensorSaga(),
    // watchIncrementAsync()
  ]);
}
