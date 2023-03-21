import { createContext, useEffect, useState } from "react";

const addItem = (cartItemsArr, productToAdd) => {
    let productCartIndex = cartItemsArr.findIndex((item) => item.id === productToAdd.id)

    if (productCartIndex !== -1) {
        let updatedCart = [...cartItemsArr]
        updatedCart[productCartIndex].quantity = cartItemsArr[productCartIndex].quantity + 1
        return updatedCart
    }
    return [...cartItemsArr, { ...productToAdd, quantity: 1 }]
}
const increaseItemQtybyOne = (cartItemsArr, productToAdd) => {
    let productCartIndex = cartItemsArr.findIndex((item) => item.id === productToAdd.id)

    if (productCartIndex !== -1) {
        let updatedCart = [...cartItemsArr]
        updatedCart[productCartIndex].quantity = cartItemsArr[productCartIndex].quantity + 1
        return updatedCart
    }

}
const decreaseItemQtybyOne = (cartItemsArr, productToAdd) => {
    let productCartIndex = cartItemsArr.findIndex((item) => item.id === productToAdd.id)
    let updatedCart = []
    //remove from cart when qty is 1
    if (productCartIndex !== -1 && cartItemsArr[productCartIndex].quantity === 1) {
        updatedCart = [cartItemsArr.splice(productCartIndex, 1)]
        return updatedCart
    }
    if (productCartIndex !== -1) {
        updatedCart = [...cartItemsArr]
        updatedCart[productCartIndex].quantity = cartItemsArr[productCartIndex].quantity - 1
        return updatedCart
    }

}
const removeItem = (cartItemsArr, productToAdd) => {
    let productCartIndex = cartItemsArr.findIndex((item) => item.id === productToAdd.id)

    if (productCartIndex !== -1 && cartItemsArr[productCartIndex].quantity === 1) {
        let updatedCart = [cartItemsArr.splice(productCartIndex, 1)]
        return updatedCart
    }
}

export const CartItemsContext = createContext({
    cartShown: false,
    setCartShown: () => { },
    cartItems: [],
    setCartItems: () => { },
    addProductToCart: () => { },
    incrementProductQty: () => { },
    decrementProductQty: () => { },
    removeProductFromCart: () => { },
    cartCount: 0,
    totalAmount: 0,
})
export const CartItemsProvider = ({ children }) => {
    const [cartShown, setCartShown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setCartCount(cartItems.reduce((count, item) => count + item.quantity, 0))
    }, [cartItems]);
    useEffect(() => {
        setTotalAmount(cartItems.reduce((amount, item) => amount + item.quantity * item.price, 0))
    }, [cartItems]);
    const addProductToCart = (productDetails) => {
        setCartItems(addItem(cartItems, productDetails))
    }
    const incrementProductQty = (productDetails) => {
        setCartItems(increaseItemQtybyOne(cartItems, productDetails))
    }
    const decrementProductQty = (productDetails) => {
        setCartItems(decreaseItemQtybyOne(cartItems, productDetails))
    }
    const removeProductFromCart = (productDetails) => {
        setCartItems(removeItem(cartItems, productDetails))
    }

    const value = { cartShown, setCartShown, cartItems, addProductToCart, incrementProductQty, decrementProductQty, removeProductFromCart, cartCount, totalAmount }
    return (
        <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
    )
}