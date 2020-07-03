import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    graphData: [],
    finalFoodData:[],
    nutrients:[],
    error: null,
    loading: false,
};


const fetchDataRequest = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const fetchDataSuccess = (state, action) => {
    return updateObject(state, {
      graphData: action.graphData,
      finalFoodData: action.finalFoodData,
      nutrients: action.nutrients,
      error: null,
      loading: false
    });
};
  
  const fetchDataFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_DATA_REQUEST:
        return fetchDataRequest(state, action);
      case actionTypes.FETCH_DATA_SUCCESS:
        return fetchDataSuccess(state, action);
      case actionTypes.FETCH_DATA_FAIL:
        return fetchDataFail(state, action);
      default:
        return state;
    }
  };
  
export default reducer;
