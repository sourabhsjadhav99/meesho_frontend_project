import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import meeshoLogo from "../../assets/meesho_logo.png";

function PaymentPage() {
  const navigate = useNavigate();
  const address = JSON.parse(localStorage.getItem("address"));
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 50,
    0
  );

  useEffect(() => {
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

    const handlePayment = async () => {
      try {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }

        const options = {
          key:  process.env.REACT_APP_RAZORPAY_KEY,
          amount: parseInt(totalCost) * 100, // Amount in paise
          currency: "INR",
          name: "Meesho",
          description: "Test Transaction",
          image: meeshoLogo, // Add your logo here
          handler: function (response) {
            console.log("Payment Success:", response);
            alert(
              `Payment successful! Payment ID: ${response.razorpay_payment_id}`
            );
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
        paymentObject.on("payment.failed", function (response) {
          console.error("Payment Failed:", response.error);
          alert(`Payment failed! Reason: ${response.error.reason}`);
          console.log("Navigating back to previous page...");
          navigate(-1);
        });

        paymentObject.open();
      } catch (error) {
        console.error("Error in handlePayment:", error);
        alert(error.message);
      }
    };

    if (address) {
      handlePayment();
    } else {
      alert("Address information is missing.");
      navigate("/address");
    }
  }, [navigate, address, totalCost]);

  return (
    <div>
      <h2>Processing Payment...</h2>
    </div>
  );
}

export default PaymentPage;
