import Filter from "./Filter";
// import Relevance from "./Relevance";
import ProductList from "../../components/ProductList";
function SortingProducts() {
  return (
    <div className="w-[100%]  flex flex-col items-center my-8">
      <div className="w-[90%] ">
        <h1 className="text-3xl mb-6">Products for You</h1>
        <div className="w-full flex gap-5">
          <div>
            <Filter />
          </div>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default SortingProducts;
