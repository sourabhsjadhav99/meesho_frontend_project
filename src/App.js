import React, { useEffect } from 'react';

// Importing CSS for styling
import './index.css';

// Importing components and pages
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import Signup from './components/signup/signup';
import Footer from './components/Footer';
import CartPage from './pages/cart/CartPage';
import PaymentPage from './pages/payment/PaymentPage';
import Summary from './pages/cart/Summary';
import Navbar from './components/Header/Header';
import BuyNowPage from './pages/buyNow/BuyNowPage';
import CategoryPage from './pages/category/CategoryPage';

// Importing necessary modules from react-router-dom
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// ScrollToTop component to scroll to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    // Using BrowserRouter to enable routing
    <BrowserRouter>
      {/* Conditional rendering of Navbar based on route */}
      {window.location.pathname === "cart" ? "" : <Navbar />}

      {/* ScrollToTop component */}
      <ScrollToTop />

      {/* Routes for different pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleProduct />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/buynow" element={<BuyNowPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
