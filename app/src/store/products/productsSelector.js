
import { createSelector } from 'reselect'


export const selectProducts = (state) => state.products.products
export const selectCategories = (state) => state.products.categories
export const selectProductsByCategory = (state) => state.products.productsByCategory


//export const productsSelector = (state) => state.products
// export const selectProducts = createSelector([productsSelector], (product) => product.products)
// export const selectCategories = createSelector([selectProducts], (products) => [...new Map(products.map((product) =>
//     [product.category, product])).values()])
// export const selectProductsByCategory = createSelector([selectProducts, selectCategories], (products, categories) => categories.map((eachCategory) => { return products.filter(({ category }) => category === eachCategory.category) }))

