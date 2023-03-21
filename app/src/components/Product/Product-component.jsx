import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItemsContext } from '../../context/CartItemsContext';
import { addProductToCart } from '../../store/cartItems/cartAction';
import { selectCartItems } from '../../store/cartItems/cartSelector';
import Button from '../Button/Button-component'
import './Product.scss'
const Product = ({ productDetails }) => {
    const dispatch = useDispatch()
    const { id, title, image, price } = productDetails
    //const { addProductToCart } = useContext(CartItemsContext);
    const cartItems = useSelector(selectCartItems)
    const addItemhandler = (e) => {
        e.preventDefault()
        console.log(cartItems, productDetails)
        dispatch(addProductToCart(cartItems, productDetails))
    }

    return (
        <div className='productContainer'>
            <img className='img' alt={`product ${id}`} src={image} />
            <Button buttonType='inverted' onClick={addItemhandler}>ADD</Button>
            <button ></button>
            <div className='footer'>
                <span className='name'>{title}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    )
}
export default Product