import React, { useState } from "react";
import UseHook from "../Hook/UseHook";
import Product from "../Product/Product";
import AllProductsCard from "./AllProductsCard";

const AllProducts = () => {
  const { products } = UseHook();
  const [searchText, setSearchText ] = useState("")
  const filteredProduct = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
  console.log(products);
  return (
    <div>
        <div className='flex justify-between items-center ml-18 mr-18'>
        <h1 className=' text-4xl font-bold my-8'>All <span className='text-[#FF6B00]'>Products</span></h1>
        <input type="search" 
        name="search"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
         className='bg-[#FFE0CC] h-10 w-64 px-4 rounded-2xl border border-orange-400 outline-none'
          placeholder='search your Crops'  id="" />

        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-5 ml-13 mr-13">
        {filteredProduct.map((products) => (
          <AllProductsCard products={products}></AllProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
