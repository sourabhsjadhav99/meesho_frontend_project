import React from "react";
import fashion_forward from "../../assets/fashion_forward.webp";
import essentials from "../../assets/essentials.webp";
import women_store from "../../assets/womens_store.webp";
import mens_store from "../../assets/mens_store.webp";
import kids_store from "../../assets/kids_store.webp";
import home_decor from "../../assets/home_decor.webp";
import kitchen_appliances from "../../assets/kitchen_appliances.webp";
import health_care from "../../assets/health_care.webp";
import new_styles from "../../assets/new_styles.webp";
import accessories from "../../assets/accessories.webp";
import footwares from "../../assets/footwares.webp";
import electronics from "../../assets/electronics.webp";
import view from "../../assets/view.webp";
import online_buisness from "../../assets/online_buisness.webp";
import playstore from "../../assets/playstore.webp";
import appstore from "../../assets/apps_store.webp";
import supplier from "../../assets/supplier.webp";
import { FaCheckCircle } from "react-icons/fa";
function Categories() {
  const handleplayButtonClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=96148644", "_blank");
  };
const handleAppButtonClick = () => {
  window.open("https://apps.apple.com/us/app/meesho-online-shopping/id1457958492", "_blank");
};
  return (
    <div className="w-full flex flex-col items-center gap-14 justify-center my-10">
      <div className="flex">
        <h1 className="text-4xl font-bold">Top Categories to choose from</h1>
        <div></div>
      </div>
      <div
        className=" flex items-end gap-4 px-6 p-10 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
        style={{ backgroundImage: `url(${fashion_forward})` }}
      >
        <div>
          <img className="rounded-sm" src={women_store} alt="women_store" />
        </div>
        <div>
          <img className="rounded-xl" src={mens_store} alt="mens_store" />
        </div>
        <div>
          <img className="rounded-xl" src={kids_store} alt="kids_store" />
        </div>
      </div>

      <div
        className=" flex items-center justify-around gap-4 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
        style={{ backgroundImage: `url(${essentials})` }}
      >
        <div className="w-[180px]">
          <img src={view} alt="view" />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col justify-between gap-3">
            <img className="rounded-xl" src={home_decor} alt="home_decor" />{" "}
            <p className="text-xl text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Home Decor
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <img
              className="rounded-xl"
              src={kitchen_appliances}
              alt="kitchen_appliances"
            />{" "}
            <p className="text-xl text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Kitchen Appliances{" "}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <img className="rounded-xl" src={health_care} alt="health_care" />
            <p className="text-xl text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Health Care
            </p>
          </div>
        </div>
      </div>

      <div
        className=" flex items-center justify-around gap-4 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
        style={{ backgroundImage: `url(${new_styles})` }}
      >
        <div className="w-[180px]">
          <img src={view} alt="view" />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col justify-between gap-3">
            <img className="rounded-xl" src={accessories} alt="accessories" />{" "}
            <p className="text-xl text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Accessories
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <img className="rounded-xl" src={footwares} alt="footwares" />{" "}
            <p className="text-xl text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Footwares
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <img className="rounded-xl" src={electronics} alt="electronics" />
            <p className="text-xl text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Elecronics
            </p>
          </div>
        </div>
      </div>

      <div
        className=" flex flex-col items-end gap-4 p-12 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
        style={{ backgroundImage: `url(${online_buisness})` }}
      >
        <h1 className="text-blue-500 text-3xl mb-2">Become a Reseller and</h1>
        <h1 className="text-pink-800 text-5xl font-bold">
          Start your Online Business
        </h1>
        <h1 className="text-pink-800 text-5xl font-bold">
          with Zero Investment
        </h1>
        <div className="flex gap-3 mt-10">
          <button className="w-[180px] h-[48px]" onClick={handleplayButtonClick}>
            <img
              src={playstore}
              alt="playstore"
              className="w-full h-full rounded-md"
            />
          </button>
          <button className="w-[180px] h-[48px]" onClick={handleAppButtonClick}>
            <img
              src={appstore}
              alt="appstore"
              className="w-full h-full rounded-md"
            />
          </button>
        </div>
      </div>

      <div
        className="flex flex-col items-start gap-5 p-12 w-[75%] h-[300px] bg-no-repeat bg-cover rounded-md text-white"
        style={{ backgroundImage: `url(${supplier})` }}
      >
        <h1 className="text-4xl font-semibold">
          Register as a Meesho Supplier
        </h1>
        <p className="text-lg">
          Sell your products to crores of customers at 0% commission
        </p>
        <div className="flex w-[70%] text-lg font-bold">
          <div className=" w-1/3 flex gap-2 items-center">
            <p className="text-green-600">
              <FaCheckCircle />
            </p>
            <p>Grow your Buisness</p>
          </div>
          <div className=" w-1/3 flex gap-2 items-center">
            <p className="text-green-600">
              <FaCheckCircle />
            </p>
            <p>Enjoy 100% profit</p>
          </div>
          <div className="w-1/3 flex gap-2 items-center">
            <p className="text-green-600">
              <FaCheckCircle />
            </p>
            <p>Sell all over India</p>
          </div>
        </div>
        <button className="bg-white text-xl font-bold text-pink-800 w-[110px] rounded">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Categories;
