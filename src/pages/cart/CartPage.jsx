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
import "./CartPage.css"; // Import the CSS file

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [editingItemId, setEditingItemId] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleStartShopping = () => {
    navigate("/");
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 50,
    0
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center w-[100%] relative">
      {cartItems.length > 0 ? (
        <div className={`w-[60%] `}>
          <div className={`flex justify-center w-[100%] gap-8 content-wrapper ${isOpen ? "blurred" : ""}`}>
            <div className="w-[60%]">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Product Details</h3>
                {cartItems.map((item) => (
                  <div key={item.id} className="border-2 rounded-lg">
                    <div className="flex justify-between p-4 ">
                      <div className="w-[60px] h-[60px] border-2 rounded-md">
                        <Img
                          src={item.images[0]}
                          className="object-contain rounded"
                        />
                      </div>
                      <div className="flex flex-col w-[70%]">
                        <p className="font-semibold">{item.title}</p>
                        <div className="flex items-center gap-2">
                          <b className="text-lg flex items-center">
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
                          <small className="text-green-500">
                            {Math.ceil(item?.discountPercentage)}% off
                          </small>
                        </div>
                        <div>
                          {editingItemId === item.id ? (
                            <div className="flex items-center gap-3">
                              <button
                                className="px-2 py-1 border rounded"
                                onClick={() => handleDecreaseQuantity(item.id)}
                              >
                                -
                              </button>
                              <p>{item.quantity}</p>
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
                            <div>
                              <p>
                                Quantity:
                                <span className="font-bold">
                                  {item.quantity}
                                </span>
                              </p>
                            </div>
                          )}
                        </div>
                        <div>
                          <button
                            className="flex items-center font-bold "
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            <RxCross2 /> REMOVE
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <button
                          className="text-[#9F2089] font-bold"
                          onClick={() => handleEditClick(item.id)}
                        >
                          EDIT
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 border-t-2">
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
            <div className="w-[40%] p-5 border-l-2 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Price Details</h3>
              <div className="flex justify-between">
                <div>
                  <p>Total product Price:</p>
                </div>
                <div className="flex items-center">
                  +<FaRupeeSign />
                  <p>{parseInt(totalCost)}</p>
                </div>
              </div>
              <div className="flex justify-between border-t-2 font-bold">
                <p>Order Total</p>
                <div className="flex items-center">
                  <FaRupeeSign />
                  <p>{parseInt(totalCost)}</p>
                </div>
              </div>
              <div>
                <p className="text-xs p-1">
                  Clicking on 'Continue' will not deduct any money
                </p>
                <button
                  className="flex items-center w-[100%] justify-center font-bold bg-[#9f2089] p-2 text-white rounded-md"
                  onClick={toggleSidebar}
                >
                  Continue
                </button>
              </div>
              <div className="w-[100%] ">
                <Img src={safetyImg} className="w-[100%] shadow-xl" />
              </div>
            </div>
          </div>
          <AddressForm isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
      ) : (
        <div className="w-[30%] h-screen flex flex-col justify-center items-center gap-3">
          <div className="w-[100%] px-[25%]">
            <Img src={continueShoppingImg} className="w-[100%]" />
          </div>
          <p className="font-semibold">Your cart is empty</p>
          <p>Just relax, let us help you find some first-class products</p>
          <button
            className="flex items-center w-[50%] justify-center font-bold bg-[#9f2089] p-2 text-white rounded-md"
            onClick={handleStartShopping}
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
