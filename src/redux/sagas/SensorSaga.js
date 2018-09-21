import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sensorDisplay(action) {
    console.log('post sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.post, '/api/sensor', action.payload);
            const responseAction = { type: 'GET_DATA', payload: sensorResponse.data }
            //yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to post sensor data',error);
    }
}

function* sensorRetrieve(action) {
    console.log('get sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.get, '/api/sensor');
        const responseAction = { type: 'FETCH_DATA', payload: sensorResponse.data }
        yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to get data', error);
    }
    
}

function* SensorSaga() {
    yield takeLatest('POST_DATA', sensorDisplay);
    yield takeLatest('GET_DATA', sensorRetrieve);
  }
export default SensorSaga;