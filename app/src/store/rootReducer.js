import { combineReducers } from "redux";
import { CartReducer } from "./cartItems/cartReducer";
import { ProductsReducer } from "./products/productsReducer";

export const rootReducer = combineReducers({
    cart: CartReducer,
    products: ProductsReducer
})