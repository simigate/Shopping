
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './components/Cart/Cart-component';
import Home from './routes/Home/Home';
import Navbar from './routes/Navbar/Navbar';
import ShopRouter from './routes/Shop/Shop';
import UserAuth from './routes/UserAuthentication/UserAuth';
import { getProductsAPI, postProductsAPI } from './store/products/productsAction';
import SHOP_DATA from "./Shop_data"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsAPI())
    //one time- to load SHOP_DATA to database
    //dispatch(postProductsAPI(SHOP_DATA))
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<ShopRouter />} />
          <Route path='contact' element={<Cart />} />
          <Route path='userAuth' element={<UserAuth />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
