import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchListRequest = () => {
    return {
        type: actionTypes.FETCH_LIST_REQUEST
    };
};
export const fetchListSuccess = (finalFoodList) => {
    return {
        type: actionTypes.FETCH_LIST_SUCCESS,
        finalFoodList,
    };
};
export const fetchListFail = error => {
    return {
        type: actionTypes.FETCH_LIST_FAIL,
        error: error
    };
};

export const fetchList = () => {

    return dispatch => {
        dispatch(fetchListRequest());
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/list?api_key=5WmWiWnw6frEhQjWxqW7sk6MVPvjK9AESeHYUZtP&pageSize=100`)
        .then(res => {
            const x = res.data;
            console.log("raw data --->",x);
            const y = x.length;
            // console.log("food ID ---->", foodId);

            // const foodList = [];
            // foodList.push({
            //     name: x.description,
            //     category: x.foodCategory.description,
            //     class: x.foodClass,
            //     sciName: x.scientificName,
            //     numNutrients: x.foodNutrients.length,
            //     id: x.fdcId,
            // })

            const finalFoodList = [];

            for (let i=0; i < y; i+=1) {

                finalFoodList.push({
                    name: x[i].description,
                    fdcId: x[i].fdcId,
                    numNut: x[i].foodNutrients.length,
                })
            }
            // const finalFoodList = foodList[0];

            console.log("food data --->", finalFoodList)
            // console.log("nutrients --->", nutrients)
            
            dispatch(fetchListSuccess(finalFoodList));
        })
        .catch(err => {
            dispatch(fetchListFail(err));
        });
    };

}

