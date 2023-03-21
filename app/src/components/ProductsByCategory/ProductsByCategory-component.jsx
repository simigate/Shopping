import { display } from '@mui/system'
import { Link } from 'react-router-dom'
import Product from '../Product/Product-component'
import './ProductsByCategory.scss'
const ProductsByCategory = ({ currentCategory, products }) => {
    const mapProducts = products.map((product) => {
        return (
            < Product key={product.id} productDetails={product} />
        )
    })

    return (

        <div className='productsContainer'   >
            <Link className='title' to={`/shop/${currentCategory}`} >{currentCategory.toUpperCase()}</Link>
            <div className='productsByCategory'>
                {mapProducts}
            </div>
        </div>
    )

}
export default ProductsByCategory