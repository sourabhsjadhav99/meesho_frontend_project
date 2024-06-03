// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaRupeeSign } from 'react-icons/fa';
// import { FaTrash } from 'react-icons/fa6';
// import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../redux/cartSlice';
// import { AiOutlineShoppingCart } from "react-icons/ai";

// function CartPage() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   // const handleClearCart = () => {
//   //   dispatch(clearCart());
//   // };

//   const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity * 50, 0);

//   return (
//     <div className="flex justify-center my-10">
//       <div className="w-[70%] flex flex-col gap-10">
//         <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>
//         {cartItems.length === 0 ? (
//           <div>Your cart is empty</div>
//         ) : (
//           <div className="flex flex-col gap-5">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex justify-between items-center border-b pb-2">
//                 <div className="flex items-center gap-5">
//                   <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded" />
//                   <div>
//                     <p className="font-semibold">{item.title}</p>
//                     <p className="text-gray-600">
//                       <FaRupeeSign /> {parseInt(item.price * 50)}
//                     </p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <button
//                         className="px-2 py-1 border rounded"
//                         onClick={() => handleDecreaseQuantity(item.id)}
//                       >
//                         -
//                       </button>
//                       <p>{item.quantity}</p>
//                       <button
//                         className="px-2 py-1 border rounded"
//                         onClick={() => handleIncreaseQuantity(item.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   className="text-red-500"
//                   onClick={() => handleRemoveFromCart(item.id)}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//             <div className="flex justify-between items-center mt-5">
//               <div className="text-lg font-semibold">
//                 Total: <FaRupeeSign /> {parseInt(totalCost)}
//               </div>
//               <button
//                 className="flex items-center justify-center gap-2 font-semibold text-lg w-[30%] bg-[#9F2089] p-2 rounded text-white"
//                 // onClick={handleClearCart}
//               >
//                 <AiOutlineShoppingCart />
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CartPage;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaRupeeSign } from "react-icons/fa";

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } from "../../redux/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import Img from "../../components/Img";
// import continueShoppingImg from "../../assets/continue_shopping.png";

// function CartPage() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);
//   const [editingItemId, setEditingItemId] = useState(null);
//   const navigate = useNavigate();

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id) => {
//     const item = cartItems.find((item) => item.id === id);
//     if (item.quantity > 1) {
//       dispatch(decreaseQuantity(id));
//     } else {
//       if (window.confirm("Do you want to remove this product from the cart?")) {
//         dispatch(removeFromCart(id));
//       }
//     }
//   };

//   const handleRemoveFromCart = (id) => {
//     if (window.confirm("Do you want to remove this product from the cart?")) {
//       dispatch(removeFromCart(id));
//     }
//   };

//   const handleEditClick = (id) => {
//     setEditingItemId(id);
//   };

//   const handleContinue = () => {
//     navigate("/address");
//   };

//   const handleStartShopping = () => {
//     navigate("/");
//   };

//   const totalCost = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity * 50,
//     0
//   );

//   return (
//     <div className="border border-red-800 w-[100%]">
//       <div className="w-[60%]  border-blue-500 border">
//         <div>
//           <h1 className="text-2xl font-bold mb-5">Product Details</h1>
//           <div className="w-[60%] border border-green-600 flex gap-10">
//             {cartItems.length === 0 ? (
//               <div>
//                 <Img src={continueShoppingImg} />
//                 <p>
//                   Just relax, let us help you find some first-class products
//                 </p>
//                 <p>Your cart is empty</p>
//                 <button onClick={handleStartShopping}>Start Shopping</button>
//               </div>
//             ) : (
//               <div className="flex flex-col gap-5">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex  justify-between items-center border-2 rounded pb-2"
//                   >
//                     <div>
//                       <img
//                         src={item.images[0]}
//                         alt={item.title}
//                         className="w-20 h-20 object-cover rounded"
//                       />
//                     </div>
//                     <div className="flex flex-col">
//                       <p className="font-semibold">{item.title}</p>
//                       <div className="flex items-center flex-wrap gap-2">
//                         <b className="text-lg  flex items-center">
//                           <FaRupeeSign />
//                           {parseInt(item?.price * 50)}
//                         </b>
//                         <del className="text-gray-300 flex items-center">
//                           <div className="text-sm">
//                             <FaRupeeSign />
//                           </div>
//                           <p className="text-sm">
//                             {parseInt(
//                               item?.price *
//                                 50 *
//                                 (1 + item?.discountPercentage / 100)
//                             )}
//                           </p>
//                         </del>

//                         <small className="text-green-500 ">
//                           {Math.ceil(item?.discountPercentage)}% off
//                         </small>
//                       </div>
//                       <div>
//                         {editingItemId === item.id ? (
//                           <div className="flex items-center gap-2 mt-2">
//                             <button
//                               className="px-2 py-1 border rounded"
//                               onClick={() => handleDecreaseQuantity(item.id)}
//                             >
//                               -
//                             </button>
//                             <p>{item.quantity}</p>
//                             <button
//                               className="px-2 py-1 border rounded"
//                               onClick={() => handleIncreaseQuantity(item.id)}
//                             >
//                               +
//                             </button>
//                             <button
//                               className="px-2 py-1 border rounded text-red-500"
//                               onClick={() => setEditingItemId(null)}
//                             >
//                               Done
//                             </button>
//                           </div>
//                         ) : (
//                           <div className="mt-2">
//                             <p>Quantity: {item.quantity}</p>
//                           </div>
//                         )}
//                       </div>
//                       <button
//                         className="text-red-500"
//                         onClick={() => handleRemoveFromCart(item.id)}
//                       >
//                         delete
//                       </button>
//                     </div>
//                     <div>
//                       <button
//                         className="text-blue-500"
//                         onClick={() => handleEditClick(item.id)}
//                       >
//                         edit
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="flex flex-col justify-between items-center mt-5">
//                   <div className="text-lg font-semibold">
//                     Total: <FaRupeeSign /> {parseInt(totalCost)}
//                   </div>
//                   <button
//                     className="flex items-center justify-center gap-2 font-semibold text-lg w-[30%] bg-[#9F2089] p-2 rounded text-white"
//                     onClick={handleContinue}
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

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

  const handleContinue = () => {
    navigate("/address");
  };

  const handleStartShopping = () => {
    navigate("/");
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 50,
    0
  );
  return (
    <div className="w-[100%] flex justify-center ">
      {cartItems.length > 0 ? (
        <div className="w-[60%] flex gap-8">
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
                onClick={handleContinue}
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
    </div>
  );
}

export default CartPage;
