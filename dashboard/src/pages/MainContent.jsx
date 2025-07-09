import React from "react";
import SearchContent from "../components/MainContent/SearchContent";
import MainContentBtns from "../components/MainContent/mainContentBtns";
import ProductsList from "../components/MainContent/ProductsList";
import PagesBtns from "../components/MainContent/PagesBtns";

function MainContent() {
  return (
    <div className="bg-[#ffffff] flex flex-col items-center justify-center gap-5 w-[98%]">
      <div className="flex flex-row items-center justify-between p-5 w-full">
        <p className="font-cairo font-bold text-[#333333] text-[18px] ">
          All Products
        </p>
        <div className="flex flex-row items-center justify-center gap-2">
          <SearchContent />
          <MainContentBtns />
        </div>
      </div>
      <ProductsList />
      <div className="w-full p-6 flex flex-row items-center justify-between">
        <p className="text-[#969b9f] text-base ">
          Showing <span className="text-[#333333] font-normal font-open ">1-12</span> from{" "}
          <span className="text-[#333333] ">100</span> data
        </p>
        <PagesBtns />
      </div>
    </div>
  );
}

export default MainContent;
