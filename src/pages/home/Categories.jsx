// import React from "react";
// import fashion_forward from "../../assets/fashion_forward.webp";
// import essentials from "../../assets/essentials.webp";
// import women_store from "../../assets/womens_store.webp";
// import mens_store from "../../assets/mens_store.webp";
// import kids_store from "../../assets/kids_store.webp";
// import home_decor from "../../assets/home_decor.webp";
// import kitchen_appliances from "../../assets/kitchen_appliances.webp";
// import health_care from "../../assets/health_care.webp";
// import new_styles from "../../assets/new_styles.webp";
// import accessories from "../../assets/accessories.webp";
// import footwares from "../../assets/footwares.webp";
// import electronics from "../../assets/electronics.webp";
// import view from "../../assets/view.webp";
// import online_buisness from "../../assets/online_buisness.webp";
// import playstore from "../../assets/playstore.webp";
// import appstore from "../../assets/apps_store.webp";
// import supplier from "../../assets/supplier.webp";
// import { FaCheckCircle } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addMultipleCategories } from "../../redux/filterSlice";
// import { useNavigate } from "react-router-dom";
// function Categories() {
//   const dispatch = useDispatch();
//   let navigate = useNavigate();

//   const handleplayButtonClick = () => {
//     window.open(
//       "https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=96148644",
//       "_blank"
//     );
//   };
//   const handleAppButtonClick = () => {
//     window.open(
//       "https://apps.apple.com/us/app/meesho-online-shopping/id1457958492",
//       "_blank"
//     );
//   };
//   return (
//     <div className="w-full flex flex-col items-center gap-10 justify-center ">
//       <div className="flex">
//         <h1 className=" text-2xl md:text-4xl font-bold">Top Categories to choose from</h1>
//         <div></div>
//       </div>
//       <div
//         className=" flex items-end gap-4 px-6 p-10 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
//         style={{ backgroundImage: `url(${fashion_forward})` }}
//       >
//         <button
//           onClick={() => {
//             dispatch(
//               addMultipleCategories([
//                 "womens-dresses",
//                 "womens-bags",
//                 "womens-jewellery",
//                 "beauty",
//               ])
//             );
//             navigate("/category");
//           }}
//         >
//           <img className="rounded-sm" src={women_store} alt="women_store" />
//         </button>
//         <button
//           onClick={() => {
//             dispatch(addMultipleCategories(["mens-shirts", "mens-watches"]));
//             navigate("/category");
//           }}
//         >
//           <img className="rounded-xl" src={mens_store} alt="mens_store" />
//         </button>
//         <button
//           onClick={() => {
//             dispatch(addMultipleCategories(["tops", "womens-shoes"]));
//             navigate("/category");
//           }}
//         >
//           <img className="rounded-xl" src={kids_store} alt="kids_store" />
//         </button>
//       </div>

//       <div
//         className=" flex items-center justify-around gap-4 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
//         style={{ backgroundImage: `url(${essentials})` }}
//       >
//         <button
//           className="w-[180px]"
//           onClick={() => {
//             dispatch(
//               addMultipleCategories([
//                 "home-decoration",
//                 "kitchen-accessories",
//                 "skin-care",
//               ])
//             );
//             navigate("/category");
//           }}
//         >
//           <img src={view} alt="view" />
//         </button>
//         <div className="flex gap-4">
//           <button
//             className="flex flex-col justify-between gap-3"
//             onClick={() => {
//               dispatch(addMultipleCategories(["home-decoration"]));
//               navigate("/category");
//             }}
//           >
//             <img className="rounded-xl" src={home_decor} alt="home_decor" />{" "}
//             <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
//               Home Decor
//             </p>
//           </button>
//           <button
//             className="flex flex-col justify-between gap-3"
//             onClick={() => {
//               dispatch(addMultipleCategories(["kitchen-accessories"]));
//               navigate("/category");
//             }}
//           >
//             <img
//               className="rounded-xl"
//               src={kitchen_appliances}
//               alt="kitchen_appliances"
//             />{" "}
//             <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
//               Kitchen Appliances{" "}
//             </p>
//           </button>
//           <button
//             className="flex flex-col justify-between gap-3"
//             onClick={() => {
//               dispatch(addMultipleCategories(["skin-care"]));
//               navigate("/category");
//             }}
//           >
//             <img className="rounded-xl" src={health_care} alt="health_care" />
//             <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
//               Health Care
//             </p>
//           </button>
//         </div>
//       </div>

