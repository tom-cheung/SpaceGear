import * as CatAPIUtil from "../util/category_util";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";


const receiveCategory = (categories) => {
    return({
        type: RECEIVE_CATEGORY, 
        categories: categories
    })
}

// returns a normal POJO to be dispatched to the reducer and update the state 

export const fetchCategory = () => (dispatch) => {
    return CatAPIUtil.fetchCategory().then(
        (categories) => dispatch(receiveCategory(categories))
    )
}

// this needs to be exported to a container. Likely the header container
