import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CartItemsContext } from '../../context/CartItemsContext';
import { selectCartItems } from '../../store/cartItems/cartSelector';
import Button from '../Button/Button-component'
import CartItem from '../CartItem/CartItem-component';
import './Cart.scss'
const Cart = () => {
    const cartItems = useSelector(selectCartItems)
    //const { cartItems } = useContext(CartItemsContext);

    const mapCartItems = cartItems.map((item) => {
        return (
            <CartItem key={item.id} cartItems={cartItems} cartItemDetails={item} />
        )
    })
    return (
        <div className="cartContainer" >
            <div className='cartItems'>
                {cartItems.length ?
                    mapCartItems : <div className='emptyMeaasge'>CART IS EMPTY</div>}

            </div>
            <Button type='submit'>Check Out</Button>
        </div>
    )
}

export default Cart