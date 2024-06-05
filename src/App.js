import React from 'react';
import './index.css'; // Ensure this import is present
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import CartPage from './pages/cart/CartPage';
import AddressForm from './pages/cart/AddressForm';
import Payment from './pages/cart/PaymentPage';
import Summary from './pages/cart/Summary';
import PayNowPage from './pages/PayNowPage';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<PayNowPage/>} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;