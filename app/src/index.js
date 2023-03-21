import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartItemsProvider } from './context/CartItemsContext';
import { ProductsProvider } from './context/ProductsContexts';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { store, persistingStore } from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react';

//axios.defaults.baseURL = 'https://fakestoreapi.com/'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistingStore}>
        <BrowserRouter>
          {/* <ProductsProvider> */}
          {/* <CartItemsProvider> */}
          <App />
          {/* </CartItemsProvider> */}
          {/* </ProductsProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
