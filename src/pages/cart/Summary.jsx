import React from "react"; // Importing React library for creating components
import { useSelector } from "react-redux"; // Importing useSelector hook from React Redux for accessing state
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router for navigation
import Img from "../../components/Img"; // Importing Img component for displaying images
import meeshoLogo from "../../assets/meesho.png"; // Importing Meesho logo image

function Summary() {
  // Using useSelector to extract data from Redux store
  const cartItems = useSelector((state) => state.cart.items); // Getting cart items from Redux state
  const buyNowItems = useSelector((state) => state.cart.buyNowItem); // Getting buy now items from Redux state
  const isCart = useSelector((state) => state.cart.isCart); // Checking if it's a cart or buy now page

  console.log(cartItems); // Logging cart items to console for debugging
  console.log(buyNowItems); // Logging buy now items to console for debugging
  console.log(isCart); // Logging isCart status to console for debugging

  let summaryItem; // Declaring a variable to hold the summary items
  if (isCart) {
    summaryItem = cartItems; // Setting summary items to cart items if it's a cart page
  } else {
    summaryItem = buyNowItems; // Setting summary items to buy now items if it's a buy now page
  }

  const address = JSON.parse(localStorage.getItem("address")); // Getting address from local storage
  let navigate = useNavigate(); // Using useNavigate hook for navigation

  // Calculating total cost by reducing the summary items
  const totalCost = summaryItem.reduce(
    (total, item) => total + item.price * item.quantity * 50,
    0
  );

  // Handling shop more button click to navigate back to the home page
  const handleShopMore = () => {
    navigate("/");
  };

  // JSX content for rendering the summary component
  return (
    <div>
      {/* Header section with Meesho logo */}
      <header className={`w-[100%] p-5 flex justify-center items-center  border-b-2`}>
        <div className="w-[95%] md:w-[75%] ">
          <Img src={meeshoLogo} className="w-[100px] h-[20px] md:w-[156px] md:h-[36px]" />
        </div>
      </header>

      {/* Main content section */}
      <div className="w-full flex flex-col gap-6 items-center p-2">
        {/* Order summary title and shop more button */}
        <div className=" w-[100%] flex justify-center">
          <div className="flex justify-between w-[100%] md:w-[90%] md:p-5 ">
            <h3 className="text-xl font-bold mb-4 text-[#9f2089] ">
              Order Summary
            </h3>
            <button
              onClick={handleShopMore}
              className="flex items-center w-[120px] md:w-[150px] justify-center font-bold bg-[#9f2089] p-2 text-white rounded-md"
            >
              Shop More
            </button>
          </div>
        </div>

        {/* Details section including total amount, customer name, delivery address, and summary items */}
        <div className="w-[100%] md:w-[80%]">
          <h2>
            <b>Total Amount: </b> ₹{parseInt(totalCost)}
          </h2>
          <p>
            <b>Customer Name: </b> {address?.name} {/* Displaying customer name */}
          </p>
          <p>
            <b> Delivery Address: </b>
            {`${address?.house}, ${address?.road}, ${address?.city}, ${address?.state}, ${address?.pincode}`}{" "}
          </p>
        </div>

        {/* Summary items section */}
        <div className="w-[100%] md:w-[80%] flex flex-wrap gap-3">
          {summaryItem.map((item) => (
            <div key={item.id} className="border-2 w-[100%] md:w-[49%]  rounded-lg  p-4">
              <div className="flex justify-between">
                <div className="flex flex-col w-[70%]">
                  {/* Item details including title, price, discount, amount paid, quantity, and seller */}
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm">
                    Price:{" "}
                    <b>
                      ₹
                      {parseInt(
                        item?.price * 50 * (1 + item?.discountPercentage / 100)
                      )}
                    </b>
                  </p>
                  <p className="">
                    Total discount:{" "}
                    <b>{Math.ceil(item?.discountPercentage)}%</b>
                  </p>
                  <p className="">
                    Amount Paid:{" "}
                    <b>₹{parseInt(item?.price * item.quantity * 50)}</b>
                  </p>
                  <p>
                    Quantity: <span className="font-bold">{item.quantity}</span>
                  </p>
                  <p>
                    Sold By: <span className="font-semibold">{item.brand}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Summary;
