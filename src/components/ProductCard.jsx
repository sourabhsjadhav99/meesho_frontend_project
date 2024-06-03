import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import Img from "./Img";
import { useNavigate } from "react-router-dom";

function ProductCard({ data, loading }) {
  let navigate = useNavigate();

  return (
    <>
      {!loading ? (
        <div
          className="flex flex-col justify-between w-[230px] h-[400px] rounded border"
          onClick={() => navigate(`/${data?.id}`)}
        >
          <div className="h-[60%] flex justify-center relative">
            <Img
              className="w-full h-full rounded-t"
              src={`${data?.images[0]}`}
            />

            <small className="bg-[#F8F8FF] p-1 absolute bottom-0 left-[166px] rounded-tl-lg">
              +5 more
            </small>
          </div>
          <div className="flex flex-col p-2 gap-3">
            <div>
              <p>{data?.title}</p>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <b className="text-lg  flex items-center">
                {" "}
                <FaRupeeSign />
                {parseInt(data?.price * 50)}
              </b>
              <del className="text-gray-300 flex items-center">
                <div className="text-sm">
                  <FaRupeeSign />
                </div>
                <p className="text-sm">
                  {parseInt(
                    data?.price * 50 * (1 + data?.discountPercentage / 100)
                  )}
                </p>
              </del>
              {data?.discountPercentage ? (
                <small className="text-green-500 ">
                  {Math.ceil(data?.discountPercentage)}% off
                </small>
              ) : (
                <div>onwards</div>
              )}
            </div>
            <div>
              <small className="bg-red-100 border rounded-xl px-2">
                Free delivery
              </small>
            </div>
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
              <small>{data?.reviews.length} Reviews</small>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading.........</div>
      )}
    </>
  );
}

export default ProductCard;
