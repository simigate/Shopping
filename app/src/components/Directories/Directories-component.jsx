import './Directories.scss'
import Category from '../Category/Category-component'
import ProductByCategory from '../ProductsByCategory/ProductsByCategory-component'
import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContexts'
import { useSelector } from 'react-redux'
import { selectCategories, selectProducts } from '../../store/products/productsSelector'
const Directories = () => {
    // const { categories, products } = useContext(ProductsContext);
    const categories = useSelector(selectCategories)
    const products = useSelector(selectProducts)

    const mapCategories = categories.map((item) => {
        return (
            <Category key={item.id} categoryDetails={item} />
        )
    })


    return (
        <div className='directory'>
            {mapCategories}
        </div>
    )

}
export default Directories