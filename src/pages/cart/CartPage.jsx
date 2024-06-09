import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { removeFromCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Img from "../../components/Img";
import continueShoppingImg from "../../assets/continue_shopping.png";
import meeshoLogo from "../../assets/meesho.png";
import safetyImg from "../../assets/safety.png";
import AddressForm from "../../components/AddressForm";
import EditSideBar from "../../components/EditSidebar";
import Swal from "sweetalert2";
import ProgressBar from "./Progress";
function CartPage() {
    // Initialize necessary hooks and states
    const dispatch = useDispatch(); // Redux dispatch function
    const cartItems = useSelector((state) => state.cart.items); // Select cart items from Redux store
    const [editingItemId, setEditingItemId] = useState(null); // State to track editing item ID
    const navigate = useNavigate(); // Navigation hook for routing
    const [isOpenAddress, setIsOpenAddress] = useState(false); // State for toggling address sidebar
    const [isOpenEdit, setIsOpenEdit] = useState(false); // State for toggling edit sidebar
    const [editCart, setEditCart] = useState(false); // State to track cart editing mode
  
    // Function to handle remove item from cart action
    const handleRemoveFromCart = (id) => {
      // Show confirmation dialog using SweetAlert
      Swal.fire({
        title: "Do you want to remove this product from the cart?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        // If user confirms removal
        if (result.isConfirmed) {
          // Dispatch action to remove item from cart
          dispatch(removeFromCart(id));
          // Show success message using SweetAlert
          Swal.fire(
            "Removed!",
            "Product has been removed from the cart.",
            "success"
          );
        }
      });
    };
  
    // Function to handle edit click action
    const handleEditClick = (id) => {
      setEditingItemId(id); // Set the editing item ID state
    };
  
    // Function to handle start shopping action
    const handleStartShopping = () => {
      navigate("/"); // Navigate to the home page
    };
  
    // Calculate total cost of items in the cart
    const totalCost = cartItems.reduce(
      (total, item) => total + parseInt(item.price * 50) * item.quantity,
      0
    );
  
    // Toggle address sidebar state
    const toggleAddressSidebar = () => {
      setIsOpenAddress(!isOpenAddress);
    };
  
    // Toggle edit sidebar state
    const toggleEditSidebar = () => {
      setIsOpenEdit(!isOpenEdit);
    };


  return (
    <div className="flex flex-col gap-5 min-h-screen">
      <header
        className={`w-[100%] m-0 p-0  flex justify-center items-center  border-b-2  content-wrapper ${
          isOpenAddress || isOpenEdit ? "blurred" : ""
        }`}
      >
        <div className="w-[75%] flex gap-[150px] items-center m-0 p-0">
          <Img src={meeshoLogo} className="w-[156px] h-[36px]" />
          <ProgressBar />
        </div>
      </header>
      <div className="flex justify-center w-[100%]  relative ">
        {cartItems.length > 0 ? (
          <div className={`w-[60%] `}>
            <div
              className={`flex justify-center w-[100%] gap-8 content-wrapper ${
                isOpenAddress || isOpenEdit ? "blurred" : ""
              } `}
            >
              <div className="w-[60%] md:w-[80%]">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">Product Details</h3>
                  {cartItems.map((item) => (
                    <div key={item.id} className=" border-2 rounded-lg">
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
                            onClick={() => {
                              toggleEditSidebar();
                              handleEditClick(item.id);
                              setEditCart(true);
                            }}
                          >
                            EDIT
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between p-3 border-t-2">
                        <p>
                          Sold By:{" "}
                          <span className="font-semibold">
                            {item.brand || "Meesho"}
                          </span>
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
                    <p className="underline decoration-dotted">
                      Total product Price:
                    </p>
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
            />
            <EditSideBar
              isOpenEdit={isOpenEdit}
              toggleEditSidebar={toggleEditSidebar}
              editingItemId={editingItemId}
              setEditingItemId={setEditingItemId}
              editCart={editCart}
            />
          </div>
        ) : (
          <div className="w-[30%] flex flex-col  items-center gap-3">
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
    </div>
  );
}

export default CartPage;
