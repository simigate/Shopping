import { PRODUCTS_ACTION_TYPES } from './productsActionTypes'

const PRODUCT_INITIAL_STATE = {
    products: [],
    categories: [],
    productsByCategory: [],
    isLoading: false,
    error: null,
}
export const ProductsReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
            return { ...state, isLoading: true }
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload,
            }
        case PRODUCTS_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        case PRODUCTS_ACTION_TYPES.SET_PRODUCTSBYCATEGORY:
            return {
                ...state,
                productsByCategory: payload,
            }
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, error: payload }
        case PRODUCTS_ACTION_TYPES.POST_PRODUCTS_START:
            return { ...state, isLoading: true }
        case PRODUCTS_ACTION_TYPES.POST_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload,
            }
        case PRODUCTS_ACTION_TYPES.POST_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, error: payload }
        default:
            return state
    }

}

