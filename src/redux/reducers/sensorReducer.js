import { combineReducers } from 'redux';

const sensorData = [];

const SensorDataList = (state = sensorData, action) => {
    switch (action.type) {
      case 'FETCH_DATA' :
      return [ ...state,action.payload ]
      default:
      return state;
    }
  };

  export default combineReducers({
    SensorDataList,
  });