import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import sensorSaga from './sensorSaga';
import notesSaga from './notesSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    sensorSaga(),
    notesSaga(),
    // watchIncrementAsync()
  ]);
}
