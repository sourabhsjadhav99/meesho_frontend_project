import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Img from "../../components/Img";
import style from "./singleProduct.module.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
function SingleProduct() {
  const { id } = useParams();
  const { data, loading } = useFetch(`/products/${id}`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(0);
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(data));
    navigate("/cart")
  };

  return (
    <div className="flex justify-center my-10 ">
      {data ? (
        <div className=" w-[70%] flex   gap-10 ">
          <div className="flex w-[40%]">
            <div className="w-[12%] flex flex-col gap-2">
              {data?.images?.map((image, index) => {
                return (
                  <Img
                    src={image}
                    key={index}
                    alt=""
                    className={`w-[90%] h-[60px] p-1 border rounded ${
                      clickedIndex === index ? "border-[#9F2089]" : ""
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setClickedIndex(index);
                    }}
                  />
                );
              })}
            </div>
            <div className="w-[88%]  flex flex-col  gap-10">
              <div className="border flex justify-center p-1 rounded w-full h-[450px] ">
                <Img
                  src={`${data?.images[currentIndex]}`}
                  className="w-full h-full"
                />
              </div>
              <div className="w-full flex gap-5 border-b-2  pb-5">
                <button
                  className="flex items-center justify-center gap-2 font-semibold text-lg w-[45%] border text-[#9F2089] border-[#9F2089] p-2 rounded"
                  onClick={handleAddToCart}
                >
                  <AiOutlineShoppingCart />
                  Add to Cart
                </button>
                <button className="flex items-center justify-center gap-2 font-semibold text-lg w-[45%] bg-[#9F2089] p-2 rounded text-white">
                  <RxDoubleArrowRight />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-5 ">
            <div className="border-2 p-3 flex flex-col rounded gap-5">
              <p className="text-[#8B8BA3] text-lg font-semibold">
                {" "}
                {data?.title}.
              </p>
              <div className="flex items-center flex-wrap gap-2">
                <b className="text-2xl  flex items-center">
                  {" "}
                  <FaRupeeSign />
                  {parseInt(data?.price * 50)}
                </b>
                <del className="text-gray-300 flex items-center">
                  <div className="text-md">
                    <FaRupeeSign />
                  </div>
                  <p className="text-md">
                    {parseInt(
                      data?.price * 50 * (1 + data?.discountPercentage / 100)
                    )}
                  </p>
                </del>
                {data?.discountPercentage ? (
                  <p className="text-green-500 ">
                    {Math.ceil(data?.discountPercentage)}% off
                  </p>
                ) : (
                  <div>onwards</div>
                )}
              </div>
              <div className="flex  items-baseline gap-2">
                <div
                  className={`flex px-2 justify-between items-center text-white w-[50px] ${
                    data?.rating.toFixed(1) <= 2.5
                      ? "bg-red-500"
                      : data?.rating.toFixed(1) <= 3.5
                      ? "bg-orange-400"
                      : "bg-green-500"
                  } border rounded-2xl `}
                >
                  <p>{data?.rating.toFixed(1)}</p>
                  <FaStar />
                </div>
                <small className="text-[#8B8BA3]">
                  {data?.reviews.length} Reviews
                </small>
              </div>
              <div>
                <small className="bg-red-100 border rounded-xl px-2">
                  Free delivery
                </small>
              </div>
            </div>

            <div className="border-2 rounded flex flex-col gap-5 p-3">
              <h3 className="font-bold text-lg">Product Details:</h3>
              <ul className="text-[#8B8BA3] font-semibold list-disc ml-4">
                <li>Name: {data?.title}</li>
                <li>Brand: {data?.brand} </li>
                <li>Warranty: {data?.warrantyInformation}</li>
                <li>Shipping Information: {data?.shippingInformation}</li>
                <li>Return Policy: {data?.returnPolicy} </li>
                <li>{data?.description}</li>
              </ul>
            </div>
            <div className="border-2 rounded p-3">
              <div className="flex items-baseline gap-2">
                <div
                  className={`flex px-2 justify-between items-center   text-3xl ${
                    data?.rating.toFixed(1) <= 2.5
                      ? "text-red-500"
                      : data?.rating.toFixed(1) <= 3.5
                      ? "text-orange-400"
                      : "text-green-600"
                  }`}
                >
                  <p>{data?.rating.toFixed(1)}</p>
                  <div className="text-xl">
                    <FaStar />
                  </div>
                </div>
                <p className="text-[#8B8BA3]">{data?.reviews.length} Reviews</p>
              </div>
              {data?.reviews?.map((review, index) => {
                return (
                  <div
                    className="border rounded p-2 my-2 text-[#8B8BA3] font-semibold"
                    key={index}
                  >
                    <p>Reviewer Name: {review.reviewerName}</p>
                    <p>Reviewer Email: {review.reviewerEmail}</p>

                    <div className="flex items-baseline gap-2">
                      <div
                        className={`flex px-2 justify-between items-center text-white w-[50px] ${
                          data?.rating.toFixed(1) <= 2.5
                            ? "bg-red-500"
                            : data?.rating.toFixed(1) <= 3.5
                            ? "bg-orange-400"
                            : "bg-green-500"
                        } border rounded-2xl `}
                      >
                        <p>{data?.rating.toFixed(1)}</p>
                        <FaStar />
                      </div>
                      <p>
                        <span>Posted on</span>{" "}
                        <i>{review.date.substring(0, 10)}</i>
                      </p>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[70%] h-screen flex gap-10  justify-between ">
          <div className={` w-[40%] h-[70%] rounded-lg flex gap-10`}>
            <div
              className={` w-[10%] rounded-lg h-[12%] ${style.skeleton}`}
            ></div>
            <div
              className={` w-[70%] rounded-lg h-[90%] ${style.skeleton}`}
            ></div>
          </div>
          <div className={`flex flex-col gap-10 w-[60%] h-full`}>
            <div className={` w-full rounded-lg h-1/3 ${style.skeleton}`}></div>
            <div className={` w-full rounded-lg h-1/3 ${style.skeleton}`}></div>
            <div className={` w-full rounded-lg h-1/3 ${style.skeleton}`}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
