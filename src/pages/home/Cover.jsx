import React from "react";
import cover from "../../assets/cover.webp";

function Cover() {
  const handleButtonClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=96148644", "_blank");
  };

  return (
    <div className="w-full my-8 flex flex-col items-center gap-14 justify-center">
      <div className="flex w-[75%] h-[350px] justify-between rounded-md">
        <div className="w-1/2 flex flex-col justify-between items-start rounded-l-md bg-[#F8F8FF] p-5">
          <div className="text-5xl font-semibold text-[#353543]">
            <h1>Lowest Prices</h1>
            <h1>Best Quality Shopping</h1>
          </div>
          <div className="flex justify-between p-2 rounded-md text-[#353543] font-semibold w-[80%] bg-white">
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
            <div className="flex items-center gap-2 px-2 border-l-2 border-[#9F2089]">
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
          <div className="w-[60%]">
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

        <div className="w-1/2">
          <img src={cover} alt="cover" className="w-full h-full rounded-r-md" />
        </div>
      </div>
    </div>
  );
}

export default Cover;
