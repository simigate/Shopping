import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContexts";
import { selectCategories, selectProductsByCategory } from "../../store/products/productsSelector";
import ProductsByCategory from "../ProductsByCategory/ProductsByCategory-component";

const Shop = () => {
    // const { categories, productsByCategory } = useContext(ProductsContext);
    const categories = useSelector(selectCategories)
    const productsByCategory = useSelector(selectProductsByCategory)
    const mapCategoriesWithProducts = categories.map((item, index) => {
        //to filter the first 4 elements 
        let productsArr = productsByCategory[index].filter((_, indx) => indx < 4)
        return (
            <ProductsByCategory key={item.id} currentCategory={item.category} products={productsArr} />
        )

    })
    return (
        <Fragment>
            {mapCategoriesWithProducts}
            <Outlet />
        </Fragment>

    )
}
export default Shop