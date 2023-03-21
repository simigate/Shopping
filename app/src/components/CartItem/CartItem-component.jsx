import { useDispatch } from "react-redux"
import { changeProductQtyInCart, decrementProductQty, incrementProductQty, removeProductFromCart } from "../../store/cartItems/cartAction"
import './CartItem.scss'
const CartItem = ({ cartItems, cartItemDetails }) => {
    const dispatch = useDispatch()
    const { title, image, price, quantity } = cartItemDetails
    const increaseItemHandler = (event) => {
        event.preventDefault()
        dispatch(incrementProductQty(cartItems, cartItemDetails))
    }
    const decreaseItemHandler = (event) => {
        event.preventDefault()
        dispatch(decrementProductQty(cartItems, cartItemDetails))
    }
    const removeItemHandler = (event) => {
        event.preventDefault()
        dispatch(removeProductFromCart(cartItems, cartItemDetails))
    }
    const qtyChangeHandler = (event) => {
        let qty = event.target.value
        dispatch(changeProductQtyInCart(cartItems, { ...cartItemDetails, quantity: Number(qty) }))
    }
    return (
        <div className="cartItemContainer">
            <span>{title}</span>
            <div className="cartItemDetails">
                <div className="imageContainer">
                    <img src={image} alt={`${title}`} />
                </div>
                <div className="itemDetails">
                    <button className="arrow" onClick={decreaseItemHandler}>&#10094;</button>
                    {/* <input type="number" min="1" className="input" value={quantity} onChange={qtyChangeHandler} /> */}
                    <span className="quantity" >{quantity}</span>
                    <button className="arrow" onClick={increaseItemHandler}>&#10095;</button>

                    <span className="baseSpan" >$ {price * quantity}</span>
                    <button className="removeButton" onClick={removeItemHandler}>&#10005;</button>
                </div>
            </div>
        </div >

    )
}
export default CartItem