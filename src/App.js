import React from 'react';
import './index.css'; // Ensure this import is present
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart/CartPage';
import Payment from './pages/cart/PaymentPage';
import Summary from './pages/cart/Summary';
import PayNowPage from './pages/buyNow/PayNowPage';
import Footer from './components/Footer';

import CategoryPage from './pages/category/CategoryPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleProduct />} />

        <Route path='/category' element={<CategoryPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<PayNowPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};