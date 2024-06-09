
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "./Skeleton";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../redux/productSlice";

function ProductList() {
  const dispatch = useDispatch(); // Initializing dispatch function from Redux
  const { data, loading } = useSelector((state) => state.products); // Extracting data and loading state from Redux store
  const selectedCategories = useSelector((state) => state.filters.selectedCategories); // Extracting selected categories from Redux store
  const sortOption = useSelector((state) => state.filters.sortOption); // Extracting sort option from Redux store
  const searchQuery = useSelector((state) => state.filters.searchQuery); // Extracting search query from Redux store

  const selectedPrices = useSelector((state) => state.filters.selectedPrices); // Extracting selected prices from Redux store
  const selectedRatings = useSelector((state) => state.filters.selectedRatings); // Extracting selected ratings from Redux store

  // Fetching products based on selected filters when component mounts or filters change
  useEffect(() => {
    dispatch(fetchProducts({ categories: selectedCategories, sort: sortOption, searchQuery, price: selectedPrices, ratings: selectedRatings }));
  }, [dispatch, selectedCategories, sortOption, searchQuery, selectedPrices, selectedRatings]);

  // Logging fetched data for debugging purposes
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="flex justify-center w-full items-center flex-wrap ">
      {!loading ? (
        <div className="flex justify-center md:justify-start flex-wrap gap-2 md:gap-6 w-full">
          {data?.length > 0 ? (
            data?.map((item, index) => <ProductCard key={index} data={item} />)
          ) : (
            <div className="flex justify-center w-full">
              <h1 className="text-2xl  text-gray-500">
              <div className="hidden xl-block">  ------------------------------------- Sorry, Results not found!
              -------------------------------------</div>
              <div className="xl-hidden">   Sorry, Results not found!
              </div>
              </h1>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex justify-center flex-wrap">
          <SkeletonLoader />
        </div>
      )}
    </div>
  );
}

export default ProductList;