//       <div
//         className=" flex items-center justify-around gap-4 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
//         style={{ backgroundImage: `url(${new_styles})` }}
//       >
//         <button
//           className="w-[180px]"
//           onClick={() => {
//             dispatch(
//               addMultipleCategories([
//                 "sunglasses",
//                 "womens-bags",
//                 "mens-shoes",
//                 "womens-shoes",
//                 "mobile-accessories",
//                 "smartphones",
//                 "tablets",
//               ])
//             );
//             navigate("/category");
//           }}
//         >
//           <img src={view} alt="view" />
//         </button>
//         <div className="flex gap-4">
//           <button
//             className="flex flex-col justify-between gap-3"
//             onClick={() => {
//               dispatch(addMultipleCategories(["sunglasses", "womens-bags"]));
//               navigate("/category");
//             }}
//           >
//             <img className="rounded-xl" src={accessories} alt="accessories" />{" "}
//             <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
//               Accessories
//             </p>
//           </button>
//           <button
//             className="flex flex-col justify-between gap-3"
//             onClick={() => {
//               dispatch(addMultipleCategories(["mens-shoes", "womens-shoes"]));
//               navigate("/category");
//             }}
//           >
//             <img className="rounded-xl" src={footwares} alt="footwares" />{" "}
//             <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
//               Footwares
//             </p>
//           </button>
//           <button
//             className="flex flex-col justify-between gap-3"
//             onClick={() => {
//               dispatch(
//                 addMultipleCategories([
//                   "mobile-accessories",
//                   "smartphones",
//                   "tablets",
//                 ])
//               );
//               navigate("/category");
//             }}
//           >
//             <img className="rounded-xl" src={electronics} alt="electronics" />
//             <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
//               Electronics
//             </p>
//           </button>
//         </div>
//       </div>

//       <div
//         className=" flex flex-col items-end gap-4 p-12 w-[75%] h-[550px] bg-no-repeat bg-cover rounded-md"
//         style={{ backgroundImage: `url(${online_buisness})` }}
//       >
//         <h1 className="text-blue-500 text-3xl mb-2">Become a Reseller and</h1>
//         <h1 className="text-pink-800 text-5xl font-bold">
//           Start your Online Business
//         </h1>
//         <h1 className="text-pink-800 text-5xl font-bold">
//           with Zero Investment
//         </h1>
//         <div className="flex gap-3 mt-10">
//           <button
//             className="w-[180px] h-[48px]"
//             onClick={handleplayButtonClick}
//           >
//             <img
//               src={playstore}
//               alt="playstore"
//               className="w-full h-full rounded-md"
//             />
//           </button>
//           <button className="w-[180px] h-[48px]" onClick={handleAppButtonClick}>
//             <img
//               src={appstore}
//               alt="appstore"
//               className="w-full h-full rounded-md"
//             />
//           </button>
//         </div>
//       </div>

//       <div
//         className="flex flex-col items-start gap-5 p-12 w-[75%] h-[300px] bg-no-repeat bg-cover rounded-md text-white"
//         style={{ backgroundImage: `url(${supplier})` }}
//       >
//         <h1 className="text-4xl font-semibold">
//           Register as a Meesho Supplier
//         </h1>
//         <p className="text-lg">
//           Sell your products to crores of customers at 0% commission
//         </p>
//         <div className="flex w-[70%] text-lg font-bold">
//           <div className=" w-1/3 flex gap-2 items-center">
//             <p className="text-green-600">
//               <FaCheckCircle />
//             </p>
//             <p>Grow your Buisness</p>
//           </div>
//           <div className=" w-1/3 flex gap-2 items-center">
//             <p className="text-green-600">
//               <FaCheckCircle />
//             </p>
//             <p>Enjoy 100% profit</p>
//           </div>
//           <div className="w-1/3 flex gap-2 items-center">
//             <p className="text-green-600">
//               <FaCheckCircle />
//             </p>
//             <p>Sell all over India</p>
//           </div>
//         </div>
//         <button className="bg-white text-xl font-bold text-pink-800 w-[110px] rounded">
//           Sign up now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Categories;
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
import { useDispatch } from "react-redux";
import { addMultipleCategories } from "../../redux/filterSlice";
import { useNavigate } from "react-router-dom";

