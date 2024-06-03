

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons/md";
// import { setSortOption } from "../../redux/filterSlice";

// function ProductPage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();
//   const sortOption = useSelector((state) => state.filters.sortOption);

//   const handleSortChange = (option) => {
//     dispatch(setSortOption(option));
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative flex flex-col items-center w-[300px] rounded text-[#353543] mb-2">
//       <button
//         onClick={() => {
//           setIsOpen((prev) => !prev);
//         }}
//         className="w-full flex justify-between p-3 items-center border-2 border-transperent active:border-gray-500 duration-300 rounded"
//       >
//         <div>
//           <span className="text-gray-400">Sort by : </span>
//           <span className="text-black font-medium">{sortOption}</span>
//         </div>
//         <div className="text-2xl">
//           {!isOpen ? (
//             <MdOutlineKeyboardArrowDown />
//           ) : (
//             <MdOutlineKeyboardArrowUp />
//           )}
//         </div>
//       </button>

//       {isOpen && (
//         <div className="flex flex-col border-2 items-start rounded mt-1 w-full font-medium">
//           <button
//             className={`p-3 w-full text-start text-gray-500 ${
//               sortOption === "Relevance" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
//             }`}
//             onClick={() => handleSortChange("Relevance")}
//           >
//             Relevance
//           </button>
//           <button
//             className={`p-3 w-full text-start text-gray-500 ${
//               sortOption === "New Arrival" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
//             }`}
//             onClick={() => handleSortChange("New Arrival")}
//           >
//             New Arrival
//           </button>
//           <button
//             className={`p-3 w-full text-start text-gray-500 ${
//               sortOption === "Price(High to low)" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
//             }`}
//             onClick={() => handleSortChange("Price(High to low)")}
//           >
//             Price(High to low)
//           </button>
//           <button
//             className={`p-3 w-full text-start text-gray-500 ${
//               sortOption === "Price (Low to high)" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
//             }`}
//             onClick={() => handleSortChange("Price (Low to high)")}
//           >
//             Price (Low to high)
//           </button>
//           <button
//             className={`p-3 w-full text-start text-gray-500 ${
//               sortOption === "Ratings" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
//             }`}
//             onClick={() => handleSortChange("Ratings")}
//           >
//             Ratings
//           </button>
//           <button
//             className={`p-3 w-full text-start text-gray-500 ${
//               sortOption === "Discount" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
//             }`}
//             onClick={() => handleSortChange("Discount")}
//           >
//             Discount
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductPage;
