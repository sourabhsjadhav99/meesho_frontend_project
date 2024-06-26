import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { removeFromCart } from "../../redux/cartSlice";
import { useNavigate,Navigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Img from "../../components/Img";
import continueShoppingImg from "../../assets/continue_shopping.png";
import meeshoLogo from "../../assets/meesho.png";
import safetyImg from "../../assets/safety.png";
import AddressForm from "../../components/AddressForm";
import EditSideBar from "../../components/EditSidebar";
import Swal from "sweetalert2";
import ProgressBar from "./Progress";
import { useAuth } from "../../components/signup/AuthContext";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [editingItemId, setEditingItemId] = useState(null);
  const navigate = useNavigate();
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editCart, setEditCart] = useState(false);

  const handleRemoveFromCart = (id) => {
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
        Swal.fire(
          "Removed!",
          "Product has been removed from the cart.",
          "success"
        );
      }
    });
  };

  const handleEditClick = (id) => {
    setEditingItemId(id);
  };

  const handleStartShopping = () => {
    navigate("/");
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + parseInt(item.price * 50) * item.quantity,
    0
  );

  const toggleAddressSidebar = () => {
    setIsOpenAddress(!isOpenAddress);
  };
  const toggleEditSidebar = () => {
    setIsOpenEdit(!isOpenEdit);
  };
  const {isLoggedIn,currentStep} = useAuth(); 


  if (!isLoggedIn) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <div className="flex flex-col gap-5 min-h-screen ">
      <header
        className={`w-[100%] m-0 p-0  flex justify-center items-center  border-b-2 cartheader  content-wrapper ${
          isOpenAddress || isOpenEdit ? "blurred" : ""
        }`}
      >
        <div className="w-[75%] flex gap-[150px] items-center m-0 p-0 cartheader">
          <Img src={meeshoLogo} className="w-[156px] h-[36px] mobilelogo" />
          <ProgressBar currentStep={currentStep}/>
        </div>
      </header>
      <div className="flex justify-center w-[100%]  relative ">
        {cartItems.length > 0 ? (
          <div className={`w-[100%] md:w-[60%] p-2`}>
            <div
              className={`flex justify-center flex-col md:flex-row w-[100%] gap-8 content-wrapper ${
                isOpenAddress || isOpenEdit ? "blurred" : ""
              } `}
            >
              <div className="w-[100%] md:w-[60%]">
                <div className="w-[100%] flex flex-col gap-3 ">
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
              <div className="w-[100%] md:w-[40%] p-5 md:border-l-2 flex flex-col gap-3">
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
          <div className="w-[80%] md:w-[30%] flex flex-col  items-center gap-3">
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
