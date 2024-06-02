import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import {
  toggleCategory,
  clearAllCategories,
  setSortOption,
  toggleRatings,
  togglePrices,
} from "../../redux/filterSlice";

function Filter() {
  const [isRatingsOpen, setIsRatingsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPricesOpen, setIsPricesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const sortOption = useSelector((state) => state.filters.sortOption) || ""

  const selectedCategories =
    useSelector((state) => state.filters.selectedCategories) || [];

  const selectedRatings =
    useSelector((state) => state.filters.selectedRatings) || [];

  const selectedPrices =
    useSelector((state) => state.filters.selectedPrices) || [];
  const options = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  const toggleCheckbox = (option) => {
    dispatch(toggleCategory(option));
  };

  const clearAll = () => {
    dispatch(clearAllCategories());
  };

  const filteredOptions = options
    .filter((option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aSelected = selectedCategories.includes(a);
      const bSelected = selectedCategories.includes(b);
      if (aSelected === bSelected) {
        return a.localeCompare(b);
      }
      return aSelected ? -1 : 1;
    });

  const ratingOptions = ["4 and above", "3.5 and above", "3 and above"].sort(
    (a, b) => {
      const aSelected = selectedRatings.includes(a);
      const bSelected = selectedRatings.includes(b);
      if (aSelected === bSelected) {
        return a.localeCompare(b);
      }
      return aSelected ? -1 : 1;
    }
  );

  const pricesOptions = ["below 150", "below 300", "below 500"].sort((a, b) => {
    const aSelected = selectedPrices.includes(a);
    const bSelected = selectedPrices.includes(b);
    if (aSelected === bSelected) {
      return a.localeCompare(b);
    }
    return aSelected ? -1 : 1;
  });

  const hasSelectedFilters =
    selectedCategories.length > 0 ||
    selectedRatings.length > 0 ||
    selectedPrices.length > 0;


  const handleSortChange = (option) => {
    dispatch(setSortOption(option));
    setIsOpen(false);
  };
  return (
    <div>
      <div className="flex flex-col items-center w-[300px] rounded text-[#353543] mb-2">
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="w-full flex justify-between p-3 items-center border-2 border-transperent active:border-gray-500 duration-300 rounded"
        >
          <div>
            <span className="text-gray-400">Sort by : </span>
            <span className="text-black font-medium">{sortOption}</span>
          </div>
          <div className="text-2xl">
            {!isOpen ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
        </button>

        {isOpen && (
          <div className="flex flex-col border-2 items-start rounded mt-1 w-full font-medium">
            <button
              className={`p-3 w-full text-start text-gray-500 ${
                sortOption === "Relevance"
                  ? "bg-pink-100"
                  : "hover:bg-[#F8F8FF]"
              }`}
              onClick={() => handleSortChange("Relevance")}
            >
              Relevance
            </button>
            <button
              className={`p-3 w-full text-start text-gray-500 ${
                sortOption === "New Arrival"
                  ? "bg-pink-100"
                  : "hover:bg-[#F8F8FF]"
              }`}
              onClick={() => handleSortChange("New Arrival")}
            >
              New Arrival
            </button>
            <button
              className={`p-3 w-full text-start text-gray-500 ${
                sortOption === "Price(High to low)"
                  ? "bg-pink-100"
                  : "hover:bg-[#F8F8FF]"
              }`}
              onClick={() => handleSortChange("Price(High to low)")}
            >
              Price(High to low)
            </button>
            <button
              className={`p-3 w-full text-start text-gray-500 ${
                sortOption === "Price (Low to high)"
                  ? "bg-pink-100"
                  : "hover:bg-[#F8F8FF]"
              }`}
              onClick={() => handleSortChange("Price (Low to high)")}
            >
              Price (Low to high)
            </button>
            <button
              className={`p-3 w-full text-start text-gray-500 ${
                sortOption === "Ratings" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
              }`}
              onClick={() => handleSortChange("Ratings")}
            >
              Ratings
            </button>
            <button
              className={`p-3 w-full text-start text-gray-500 ${
                sortOption === "Discount" ? "bg-pink-100" : "hover:bg-[#F8F8FF]"
              }`}
              onClick={() => handleSortChange("Discount")}
            >
              Discount
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-start p-1 w-[300px] border-2 rounded my-2">
        <div className="w-full flex justify-between p-2">
          <div>
            <p className="font-medium text-lg">FILTERS</p>
            <small>1000+ Products</small>
          </div>
          {hasSelectedFilters && (
            <div>
              <button onClick={clearAll} className="font-bold text-[#9F2089]">
                CLEAR ALL
              </button>
            </div>
          )}
        </div>

        <hr className="m-4 w-[90%] border border-gray-300" />
        <div className="relative flex flex-col items-start p-1 w-full rounded text-[#353543]">
          <button
            onClick={() => setIsCategoryOpen((prev) => !prev)}
            className="w-full flex justify-between items-center"
          >
            <div>
              <span className="text-black text-lg font-medium">Category</span>
            </div>
            <div className="text-2xl">
              {!isCategoryOpen ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </div>
          </button>

          {isCategoryOpen && (
            <div className="w-full">
              <div className="flex items-center justify-between border border-gray-300 rounded-md my-1">
                <div className="text-xl text-gray-300 p-2">
                  <FiSearch />
                </div>
                <div className="w-[90%] ">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full mb-2 outline-none"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 items-start rounded font-medium">
                {filteredOptions.map((option) => (
                  <label
                    key={option}
                    className="p-1 w-full rounded-xl flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(option)}
                      onChange={() => toggleCheckbox(option)}
                      className="h-4 w-4 border-2 border-gray-300 rounded checked:bg-green-500 focus:ring-0"
                    />
                    <span
                      className={`${
                        selectedCategories.includes(option)
                          ? "font-bold text-black"
                          : "font-medium text-gray-500"
                      }`}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <hr className="m-4 w-[90%] border border-gray-300" />
        <div className="relative flex flex-col items-center w-full rounded text-[#353543]">
          <button
            onClick={() => setIsPricesOpen((prev) => !prev)}
            className="w-full flex justify-between p-1 items-center"
          >
            <div>
              <span className="text-black text-lg font-medium">Prices</span>
            </div>
            <div className="text-2xl">
              {!isPricesOpen ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </div>
          </button>

          {isPricesOpen && (
            <div className="flex flex-wrap w-full  gap-4 justify-start mt-1 font-medium">
              {pricesOptions.map((prices) => (
                <button
                  key={prices}
                  onClick={() => dispatch(togglePrices(prices))}
                  className={`p-1 px-2 border-2 rounded-xl text-center ${
                    selectedPrices.includes(prices)
                      ? "bg-pink-500 text-white font-bold"
                      : "text-gray-500 hover:bg-[#F8F8FF]"
                  }`}
                >
                  {prices}
                </button>
              ))}
            </div>
          )}
        </div>

        <hr className="m-4 w-[90%] border border-gray-300" />
        <div className="relative flex flex-col items-center w-full rounded text-[#353543]">
          <button
            onClick={() => setIsRatingsOpen((prev) => !prev)}
            className="w-full flex justify-between p-1 items-center"
          >
            <div>
              <span className="text-black text-lg font-medium">Ratings</span>
            </div>
            <div className="text-2xl">
              {!isRatingsOpen ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </div>
          </button>

          {isRatingsOpen && (
            <div className="flex flex-wrap w-full  gap-4 justify-start mt-1 font-medium">
              {ratingOptions.map((rating) => (
                <button
                  key={rating}
                  onClick={() => dispatch(toggleRatings(rating))}
                  className={`p-1 px-2 border-2 rounded-xl text-center ${
                    selectedRatings.includes(rating)
                      ? "bg-pink-500 text-white font-bold"
                      : "text-gray-500 hover:bg-[#F8F8FF]"
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;