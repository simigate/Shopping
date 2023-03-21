import { CART_ACTION_TYPES } from './cartActionTypes'

const CART_INITIAL_STATE = {
    cartShown: false,
    cartItems: [],
}
export const CartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_SHOWN:
            return { ...state, cartShown: payload }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            }
        default:
            return state
    }

}
