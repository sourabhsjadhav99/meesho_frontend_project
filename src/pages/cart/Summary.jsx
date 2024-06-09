import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img from "../../components/Img";
import meeshoLogo from "../../assets/meesho.png";

function Summary() {
  const cartItems = useSelector((state) => state.cart.items);
  const buyNowItems = useSelector((state) => state.cart.buyNowItem);
  const isCart = useSelector((state) => state.cart.isCart);
  console.log(cartItems)
console.log(buyNowItems)
console.log(isCart)
  let summaryItem;
  if (isCart) {
    summaryItem = cartItems;
  } else {
    summaryItem = buyNowItems;
  }

  const address = JSON.parse(localStorage.getItem("address"));
  let navigate = useNavigate();
  const totalCost = summaryItem.reduce(
    (total, item) => total + item.price * item.quantity * 50,
    0
  );

  const handleShopMore = () => {
    navigate("/");
  };

  return (
    <div>
      <header
        className={`w-[100%] p-5 flex justify-center items-center  border-b-2`}
      >
        <div className="w-[95%] md:w-[75%] ">
          <Img src={meeshoLogo} className="w-[100px] h-[20px] md:w-[156px] md:h-[36px]" />
        </div>
      </header>

      <div className="w-full flex flex-col gap-6 items-center p-2">
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
        <div className="w-[100%] md:w-[80%]">
          <h2>
            <b>Total Amount: </b> ₹{parseInt(totalCost)}
          </h2>
          <p>
            <b>Customer Name: </b> {address.name}
          </p>
          <p>
            <b> Delivery Address: </b>
            {`${address.house}, ${address.road}, ${address.city}, ${address.state}, ${address.pincode}`}{" "}
          </p>
        </div>
        <div className="w-[100%] md:w-[80%] flex flex-wrap gap-3">
          {summaryItem.map((item) => (
            <div key={item.id} className="border-2 w-[100%] md:w-[49%]  rounded-lg  p-4">
              <div className="flex justify-between">
                <div className="flex flex-col w-[70%]">
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
