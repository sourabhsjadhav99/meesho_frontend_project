import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import Img from "../../components/Img";
import safetyImg from "../../assets/safety.png";
import AddressForm from "../../components/AddressForm";
import EditSideBar from "../../components/EditSidebar";
import meeshoLogo from "../../assets/meesho.png";
import { useSelector } from "react-redux";

function BuyNowPage() {
  const buyNowFirst = useSelector((state) => state.cart.buyNowItem)
  console.log(buyNowFirst);
  const [editingItemId, setEditingItemId] = useState(null);
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

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

  return (
    <div className="flex flex-col gap-5">
      <header
        className={`w-[100%] p-5 flex justify-center items-center  border-b-2  content-wrapper ${
          isOpenAddress || isOpenEdit ? "blurred" : ""
        }`}
      >
        <div className="w-[75%] ">
          <Img src={meeshoLogo} className="w-[156px] h-[36px]" />
        </div>
      </header>
      <div className="flex justify-center w-[100%] relative ">
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
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BuyNowPage;
