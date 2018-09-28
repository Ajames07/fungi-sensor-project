import { combineReducers } from 'redux';

const notesData = [];

const notesDataList = (state = notesData, action) => {
    switch (action.type) {
        case 'RETRIEVE_NOTES' :
        return action.payload
        default:
        return state;
    }
};

export default combineReducers({
    notesDataList,
});
