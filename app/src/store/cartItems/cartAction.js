import { CART_ACTION_TYPES } from './cartActionTypes'
import { createActions } from '../../utils/reducer.utils'
import { selectCartItems } from "./cartSelector";

const addItem = (cartItemsArr, itemToAdd) => {
    let itemCartIndex = cartItemsArr.findIndex((item) => item.id === itemToAdd.id)

    if (itemCartIndex !== -1) {
        let updatedCart = [...cartItemsArr]
        updatedCart[itemCartIndex].quantity = cartItemsArr[itemCartIndex].quantity + 1
        return updatedCart
    }
    return [...cartItemsArr, { ...itemToAdd, quantity: 1 }]
}
const increaseItemQtybyOne = (cartItemsArr, itemToAdd) => {
    let itemCartIndex = cartItemsArr.findIndex((item) => item.id === itemToAdd.id)

    if (itemCartIndex !== -1) {
        let updatedCart = [...cartItemsArr]
        updatedCart[itemCartIndex].quantity = cartItemsArr[itemCartIndex].quantity + 1
        return updatedCart
    }

}
const decreaseItemQtybyOne = (cartItemsArr, itemToRemove) => {
    let itemCartIndex = cartItemsArr.findIndex((item) => item.id === itemToRemove.id)
    let updatedCart = [...cartItemsArr]
    //remove from cart when qty is 1
    if (itemCartIndex !== -1 && cartItemsArr[itemCartIndex].quantity === 1) {
        updatedCart.splice(itemCartIndex, 1)
        return updatedCart
    }
    if (itemCartIndex !== -1) {
        updatedCart[itemCartIndex].quantity = cartItemsArr[itemCartIndex].quantity - 1
        return updatedCart
    }

}
const removeItem = (cartItemsArr, itemToRemove) => {
    let updatedCart = [...cartItemsArr]
    let itemCartIndex = cartItemsArr.findIndex((item) => item.id === itemToRemove.id)

    if (itemCartIndex !== -1) {
        updatedCart.splice(itemCartIndex, 1)
        return updatedCart
    }
}
const changeItemQty = (cartItemsArr, itemToChange) => {
    let updatedCart = [...cartItemsArr]
    let itemCartIndex = cartItemsArr.findIndex((item) => item.id === itemToChange.id)
    console.log('item', itemToChange)
    if (itemCartIndex !== -1) {
        updatedCart[itemCartIndex] = itemToChange
        return updatedCart
    }
}

export const addProductToCart = (cartItems, productDetails) => {

    const newCartItem = addItem(cartItems, productDetails)
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}
export const incrementProductQty = (cartItems, productDetails) => {
    const newCartItem = increaseItemQtybyOne(cartItems, productDetails)
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}
export const decrementProductQty = (cartItems, productDetails) => {
    const newCartItem = decreaseItemQtybyOne(cartItems, productDetails)
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}
export const removeProductFromCart = (cartItems, productDetails) => {
    const newCartItem = removeItem(cartItems, productDetails)
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}
export const changeProductQtyInCart = (cartItems, productDetails) => {
    const newCartItem = changeItemQty(cartItems, productDetails)
    return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}

export const setCartShown = (prevState) => {
    return createActions(CART_ACTION_TYPES.SET_CART_SHOWN, !prevState)
}

