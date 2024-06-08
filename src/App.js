
import React, { useEffect } from 'react';
import './index.css'; // Ensure this import is present
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Signup from './components/signup/signup';
import Footer from './components/Footer';
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CartPage from './pages/cart/CartPage';
import PaymentPage from './pages/payment/PaymentPage';
import Summary from './pages/cart/Summary';
// import PayNowPage from './pages/PayNowPage';
import Navbar from './components/Header/Header';

// import PayNowPage from './pages/buyNow/PayNowPage';
// import Footer from './components/Footer';

import BuyNowPage from './pages/buyNow/BuyNowPage';
// import Signup from './components/signup/Signup';
import CategoryPage from './pages/category/CategoryPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      {window.location.pathname=="cart"?"":<Navbar />}

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleProduct />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/buynow" element={<BuyNowPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
