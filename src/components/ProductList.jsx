// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import SkeletonLoader from './Skeleton';
// import ProductCard from './ProductCard';
// import { fetchProducts } from '../redux/productSlice';

// function ProductList() {
//   const dispatch = useDispatch();
//   const { data, loading } = useSelector((state) => state.products);
//   const selectedCategories = useSelector((state) => state.filters.selectedCategories);

//   useEffect(() => {
//     dispatch(fetchProducts(selectedCategories));
//   }, [dispatch, selectedCategories]);

//   return (
//     <div className="flex justify-center w-full items-center flex-wrap ">
//       {!loading ? (
//         <div className="flex  flex-wrap gap-6 w-full">
//           {data?.length > 0 ? (
//             data?.map((item, index) => <ProductCard key={index} data={item} />)
//           ) : (
//             <div className='flex justify-center w-full'><h1 className="text-2xl  text-gray-500">------------------------------------- Sorry, Results not found! -------------------------------------</h1></div>

//           )}
//         </div>
//       ) : (
//         <div className="w-full flex justify-center flex-wrap">
//           <SkeletonLoader  />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "./Skeleton";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../redux/productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const selectedCategories = useSelector(
    (state) => state.filters.selectedCategories
  );
    const sortOption = useSelector((state) => state.filters.sortOption);

  useEffect(() => {
    dispatch(
      fetchProducts({ categories: selectedCategories, sort: sortOption })
    );
  }, [dispatch, selectedCategories, sortOption]);

  useEffect(() => {
    console.log(data); // Debugging line to check the fetched data
  }, [data]);
  return (
    <div className="flex justify-center w-full items-center flex-wrap ">
      {!loading ? (
        <div className="flex  flex-wrap gap-6 w-full">
          {data?.length > 0 ? (
            data?.map((item, index) => <ProductCard key={index} data={item} />)
          ) : (
            <div className="flex justify-center w-full">
              <h1 className="text-2xl  text-gray-500">
                ------------------------------------- Sorry, Results not found!
                -------------------------------------
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

