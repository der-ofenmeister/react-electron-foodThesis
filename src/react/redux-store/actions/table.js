import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchDataRequest = () => {
    return {
        type: actionTypes.FETCH_DATA_REQUEST
    };
};
export const fetchDataSuccess = (finalFoodData, nutrients, graphData) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        finalFoodData,
        nutrients,
        graphData,
    };
};
export const fetchDataFail = error => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    };
};

export const fetchData = (foodId) => {

    return dispatch => {
        dispatch(fetchDataRequest());
        axios.get(`https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=5WmWiWnw6frEhQjWxqW7sk6MVPvjK9AESeHYUZtP`)
        .then(res => {
            const x = res.data;
            console.log("raw data --->",x);
            const y = res.data.foodNutrients.length;
            console.log("food ID ---->", foodId);

            const foodData = [];
            foodData.push({
                name: x.description,
                category: x.foodCategory.description,
                class: x.foodClass,
                sciName: x.scientificName,
                numNutrients: x.foodNutrients.length,
                id: x.fdcId,
            })

            const nutrients = [];

            for (let i=0; i < y; i+=1) {

                nutrients.push({
                    name: x.foodNutrients[i].nutrient.name,
                    amount: x.foodNutrients[i].amount,
                    units: x.foodNutrients[i].nutrient.unitName,
                })
            }

            const graphData = [];

            for (let i=0; i < y; i+=1) {

                graphData.push({
                    name: x.foodNutrients[i].nutrient.name,
                    amount: x.foodNutrients[i].amount,
                })
            }
            const finalFoodData = foodData[0];

            console.log("food data --->", finalFoodData)
            console.log("nutrients --->", nutrients)
            
            dispatch(fetchDataSuccess(finalFoodData, nutrients, graphData));
        })
        .catch(err => {
            dispatch(fetchDataFail(err));
        });
    };

}

