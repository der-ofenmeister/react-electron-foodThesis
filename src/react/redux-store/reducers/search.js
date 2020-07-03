import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    finalFoodSearch:[],
    searchQuery: null,
    error: null,
    loading: false,
};


const fetchSearchRequest = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const fetchSearchSuccess = (state, action) => {
    return updateObject(state, {
      finalFoodSearch: action.finalFoodSearch,
      searchQuery: action.searchQuery,
      error: null,
      loading: false
    });
};
  
  const fetchSearchFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_SEARCH_REQUEST:
        return fetchSearchRequest(state, action);
      case actionTypes.FETCH_SEARCH_SUCCESS:
        return fetchSearchSuccess(state, action);
      case actionTypes.FETCH_SEARCH_FAIL:
        return fetchSearchFail(state, action);
      default:
        return state;
    }
  };
  
export default reducer;
