
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoader from './Skeleton';
import ProductCard from './ProductCard';
import { fetchProducts } from '../redux/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const selectedCategories = useSelector((state) => state.filters.selectedCategories);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategories));
  }, [dispatch, selectedCategories]);

  return (
    <div className="w-full">
      {!loading ? (
        <div className="flex flex-wrap gap-6">
          {data?.length > 0 ? (
            data?.map((item, index) => <ProductCard key={index} data={item} />)
          ) : (
            <h1 className="text-2xl">Sorry, Results not found!</h1>
          )}
        </div>
      ) : (
        <div className="w-full">
          <SkeletonLoader  />
        </div>
      )}
    </div>
  );
}

export default ProductList;


