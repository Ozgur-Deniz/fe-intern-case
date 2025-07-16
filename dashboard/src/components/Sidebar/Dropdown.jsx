import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

function Dropdown({ item }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const Icon = item.icon;
  const { id, label, children } = item;
  return (
    <div
      className={`flex flex-col gap-6 items-start justify-start w-[90%] ${
        openDropdown && "bg-[#f5f5f5]"
      } rounded-md`}
    >
      <div
        key={id}
        className={`w-full flex flex-row items-center justify-start gap-3 max-md:gap-0 overflow-visible pl-2 cursor-pointer text-[#878787] hover:text-[#4f56d3] transition-all duration-500 ease-in-out ${
          openDropdown &&
          "bg-[#4f56d3] py-3 rounded-md text-[#CDFF65] hover:text-[#CDFF65]"
        } `}
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <Icon className="w-6 h-6  aspect-square" />
        <p className="max-md:hidden font-open text-[15px]">{label}</p>
        {openDropdown ? (
          <FaAngleUp className="ml-10 max-md:ml-3" />
        ) : (
          <FaAngleDown className="ml-10 max-md:ml-3" />
        )}
      </div>
      {openDropdown &&
        children.map((child) => {
          const Icon = child.icon;
          const { id, label } = child;
          return (
            <div
              key={id}
              className="w-full flex flex-row items-start justify-start gap-3 overflow-visible pl-2 cursor-pointer text-[#878787] hover:text-[#4f56d3] pb-2"
            >
              <Icon className="w-6 h-6  aspect-square" />
              <p className="max-md:hidden font-open text-[15px]">{label}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Dropdown;
