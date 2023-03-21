import { getData, postData, axiosClient } from '../../utils/axios.utils';
import { createActions } from '../../utils/reducer.utils';
import { PRODUCTS_ACTION_TYPES } from './productsActionTypes';

const postProductsData = async (products) => {
    let result = await axiosClient.post('products', products)
    return result.data
}


export const postProductsStart = () =>
    createActions(PRODUCTS_ACTION_TYPES.POST_PRODUCTS_START);

export const postProductsSuccess = (postedProducts) =>
    createActions(
        PRODUCTS_ACTION_TYPES.POST_PRODUCTS_SUCCESS, postedProducts
    );

export const postProductsFailure = (error) =>
    createActions(PRODUCTS_ACTION_TYPES.POST_PRODUCTS_FAILURE, error);
export const fetchProductsStart = () =>
    createActions(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);
const getProductsData = async () => {
    let result = await axiosClient.get('products')
    return result.data
}

export const fetchProductsSuccess = (fetchedProducts) =>
    createActions(
        PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, fetchedProducts
    );
export const setCategories = (categoryArray) =>
    createActions(
        PRODUCTS_ACTION_TYPES.SET_CATEGORIES, categoryArray
    );
export const setProductsByCategory = (categoryProducts) =>
    createActions(
        PRODUCTS_ACTION_TYPES.SET_PRODUCTSBYCATEGORY, categoryProducts
    );

export const fetchProductsFailure = (error) =>
    createActions(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE, error);

export const getProductsAPI = () => {
    return async (dispatch) => {
        dispatch(fetchProductsStart())
        try {
            console.log("In dispatch");
            let fetchedProducts = await getProductsData()
            let categoryArray = [...new Map(fetchedProducts.map((product) =>
                [product.category, product])).values()];
            // let categoryArray = [...new Set(productArray.map(product => product.category))];

            let categoryProducts = categoryArray.map((eachCategory) => { return fetchedProducts.filter(({ category }) => category === eachCategory.category) })

            dispatch(fetchProductsSuccess(fetchedProducts))
            dispatch(setCategories(categoryArray))
            dispatch(setProductsByCategory(categoryProducts))
        }
        catch (error) {
            dispatch(fetchProductsFailure(error))
        }
    }


}

export const postProductsAPI = (products) => {
    return async (dispatch) => {
        dispatch(postProductsStart())
        try {
            let postedProducts = await postProductsData(products)
            let categoryArray = [...new Map(postedProducts.map((product) =>
                [product.category, product])).values()];
            // let categoryArray = [...new Set(productArray.map(product => product.category))];
            let categoryProducts = categoryArray.map((eachCategory) => { return postedProducts.filter(({ category }) => category === eachCategory.category) })
            dispatch(postProductsSuccess(postedProducts))
            dispatch(setCategories(categoryArray))
            dispatch(setProductsByCategory(categoryProducts))
        }
        catch (error) {
            dispatch(postProductsFailure(error))
        }
    }

}