function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=96148644",
      "_blank"
    );
  };

  const handleAppButtonClick = () => {
    window.open(
      "https://apps.apple.com/us/app/meesho-online-shopping/id1457958492",
      "_blank"
    );
  };

  return (
    <div className="w-full flex flex-col items-center gap-5 md:gap-10 justify-center  p-2">
      <div className="flex justify-center">
        <h1 className="text-gray-600 text-xl md:text-2xl lg:text-4xl font-bold">
          Top Categories to choose from
        </h1>
      </div>

      <div
        className="flex  gap-5 justify-center items-end w-full md:w-11/12 lg:w-9/12  bg-no-repeat bg-cover rounded-md  p-5"
        style={{ backgroundImage: `url(${fashion_forward})` }}
      >
        <button
          onClick={() => {
            dispatch(
              addMultipleCategories([
                "womens-dresses",
                "womens-bags",
                "womens-jewellery",
                "beauty",
              ])
            );
            navigate("/category");
          }}
        >
          <img className="rounded-sm" src={women_store} alt="women_store" />
        </button>
        <button
          onClick={() => {
            dispatch(addMultipleCategories(["mens-shirts", "mens-watches"]));
            navigate("/category");
          }}
        >
          <img className="rounded-xl" src={mens_store} alt="mens_store" />
        </button>
        <button
          onClick={() => {
            dispatch(addMultipleCategories(["tops", "womens-shoes"]));
            navigate("/category");
          }}
        >
          <img className="rounded-xl" src={kids_store} alt="kids_store" />
        </button>
      </div>

      <div
        className=" hidden md:flex items-center justify-around gap-4 w-[75%]  md:w-11/12 lg:w-9/12 h-auto md:h-[550px] bg-no-repeat bg-cover rounded-md p-2"
        style={{ backgroundImage: `url(${essentials})` }}
      >
        <button
          className="w-[180px]"
          onClick={() => {
            dispatch(
              addMultipleCategories([
                "home-decoration",
                "kitchen-accessories",
                "skin-care",
              ])
            );
            navigate("/category");
          }}
        >
          <img src={view} alt="view" />
        </button>
        <div className="flex gap-4">
          <button
            className="flex flex-col justify-between gap-3"
            onClick={() => {
              dispatch(addMultipleCategories(["home-decoration"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={home_decor} alt="home_decor" />{" "}
            <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Home Decor
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3"
            onClick={() => {
              dispatch(addMultipleCategories(["kitchen-accessories"]));
              navigate("/category");
            }}
          >
            <img
              className="rounded-xl"
              src={kitchen_appliances}
              alt="kitchen_appliances"
            />{" "}
            <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Kitchen Appliances{" "}
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3"
            onClick={() => {
              dispatch(addMultipleCategories(["skin-care"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={health_care} alt="health_care" />
            <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Health Care
            </p>
          </button>
        </div>
      </div>

      <div
        className="hidden md:flex items-center justify-around gap-4 md:w-11/12 lg:w-9/12 h-auto md:h-[550px] w-[75%]  bg-no-repeat bg-cover rounded-md p-2 "
        style={{ backgroundImage: `url(${new_styles})` }}
      >
        <button
          className="w-[180px]"
          onClick={() => {
            dispatch(
              addMultipleCategories([
                "sunglasses",
                "womens-bags",
                "mens-shoes",
                "womens-shoes",
                "mobile-accessories",
                "smartphones",
                "tablets",
              ])
            );
            navigate("/category");
          }}
        >
          <img src={view} alt="view" />
        </button>
        <div className="flex gap-4">
          <button
            className="flex flex-col justify-between gap-3"
            onClick={() => {
              dispatch(addMultipleCategories(["sunglasses", "womens-bags"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={accessories} alt="accessories" />{" "}
            <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Accessories
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3"
            onClick={() => {
              dispatch(addMultipleCategories(["mens-shoes", "womens-shoes"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={footwares} alt="footwares" />{" "}
            <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Footwares
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3"
            onClick={() => {
              dispatch(
                addMultipleCategories([
                  "mobile-accessories",
                  "smartphones",
                  "tablets",
                ])
              );
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={electronics} alt="electronics" />
            <p className="text-xl w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl">
              Electronics
            </p>
          </button>
        </div>
      </div>
      {/* open below md */}
   
      <div
        className="md:hidden flex flex-col gap-5 justify-center items-center w-[100%]  bg-no-repeat bg-cover rounded-md bg-[#6e2b62]
      p-2"
      >
        <div className="flex justify-between w-[100%]">
          <button
            className="flex flex-col justify-between gap-3 w-[30%]"
            onClick={() => {
              dispatch(addMultipleCategories(["home-decoration"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={home_decor} alt="home_decor" />{" "}
            <p className="text-sm w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl ">
              Home Decor
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3 w-[30%]"
            onClick={() => {
              dispatch(addMultipleCategories(["kitchen-accessories"]));
              navigate("/category");
            }}
          >
            <img
              className="rounded-xl"
              src={kitchen_appliances}
              alt="kitchen_appliances"
            />{" "}
            <p className="text-sm w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl ">
              Kitchen
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3 w-[30%]"
            onClick={() => {
              dispatch(addMultipleCategories(["skin-care"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={health_care} alt="health_care" />
            <p className="text-sm w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl ">
              Health Care
            </p>
          </button>
        </div>
        <div className="flex justify-between p-2 w-[100%]">
          <button
            className="flex flex-col justify-between gap-3 w-[30%]"
            onClick={() => {
              dispatch(addMultipleCategories(["sunglasses", "womens-bags"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={accessories} alt="accessories" />{" "}
            <p className="text-sm w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl ">
              Accessories
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3 w-[30%]"
            onClick={() => {
              dispatch(addMultipleCategories(["mens-shoes", "womens-shoes"]));
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={footwares} alt="footwares" />{" "}
            <p className="text-sm w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl ">
              Footwares
            </p>
          </button>
          <button
            className="flex flex-col justify-between gap-3 w-[30%]"
            onClick={() => {
              dispatch(
                addMultipleCategories([
                  "mobile-accessories",
                  "smartphones",
                  "tablets",
                ])
              );
              navigate("/category");
            }}
          >
            <img className="rounded-xl" src={electronics} alt="electronics" />
            <p className="text-sm w-[100%] text-center p-2 text-pink-800 font-bold bg-pink-100 rounded-xl ">
              Electronics
            </p>
          </button>
        </div>
      </div>
      {/*  */}
      <div
        className="flex flex-col items-end gap-4 p-6 md:p-12 w-full md:w-11/12 lg:w-9/12 h-auto md:h-[550px] bg-no-repeat bg-cover rounded-md"
        style={{ backgroundImage: `url(${online_buisness})` }}
      >
        <h1 className="text-blue-500 text-2xl md:text-3xl mb-2">
          Become a Reseller and
        </h1>
        <h1 className="text-pink-800 text-2xl md:text-4xl lg:text-5xl font-bold">
          Start your Online Business
        </h1>
        <h1 className="text-pink-800 text-2xl md:text-4xl lg:text-5xl font-bold">
          with Zero Investment
        </h1>
        <div className="flex gap-3 mt-10">
          <button
            className="w-[120px] md:w-[180px] h-[36px] md:h-[48px]"
            onClick={handlePlayButtonClick}
          >
            <img
              src={playstore}
              alt="playstore"
              className="w-full h-full rounded-md"
            />
          </button>
          <button
            className="w-[120px] md:w-[180px] h-[36px] md:h-[48px]"
            onClick={handleAppButtonClick}
          >
            <img
              src={appstore}
              alt="appstore"
              className="w-full h-full rounded-md"
            />
          </button>
        </div>
      </div>

      <div
        className="flex flex-col items-start gap-5 p-6 md:p-12 w-full md:w-11/12 lg:w-9/12 h-auto md:h-[300px] bg-no-repeat bg-cover rounded-md text-white"
        style={{ backgroundImage: `url(${supplier})` }}
      >
        <h1 className="text-2xl md:text-4xl font-semibold">
          Register as a Meesho Supplier
        </h1>
        <p className="text-lg">
          Sell your products to crores of customers at 0% commission
        </p>
        <div className="flex flex-wrap w-full md:w-3/4 text-lg font-bold">
          <div className="w-full md:w-1/3 flex gap-2 items-center">
            <p className="text-green-600">
              <FaCheckCircle />
            </p>
            <p>Grow your Business</p>
          </div>
          <div className="w-full md:w-1/3 flex gap-2 items-center">
            <p className="text-green-600">
              <FaCheckCircle />
            </p>
            <p>Enjoy 100% profit</p>
          </div>
          <div className="w-full md:w-1/3 flex gap-2 items-center">
            <p className="text-green-600">
              <FaCheckCircle />
            </p>
            <p>Sell all over India</p>
          </div>
        </div>
        <button className="bg-white text-xl font-bold text-pink-800 w-[120px] md:w-[110px] rounded">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Categories;
