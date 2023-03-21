
import { createSelector } from 'reselect'

export const cartSelector = (state) => state.cart
/* export const selectCartShown = (state) => state.cart.cartShown
export const selectCartItems = (state) => state.cart.cartItems
export const selectCartCount = (state) => state.cart.cartCount
export const selectCartTotal = (state) => state.cart.cartTotal
 */

export const selectCartShown = createSelector([cartSelector], (cart) => cart.cartShown)
export const selectCartItems = createSelector([cartSelector], (cart) => cart.cartItems)
export const selectCartCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0))
export const selectCartTotal = createSelector([selectCartItems], (cartItems) => cartItems.reduce((amount, item) => amount + item.quantity * item.price, 0))

