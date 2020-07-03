import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchSearchRequest = () => {
    return {
        type: actionTypes.FETCH_SEARCH_REQUEST
    };
};
export const fetchSearchSuccess = (finalFoodSearch, searchQuery, numHits) => {
    return {
        type: actionTypes.FETCH_SEARCH_SUCCESS,
        finalFoodSearch,
        searchQuery,
        numHits,
    };
};
export const fetchSearchFail = error => {
    return {
        type: actionTypes.FETCH_SEARCH_FAIL,
        error: error
    };
};

export const fetchSearch = (queryStr) => {

    return dispatch => {
        dispatch(fetchSearchRequest());
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=5WmWiWnw6frEhQjWxqW7sk6MVPvjK9AESeHYUZtP&pageSize=100&dataType=SR%20Legacy&query=${queryStr}`)
        .then(res => {
            const x = res.data;
            console.log("raw data --->", x);
            const y = x.foods.length;

            const finalFoodSearch = [];

            for (let i=0; i < y; i+=1) {

                finalFoodSearch.push({
                    name: x.foods[i].description,
                    description: x.foods[i].additionalDescriptions,
                    fdcId: x.foods[i].fdcId,
                    numNut: x.foods[i].foodNutrients.length,
                    dataType: x.foods[i].dataType,
                })
            }
            const searchQuery = queryStr;
            const numHits = x.totalHits;


            console.log("food data --->", finalFoodSearch)
            
            dispatch(fetchSearchSuccess(finalFoodSearch, searchQuery, numHits));
        })
        .catch(err => {
            dispatch(fetchSearchFail(err));
        });
    };

}

