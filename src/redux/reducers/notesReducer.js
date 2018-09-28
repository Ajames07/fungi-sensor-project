import { combineReducer } from 'redux';

const notesData = [];

const notesDataList = (state = [{}], action) => {
    switch (action.type) {
        case 'RETRIEVE_NOTES' :
        return action.payload
        default:
        return state;
    }
};

export default   notesDataList;
