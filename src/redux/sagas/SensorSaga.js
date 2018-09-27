import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sensorDisplay(action) {
    console.log('post sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.post, '/api/sensor', action.payload);
            const responseAction = { type: 'GET_DATA', payload: sensorResponse.data }
            yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to post sensor data',error);
    }
}

function* sensorRetrieve(action) {
    console.log('get sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.get, '/api/sensor');
        console.log(sensorResponse);
        
        const responseAction = { type: 'FETCH_DATA', payload: sensorResponse.data }
        yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to get data', error);
    }   
}

function* sensorEdit(action) {
    console.log('put sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.put, `/api/sensor/${action.payload.id}`, action.payload);
            const responseAction = { type: 'GET_DATA', payload: sensorResponse.data }
            yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to edit sensor data', error);
    }
}

function* sensorDataDelete(action) {
    console.log('delete sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.delete, `/api/sensor/${action.payload}`);
        yield put({ type: 'GET_DATA' }); 
    }catch(error) {
        console.log(error);
        alert('unable to delete sensor data', error)
    }
}

function* SensorSaga() {
    yield takeLatest('POST_DATA', sensorDisplay);
    yield takeLatest('GET_DATA', sensorRetrieve);
    yield takeLatest('PUT_DATA', sensorEdit);
    yield takeLatest('DELETE_DATA', sensorDataDelete);
  }
export default SensorSaga;