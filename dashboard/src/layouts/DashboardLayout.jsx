import React from "react";
import MainContent from "../pages/MainContent";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import StatusCards from "../components/StatusCards/StatusCards";

function DashboardLayout() {
  return (
    <div className="flex gap-7 ">
      <div className="w-[250px] bg-white shadow h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-4">
        <Header />
        <StatusCards />
        <div className="flex-1  w-[100%] rounded-xl ">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
