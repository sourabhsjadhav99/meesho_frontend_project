import React from 'react';
import { useSelector } from 'react-redux';
import { FaRupeeSign } from 'react-icons/fa';

function Summary() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity * 50, 0);

  return (
    <div className="flex justify-center my-10">
      <div className="w-[70%] flex flex-col gap-5">
        <h1 className="text-2xl font-bold mb-5">Order Summary</h1>
        <div className="flex flex-col gap-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-5">
                <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">
                    <FaRupeeSign /> {parseInt(item.price * 50)}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-lg font-semibold mt-5">
            Total: <FaRupeeSign /> {parseInt(totalCost)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
