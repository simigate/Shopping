import { createContext, useEffect, useState } from 'react'
import { getData } from '../utils/axios.utils';
export const ProductsContext = createContext({
    products: [],
    setProducts: () => { },
    categories: [],
    setCategories: () => { },
    productsByCategory: [],
    setProductsByCategory: () => { },
})
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);
    const getProducts = async () => {
        let productArray = await getData('products')
        setProducts(productArray);
        let categoryArray = [...new Map(productArray.map((product) =>
            [product.category, product])).values()];
        // let categoryArray = [...new Set(productArray.map(product => product.category))];
        setCategories(categoryArray);

        let categoryProducts = categoryArray.map((eachCategory) => { return productArray.filter(({ category }) => category === eachCategory.category) })
        setProductsByCategory(categoryProducts)
    }
    const value = { products, categories, productsByCategory }


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>


}