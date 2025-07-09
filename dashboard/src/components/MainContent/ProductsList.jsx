import React from "react";
import Product from "./Product";
import allProducts from "../../data/allProducts";

function ProductsList() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-row items-start justify-start  border-[#ececeb] border-b-2 w-[95%] pb-5 ">
        <div className="w-[250px] flex flex-row items-center justify-start gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            disabled
            checked={false}
            className="w-4 h-4 bg-[#ffffff]"
          />
          <p className="text-[#B2B3B9] text-sm font-bold font-cairo ">
            Product
          </p>
        </div>
        <div className="flex flex-row items-center justify-center ml-8 gap-5">
          <p className="w-[200px] text-[#B2B3B9] text-sm font-bold font-cairo  ">
            Transaction ID
          </p>
          <p className="w-[200px] text-[#B2B3B9] text-sm font-bold font-cairo ">
            Date
          </p>
          <p className="w-[200px] text-[#B2B3B9] text-sm font-bold font-cairo  ">
            Amount
          </p>
          <p className="w-[200px] text-[#B2B3B9] text-sm font-bold font-cairo ">
            Status
          </p>
        </div>
      </div>
      {allProducts.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductsList;
