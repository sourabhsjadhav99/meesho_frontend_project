

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaRupeeSign } from "react-icons/fa";
// import {
//   increaseQuantity,
//   decreaseQuantity,
// } from "../redux/cartSlice";
// import { useNavigate } from "react-router-dom";

// import Img from "../components/Img";

// import safetyImg from "../assets/safety.png";
// import AddressForm from "../pages/cart/AddressForm";
// import "./cart/./CartPage.css"; // Import the CSS file

// function PayNowPage() {
//   const dispatch = useDispatch();
//   const buyNow = useSelector((state) => state.cart.buyNowItem);
//   const [editingItemId, setEditingItemId] = useState(null);
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id) => {
//     const item = buyNow.find((item) => item.id === id);
//     if (item.quantity > 1) {
//       dispatch(decreaseQuantity(id));
//     } 
//   };



//   const handleEditClick = (id) => {
//     setEditingItemId(id);
//   };



//   const totalCost = buyNow.reduce(
//     (total, item) => total + item.price * item.quantity * 50,
//     0
//   );

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleAddressSubmit = () => {
//     const address = JSON.parse(localStorage.getItem("address"));
//     if (address) {
//       handlePayment();
//     } else {
//       alert("Address information is missing.");
//       navigate("/address");
//     }
//   };

//   const handlePayment = async () => {
//     const loadScript = (src) => {
//       return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//           resolve(true);
//         };
//         script.onerror = () => {
//           reject(new Error("Razorpay SDK failed to load."));
//         };
//         document.body.appendChild(script);
//       });
//     };

//     try {
//       const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//       if (!res) {
//         alert("Razorpay SDK failed to load. Are you online?");
//         return;
//       }

//       const address = JSON.parse(localStorage.getItem("address"));
//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY,
//         amount: parseInt(totalCost) * 100, // Amount in paise
//         currency: "INR",
//         name: "Meesho",
//         description: "Test Transaction",
//         image: "path/to/meesho_logo.png", // Add your logo here
//         handler: function (response) {
//           console.log("Payment Success:", response);
//           alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//           navigate("/summary"); // Redirect to a success page
//         },
//         prefill: {
//           name: address.name,
//           contact: address.mobile,
//         },
//         notes: {
//           address: `${address.house}, ${address.road}, ${address.city}, ${address.state}, ${address.pincode}`,
//         },
//         theme: {
//           color: "#9f2089",
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.on("payment.failed", function (response) {
//         console.error("Payment Failed:", response.error);
//         alert(`Payment failed! Reason: ${response.error.reason}`);
//         console.log("Navigating back to previous page...");
//         navigate(-1);
//       });

//       paymentObject.open();
//     } catch (error) {
//       console.error("Error in handlePayment:", error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center w-[100%] relative">
//       {buyNow.length > 0 && 
//         <div className={`w-[60%] `}>
//           <div
//             className={`flex justify-center w-[100%] gap-8 content-wrapper ${
//               isOpen ? "blurred" : ""
//             }`}
//           >
//             <div className="w-[60%]">
//               <div className="flex flex-col gap-3">
//                 <h3 className="text-xl font-semibold">Product Details</h3>
//                 {buyNow.map((item) => (
//                   <div key={item.id} className="border-2 rounded-lg">
//                     <div className="flex justify-between p-4 ">
//                       <div className="w-[60px] h-[60px] border-2 rounded-md">
//                         <Img
//                           src={item.images[0]}
//                           className="object-contain rounded w-[60px] h-[60px]"
//                         />
//                       </div>
//                       <div className="flex flex-col w-[70%]">
//                         <p className="font-semibold">{item.title}</p>
//                         <div className="flex items-center gap-2">
//                           <b className="text-lg flex items-center">
//                             <FaRupeeSign />
//                             {parseInt(item?.price * 50)}
//                           </b>
//                           <del className="text-gray-300 flex items-center">
//                             <div className="text-sm">
//                               <FaRupeeSign />
//                             </div>
//                             <p className="text-sm">
//                               {parseInt(
//                                 item?.price *
//                                   50 *
//                                   (1 + item?.discountPercentage / 100)
//                               )}
//                             </p>
//                           </del>
//                           <small className="text-green-500">
//                             {Math.ceil(item?.discountPercentage)}% off
//                           </small>
//                         </div>
//                         <div>
//                           {editingItemId === item.id ? (
//                             <div className="flex items-center gap-3">
//                               <button
//                                 className="px-2 py-1 border rounded"
//                                 onClick={() => handleDecreaseQuantity(item.id)}
//                               >
//                                 -
//                               </button>
//                               <p>{item.quantity}</p>
//                               <button
//                                 className="px-2 py-1 border rounded"
//                                 onClick={() => handleIncreaseQuantity(item.id)}
//                               >
//                                 +
//                               </button>
//                               <button
//                                 className="px-2 py-1 border rounded text-red-500"
//                                 onClick={() => setEditingItemId(null)}
//                               >
//                                 Done
//                               </button>
//                             </div>
//                           ) : (
//                             <div>
//                               <p>
//                                 Quantity:
//                                 <span className="font-bold">
//                                   {item.quantity}
//                                 </span>
//                               </p>
//                             </div>
//                           )}
//                         </div>
                  
//                       </div>
//                       <div className="">
//                         <button
//                           className="text-[#9F2089] font-bold"
//                           onClick={() => {
//                             toggleEditSidebar();
//                             handleEditClick(item.id);
//                           }}
//                         >
//                           EDIT
//                         </button>
//                       </div>
//                     </div>
//                     <div className="flex justify-between p-2 border-t-2">
//                       <p>
//                         Sold By:{" "}
//                         <span className="font-semibold">{item.brand}</span>
//                       </p>
//                       <p>Free Delivery</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="w-[40%] p-5 border-l-2 flex flex-col gap-3">
//               <h3 className="text-lg font-semibold">Price Details</h3>
//               <div className="flex justify-between">
//                 <div>
//                   <p>Total product Price:</p>
//                 </div>
//                 <div className="flex items-center">
//                   +<FaRupeeSign />
//                   <p>{parseInt(totalCost)}</p>
//                 </div>
//               </div>
//               <div className="flex justify-between border-t-2 font-bold">
//                 <p>Order Total</p>
//                 <div className="flex items-center">
//                   <FaRupeeSign />
//                   <p>{parseInt(totalCost)}</p>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-xs p-1">
//                   Clicking on 'Continue' will not deduct any money
//                 </p>
//                 <button
//                   className="flex items-center w-[100%] justify-center font-bold bg-[#9f2089] p-2 text-white rounded-md"
//                   onClick={toggleSidebar}
//                 >
//                   Continue
//                 </button>
//               </div>
//               <div className="w-[100%] ">
//                 <Img src={safetyImg} className="w-[100%] shadow-xl" />
//               </div>
//             </div>
//           </div>
//           <AddressForm
//             isOpen={isOpen}
//             toggleSidebar={toggleSidebar}
//             onSave={handleAddressSubmit}
//           />
//                <EditSideBar
//             isOpenEdit={isOpenEdit}
//             toggleEditSidebar={toggleEditSidebar}
//             editingItemId={editingItemId}
//             setEditingItemId={setEditingItemId}
//           />
//         </div>
//     }
//     </div>
//   );
// }

// export default PayNowPage;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

import Img from "../components/Img";

import safetyImg from "../assets/safety.png";
import AddressForm from "../pages/cart/AddressForm";
import "./cart/./CartPage.css"; // Import the CSS file
import EditSideBar from "../components/EditSidebar";

function PayNowPage() {
  const dispatch = useDispatch();
  const buyNow = useSelector((state) => state.cart.buyNowItem);
  const [editingItemId, setEditingItemId] = useState(null);
  const navigate = useNavigate();
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  let buyNowFirst= buyNow.slice(-1)
  const handleEditClick = (id) => {
    setEditingItemId(id);
  };

  const totalCost = buyNowFirst.reduce(
    (total, item) => total + item.price * item.quantity * 50,
    0
  );
  const toggleAddressSidebar = () => {
    setIsOpenAddress(!isOpenAddress);
  };
  const toggleEditSidebar = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  const handleAddressSubmit = () => {
    const address = JSON.parse(localStorage.getItem("address"));
    if (address) {
      handlePayment();
    } else {
      alert("Address information is missing.");
      navigate("/address");
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

  return (
    <div className="flex justify-center w-[100%] relative">
      {buyNowFirst.length > 0 && (
        <div className={`w-[60%] `}>
          <div
            className={`flex justify-center w-[100%] gap-8 content-wrapper ${
                isOpenAddress || isOpenEdit ? "blurred" : ""
            }`}
          >
            <div className="w-[60%]">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Product Details</h3>
                {buyNowFirst.map((item) => (
                  <div key={item.id} className="border-2 rounded-lg">
                    <div className="flex justify-between p-4 ">
                      <div className="w-[60px] h-[60px] border-2 rounded-md">
                        <Img
                          src={item.images[0]}
                          className="object-contain rounded w-[60px] h-[60px]"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-[70%]">
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
        
                            <div>
                              <p>
                                Quantity:
                                <span className="font-bold">
                                  {item.quantity}
                                </span>
                              </p>
                            </div>
                         
                        </div>
                      </div>
                      <div className="">
                        <button
                          className="text-[#9F2089] font-bold"
                          onClick={() => {
                            toggleEditSidebar();
                            handleEditClick(item.id);
                          }}
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
            <div className="w-[40%] p-5 border-l-2 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Price Details</h3>
              <div className="flex justify-between">
                <div>
                  <p className="underline decoration-dotted">Total product Price:</p>
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
                  onClick={toggleAddressSidebar}
                >
                  Continue
                </button>
              </div>
              <div className="w-[100%] ">
                <Img src={safetyImg} className="w-[100%] shadow-xl" />
              </div>
            </div>
          </div>
          <AddressForm
            isOpenAddress={isOpenAddress}
            toggleAddressSidebar={toggleAddressSidebar}
            onSave={handleAddressSubmit}
          />
          <EditSideBar
            isOpenEdit={isOpenEdit}
            toggleEditSidebar={toggleEditSidebar}
            editingItemId={editingItemId}
            setEditingItemId={setEditingItemId}
          />
        </div>
      )}
    </div>
  );
}

export default PayNowPage;

