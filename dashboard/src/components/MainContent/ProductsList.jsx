import React from "react";
import Product from "./Product";
import allProducts from "../../data/allProducts";

function ProductsList() {
  return (
    <div className="flex flex-col gap-4 w-[90%] pl-4 md:pl-0">
      <div className="grid grid-cols-[250px_200px_150px_150px_200px_100px] border-b-2 border-[#ececeb] pb-5 w-[92%] max-xl:w-full ">
        <div className="flex items-center gap-2">
          <input type="checkbox" disabled checked={false} className="w-4 h-4" />
          <p className="text-[#B2B3B9] text-sm font-bold font-cairo">Product</p>
        </div>
        <p className="text-[#B2B3B9] text-sm font-bold font-cairo">Transaction ID</p>
        <p className="text-[#B2B3B9] text-sm font-bold font-cairo">Date</p>
        <p className="text-[#B2B3B9] text-sm font-bold font-cairo">Amount</p>
        <p className="text-[#B2B3B9] text-sm font-bold font-cairo">Status</p>
        <div></div> 
      </div>
      <div className="flex flex-col gap-4">
        {allProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
