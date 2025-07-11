import React from "react";
import MainContent from "../pages/MainContent";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import StatusCards from "../components/StatusCards/StatusCards";

function DashboardLayout() {
  return (
    <div className="flex gap-7 max-lg:gap-0  flex-row items-start justify-start ">
      <div className="max-xs:hidden w-[250px] max-md:w-[100px] bg-white shadow h-full">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-x-hidden">
        <Header />
        <StatusCards />
        <MainContent />
      </div>
    </div>
  );
}

export default DashboardLayout;
