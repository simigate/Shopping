import { Link } from 'react-router-dom'
import './Category.scss'
const Category = ({ categoryDetails }) => {
    const { id, image, category } = categoryDetails

    return (
        <Link className='category' id={id} to={`/shop/${category}`}>
            <div className='background-image' id={id} alt={`image${id}`} style={{ backgroundImage: `url(${image})` }} ></div>
            <div className="body" id={id}>
                <h2 id={id}>{category.toString().toUpperCase()}</h2>
                <p id={id}>SHOP NOW</p>
            </div>
        </Link>
    )

}
export default Category