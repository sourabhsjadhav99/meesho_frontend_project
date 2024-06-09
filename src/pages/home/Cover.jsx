import React from "react";
import cover from "../../assets/cover.webp";
import Img from "../../components/Img";

function Cover() {
  const handleButtonClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=96148644",
      "_blank"
    );
  };

  return (
    <div className="w-full md:h-[400px] flex flex-col items-center justify-center my-5 md:my-8 p-2 ">
      <div className="flex flex-col md:flex-row w-[100%]  md:w-11/12 lg:w-9/12  justify-between ">
        <div className="w-[100%] md:w-[50%] h-auto md:h-[350px] lg:h-[400px] flex flex-col justify-between items-start  bg-[#F8F8FF] p-5 gap-3 md:gap-2 rounded-md">
          <div className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#353543]">
            <h1>Lowest Prices</h1>
            <h1>Best Quality Shopping</h1>
          </div>
          <div className="flex justify-between p-2 rounded-md text-[#353543] font-semibold w-[100%]  bg-white">
            <div className="flex items-center gap-2">
              <div className="rounded-full border-gray-200 border-2">
                <img
                  src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                  alt="free delivery"
                />
              </div>
              <p>
                Free <br />
                Delivery
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 mx-1 border-l-2 border-[#9F2089]">
              <div className="rounded-full border-gray-200 border-2">
                <img
                  src="https://images.meesho.com/images/pow/cod_jamun.svg"
                  alt="cash on delivery"
                />
              </div>
              <p>
                Cash on <br />
                Delivery
              </p>
            </div>

            <div className="flex items-center gap-2 px-2 border-l-2 border-[#9F2089]">
              <div className="rounded-full border-gray-200 border-2">
                <img
                  src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                  alt="easy return"
                />
              </div>
              <p>
                Easy <br />
                Returns
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[80%] lg:w-[60%] ">
            <button
              className="w-full flex justify-evenly bg-[#9F2089] p-3 text-lg text-white rounded-md font-bold"
              onClick={handleButtonClick}
            >
              <div>
                <img
                  src="https://images.meesho.com/images/pow/playstoreSmallIcon.png"
                  alt=""
                />
              </div>
              <p>Download the Meesho App</p>
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-auto md:h-[350px] lg:h-[400px]">
          <Img
            src={cover}
            alt="cover"
            className="w-screen h-[250px] md:h-[350px] lg:h-[400px] rounded-b-md md:rounded-r-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Cover;
