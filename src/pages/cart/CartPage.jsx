
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Img from "../../components/Img";
import continueShoppingImg from "../../assets/continue_shopping.png";
import safetyImg from "../../assets/safety.png";
import AddressForm from "./AddressForm";
function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [editingItemId, setEditingItemId] = useState(null);
  const navigate = useNavigate();

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else {
      if (window.confirm("Do you want to remove this product from the cart?")) {
        dispatch(removeFromCart(id));
      }
    }
  };

  const handleRemoveFromCart = (id) => {
    if (window.confirm("Do you want to remove this product from the cart?")) {
      dispatch(removeFromCart(id));
    }
  };

  const handleEditClick = (id) => {
    setEditingItemId(id);
  };

  // const handleContinue = () => {
  //   navigate("/address");
  // };

  const handleStartShopping = () => {
    navigate("/");
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 50,
    0
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100%] flex justify-center ">
      {cartItems.length > 0 ? (
        <div className={`w-[60%] flex gap-8 content-wrapper ${isOpen ? 'blurred' : ''}`}>
          <div className="w-[60%]">
            <div className="flex flex-col  gap-3">
              <h3 className="text-xl font-semibold">Product Details</h3>
              {cartItems.map((item) => (
                <div key={item.id} className=" border-2 rounded-lg">
                  <div className="flex  justify-between p-3  ">
                    <div className="w-[60px] h-[60px] border rounded">
                      <Img
                        src={item.images[0]}
                        className="w-[60px] h-[60px] object-contain rounded"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-[70%]">
                      <p className="font-semibold">{item.title}</p>
                      <div className="flex items-center flex-wrap gap-2">
                        <b className="text-lg  flex items-center">
                          <FaRupeeSign />
                          {parseInt(item?.price * 50)}
                        </b>
                        <del className="text-gray-300 flex items-center">
                          <div className="text-sm">
                            <FaRupeeSign />
                          </div>
                          <p className="text-sm">
                            {parseInt(
                              item?.price *
                                50 *
                                (1 + item?.discountPercentage / 100)
                            )}
                          </p>
                        </del>

                        <small className="text-green-500 ">
                          {Math.ceil(item?.discountPercentage)}% off
                        </small>
                      </div>
                      <div>
                        {editingItemId === item.id ? (
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              className="px-2 py-1 border rounded"
                              onClick={() => handleDecreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <p> {item.quantity}</p>
                            <button
                              className="px-2 py-1 border rounded"
                              onClick={() => handleIncreaseQuantity(item.id)}
                            >
                              +
                            </button>
                            <button
                              className="px-2 py-1 border rounded text-red-500"
                              onClick={() => setEditingItemId(null)}
                            >
                              Done
                            </button>
                          </div>
                        ) : (
                          <div className="mt-2">
                            <p>
                              Quantity:{" "}
                              <span className="font-bold">{item.quantity}</span>
                            </p>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          className="flex items-center font-semibold  text-gray-500 gap-2"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          <RxCross2 /> REMOVE
                        </button>
                      </div>
                    </div>
                    <div className="w-[8%]">
                      <button
                        className="text-[#9F2089] font-bold"
                        onClick={() => handleEditClick(item.id)}
                      >
                        EDIT
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between p-3 border-t-2">
                    <p>
                      Sold By:{" "}
                      <span className="font-semibold">{item.brand}</span>
                    </p>
                    <p>Free Delivery</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-3 border-l-2 p-4">
            <h3 className="text-lg font-semibold">Price Details</h3>
            <div className="  flex justify-between ">
              <div>
                <p className="w-full"> Total product Price: </p>
              </div>
              <div className="flex items-center ">
                +<FaRupeeSign />
                <p>{parseInt(totalCost)}</p>
              </div>
            </div>

            <div className="flex justify-between border-t-2 py-3 text-lg font-semibold">
              <p> Order Toatal</p>
              <div className="flex items-center ">
                <FaRupeeSign />
                <p>{parseInt(totalCost)}</p>
              </div>
            </div>
            <div>
              <p className="text-xs p-1">
                Clicking on 'Continue' will not deduct any money
              </p>
              <button
                className="flex items-center justify-center gap-2 font-semibold text-lg w-[100%] bg-[#9F2089] p-2 rounded text-white"
                // onClick={handleContinue}
                onClick={toggleSidebar}
              >
                Continue
              </button>
            </div>

            <div className="w-[100%]">
              <Img src={safetyImg} className="w-[100%]" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[30%] h-screen  flex flex-col items-center justify-center gap-4">
          <div className="w-[100%] px-[25%]">
            <Img
              src={continueShoppingImg}
              className="w-[100%]"
            />
          </div>
          <p className="font-semibold">Your cart is empty</p>
          <p>Just relax, let us help you find some first-class products</p>

          <button
            className="flex items-center justify-center gap-2 font-semibold text-lg w-[40%] bg-[#9F2089] p-2 rounded text-white"
            onClick={handleStartShopping}
          >
            Start Shopping
          </button>
        </div>
      )}
      <AddressForm isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default CartPage;
