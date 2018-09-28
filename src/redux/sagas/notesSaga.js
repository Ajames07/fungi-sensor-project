import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* notesDisplay(action) {
    console.log('post notes saga with action', action);
    try {
        const notesResponse = yield call(axios.post, '/api/notes', action.payload);
            const responseAction = { type: 'GET_DATA', payload: notesResponse.data }
            yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to post notes data',error);
    }
}

function* notesRetrieve(action) {
    console.log('get notes saga with action', action);
    try {
        const notesResponse = yield call(axios.get, '/api/notes/');
        console.log(notesResponse);
        
        const responseAction = { type: 'RETRIEVE_NOTES', payload: notesResponse.data }
        yield put(responseAction);
        console.log(notesResponse);
        
    }catch(error) {
        console.log(error);
        alert('unable to get data', error);
    }   
}

function* updateNotes(action) {
    console.log('update notes saga with put action');
    try {
        yield call(axios.put, `/api/notes/update/${action.payload}`)
    }catch(error) {
        console.log(error);
        alert('unable to display notes');
    }
}

// function* notesEdit(action) {
//     console.log('put notes saga with action', action);
//     try {
//         const notesResponse = yield call(axios.put, `/api/notes/${action.payload.id}`, action.payload);
//             const responseAction = { type: 'GET_DATA', payload: notesResponse.data }
//             yield put(responseAction);
//     }catch(error) {
//         console.log(error);
//         alert('unable to edit notes data', error);
//     }
// }

// function* notesDataDelete(action) {
//     console.log('delete notes saga with action', action);
//     try {
//         const notesResponse = yield call(axios.delete, `/api/notes//${action.payload}`);
//         yield put({ type: 'GET_DATA' }); 
//     }catch(error) {
//         console.log(error);
//         alert('unable to delete notes data', error)
//     }
// }

function* notesSaga() {
    yield takeLatest('POST_DATA', notesDisplay);
    yield takeLatest('GET_DATA', notesRetrieve);
    // yield takeLatest('PUT_DATA', notesEdit);
    // yield takeLatest('DELETE_DATA', notesDataDelete);
    yield takeLatest('UPDATE_NOTES', updateNotes);
}

export default notesSaga;