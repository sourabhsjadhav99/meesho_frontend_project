import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Img from "../../components/Img";
import meeshoLogo from "../../assets/meesho.png";
import { BsCash } from "react-icons/bs";
import { MdPayments, MdOutlinePayment } from "react-icons/md";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
function PaymentPage() {


  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const buyNowItems = useSelector((state) => state.cart.buyNowItem);
  const isCart = useSelector((state) => state.cart.isCart);

  let totalCost
  if (isCart) {
    totalCost = cartItems.reduce(
      (total, item) => total + parseInt(item.price * 50) * item.quantity,
      0
    );
  } else {
    totalCost = buyNowItems.reduce(
      (total, item) => total + parseInt(item.price * 50) * item.quantity,
      0
    );
  }


  const [paymentMethod, setPaymentMethod] = useState("payNow");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = async() => {
    if (paymentMethod === "payNow") {
      handlePayment();
    } else {
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Order Placed Succefully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/summary");
    }
  };

  const handlePayment = async () => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          reject(new Error("Razorpay SDK failed to load."));
        };
        document.body.appendChild(script);
      });
    };

    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const address = JSON.parse(localStorage.getItem("address"));
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: parseInt(totalCost) * 100, // Amount in paise
        currency: "INR",
        name: "Meesho",
        description: "Test Transaction",
        image: "path/to/meesho_logo.png", // Add your logo here
        handler:async function (response) {
          console.log("Payment Success:", response);
          await Swal.fire({
            position: "center",
            icon: "success",
            title: `Payment successful! Payment ID: ${response.razorpay_payment_id}`,
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/summary"); // Redirect to a success page
        },
        prefill: {
          name: address.name,
          contact: address.mobile,
        },
        notes: {
          address: `${address.house}, ${address.road}, ${address.city}, ${address.state}, ${address.pincode}`,
        },
        theme: {
          color: "#9f2089",
        },
      };

      const paymentObject = new window.Razorpay(options);
      console.log(paymentObject);
      paymentObject.on("payment.failed", function (response) {
        console.error("Payment Failed:", response.error);
        alert(`Payment failed! Reason: ${response.error.reason}`);
        console.log("Navigating back to previous page...");
        navigate("/cart");
      });

      paymentObject.open();
    } catch (error) {
      console.error("Error in handlePayment:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <header
        className={`w-[100%] p-5 flex justify-center items-center  border-b-2`}
      >
        <div className="w-[95%] md:w-[75%] ">
          <Img src={meeshoLogo} className="w-[100px] h-[20px] md:w-[156px] md:h-[36px]" />
        </div>
      </header>
      <div className="flex justify-center w-[100%] min-h-screen relative ">
        <div className={`w-[100%] md:w-[60%] p-2`}>
          <div className={`flex flex-col md:flex-row justify-center w-[100%] gap-8`}>
            <div className="w-[100%] md:w-[60%]">
              <div className="flex flex-col gap-3 border-2 rounded  p-5">
                <h3 className="text-2xl font-semibold flex gap-2 items-center justify-between">
                  <span>Select Payment Mode</span>
                  <span>
                    <MdOutlinePayment />
                  </span>
                </h3>
                <hr className="m-4  border" />
                <div className={`mb-4 border-2 rounded p-2 ${paymentMethod === 'payNow' ? 'bg-green-200' : ''}`}>
                  <label className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <span className="text-xl">
                        <BsCash />
                      </span>
                      <span className="ml-2">Pay Now</span>
                    </div>
                    <input
                      type="radio"
                      value="payNow"
                      checked={paymentMethod === "payNow"}
                      onChange={handlePaymentMethodChange}
                      className="form-radio text-purple-600"
                    />
                  </label>
                </div>
                <div className={`mb-4 border-2 rounded p-2 ${paymentMethod === 'cod' ? 'bg-green-200' : ''}`}>
                  <label className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <span className="text-xl">
                        <MdPayments />
                      </span>
                      <span className="ml-2">Cash on Delivery (COD)</span>
                    </div>
                    <input
                      type="radio"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={handlePaymentMethodChange}
                      className="form-radio text-purple-600"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[40%]  p-5 md:border-l-2 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Price Details</h3>
              <div className="flex justify-between">
                <div>
                  <p className="underline decoration-dotted">Total Price:</p>
                </div>
                <div className="flex items-center">
                  +<FaRupeeSign />
                  <p>{parseInt(totalCost)}</p>
                </div>
              </div>

              <button
                className="flex items-center w-[100%] justify-center font-bold bg-[#9f2089] p-2 text-white rounded-md"
                onClick={handleSubmit}
              >
                {paymentMethod === "payNow"
                  ? "Place Order and Pay"
                  : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
