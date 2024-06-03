import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './spinner/Spinner';
import ProductCard from './ProductCard';
import { fetchProducts } from '../redux/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const selectedCategories = useSelector((state) => state.filters.selectedCategories);
  const sortOption = useSelector((state) => state.filters.sortOption);

  useEffect(() => {
    dispatch(fetchProducts({ categories: selectedCategories, sort: sortOption }));
  }, [dispatch, selectedCategories, sortOption]);

  useEffect(() => {
    console.log(data);  // Debugging line to check the fetched data
  }, [data]);

  return (
    <div className="w-full">
      {!loading ? (
        <div className="flex flex-wrap gap-6">
          {data.length > 0 ? (
            data.map((item, index) => <ProductCard key={index} data={item} />)
          ) : (
            <h1 className="text-2xl">Sorry, Results not found!</h1>
          )}
        </div>
      ) : (
        <div className="w-full">
          <Spinner initial={true} />
        </div>
      )}
    </div>
  );
}

export default ProductList;
