import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  decreaseBuyQuantity,
  increaseBuyQuantity,
} from "../redux/cartSlice";
import Img from "./Img";
import Swal from "sweetalert2";

function EditSideBar({
  isOpenEdit,
  toggleEditSidebar,
  editingItemId,
  setEditingItemId,
  editCart,
}) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const editItem = useSelector((state) => state.cart.buyNowItem);

  let item = null;
  if (editCart) {
    item = cartItems.find((item) => item.id === editingItemId);
  } else {
    item = editItem.find((item) => item.id === editingItemId);
  }

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };


  const handleDecreaseQuantity = (id) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else {
      Swal.fire({
        title: "Do you want to remove this product from the cart?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeFromCart(id));
          Swal.fire("Removed!", "Product has been removed from the cart.", "success");
          toggleEditSidebar()
        }
      });
    }
  };

  const handleIncreaseBuyQuantity = (id) => {
    dispatch(increaseBuyQuantity(id));
  };

  const handleDecreaseBuyQuantity = (id) => {
    if (item.quantity > 1) {
      dispatch(decreaseBuyQuantity(id));
    }
  };

  console.log(item);
  return (
    <div
      className={`sidebar fixed top-0 right-0 w-[35%] h-[100%] bg-white border-l-2 z-100 hidden transition-transform duration-500 ${
        isOpenEdit ? "open" : ""
      }`}
    >
      <div className="flex flex-col h-[100%]">
        <div className="flex justify-between  p-5">
          <p className="text-lg font-semibold">Edit Product</p>
          <button onClick={toggleEditSidebar}>
            <RxCross2 className="text-2xl font-bold" />
          </button>
        </div>
        <div>
          {" "}
          {item && (
            <div className="border-2 ">
              <div className="flex justify-between p-4 ">
                <div className="w-[60px] h-[60px] border-2 rounded-md">
                  <Img
                    src={item.images[0]}
                    className="object-contain rounded w-[60px] h-[60px]"
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
                  <div className="flex gap-2">
                    <p>Quantity:</p>
                    {item && (
                      <div className="flex items-center gap-3">
                        <button
                          className="px-2 py-1 border rounded"
                          onClick={() => {
                            if (editCart) {
                              handleDecreaseQuantity(item.id);
                            } else {
                              handleDecreaseBuyQuantity(item.id);
                            }
                          }}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className="px-2 py-1 border rounded"
                          onClick={() => {
                            if (editCart) {
                              handleIncreaseQuantity(item.id);
                            } else {
                              handleIncreaseBuyQuantity(item.id);
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between p-4 text-lg border">
          <p>Total Cost</p>
          <div className="flex items-center">
            <FaRupeeSign /> <p>{item?.quantity * parseInt(item?.price * 50)}</p>
          </div>
        </div>
        <div className="flex justify-center p-4 border">
          <button
            onClick={() => {
              toggleEditSidebar();
              setEditingItemId(null);
            }}
            className="flex items-center w-[90%] justify-center font-bold bg-[#9f2089] p-2 text-white rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditSideBar;
