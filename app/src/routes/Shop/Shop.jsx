import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProductsByCategory from "../../components/ProductsByCategory/ProductsByCategory-component";
import Shop from "../../components/Shop/Shop-component";
import { ProductsContext } from "../../context/ProductsContexts";
import { selectCategories, selectProductsByCategory } from "../../store/products/productsSelector";

const ShopRouter = () => {
    // const { categories, productsByCategory } = useContext(ProductsContext);
    const categories = useSelector(selectCategories)
    const productsByCategory = useSelector(selectProductsByCategory)
    const mapCategoriesWithProducts = categories.map((item, index) => {
        return (
            <Route key={item.category} path={`${item.category}`} element={<ProductsByCategory currentCategory={item.category} products={productsByCategory[index]} />} />
        )
    })
    return (
        <Fragment>
            <Routes>
                <Route index element={<Shop />} />
                {mapCategoriesWithProducts}
            </Routes>
        </Fragment>

    )



}
export default ShopRouter