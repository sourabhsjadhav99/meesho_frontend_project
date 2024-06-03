import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Handle payment logic here
    navigate('/summary');
  };

  return (
    <div className="flex justify-center my-10">
      <div className="w-[70%] flex flex-col gap-5">
        <h1 className="text-2xl font-bold mb-5">Payment</h1>
        {/* Add payment form or integration here */}
        <button
          className="w-full bg-[#9F2089] text-white p-2 rounded mt-5"
          onClick={handlePayment}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;
