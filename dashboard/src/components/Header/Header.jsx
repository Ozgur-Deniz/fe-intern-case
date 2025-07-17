import React, { useEffect, useState } from "react";
import shoppingBag from "../../assets/shopping-bag.svg";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <div className="bg-[#ffffff] dark:bg-[#00044a] 2xl:w-[98%] lg:w-[90%] max-lg:w-full  flex flex-row items-center px-8 justify-between max-lg:justify-end max-xs:justify-between h-[100px] max-lg:border-[#ececeb] dark:max-lg:border-[#1b1c66] max-lg:border-l-2 lg:h-[80px] lg:mt-5 lg:rounded-xl ">
      <div className="xs:hidden w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#161919] to-[#5B5C7A] ">
        <img className="w-[30px] h-[30px]" src={shoppingBag} alt="logo" />
      </div>
      <div className="max-lg:hidden text-left">
        <p className="font-cairo text-[22px] text-[#202020] dark:text-[#ffffff] font-semibold">
          Products
        </p>
        <p className="font-open text-[14px] text-[#878787] font-normal ">
          Manage Your Products
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-6 max-xl:gap-1">
        <div className="flex max-lg:hidden flex-row items-center justify-center gap-4">
          <GoSun className="text-[#4F56D3] dark:text-[#878787] text-[15px] " />
          <div
            className="bg-[#ECECEB] dark:bg-[#212c53] w-[55px] h-[30px] rounded-xl flex items-center"
            onClick={() => setTheme(!theme)}
          >
            <div
              className={`rounded-full bg-[#4F56D3] w-[28px] h-[28px] cursor-pointer transform transition-transform duration-500 ease-in-out ${
                theme ? "translate-x-[24px]" : "translate-x-0"
              }`}
            ></div>
          </div>
          <IoMoonOutline className="text-[#878787] dark:text-[#4F56D3] text-[15px] " />
        </div>
        <div className="max-lg:hidden w-px h-[30px] bg-[#C2C2C2]"></div>
        <div className="flex max-lg:hidden flex-row items-center justify-center gap-4">
          <TbWorld className="text-[#878787] text-[20px] " />
          <IoMdNotificationsOutline className="text-[#878787] text-[20px] " />
          <GoMail className="text-[#878787] text-[20px] " />
          <GiSettingsKnobs className="text-[#878787] text-[20px] " />
        </div>
        <div className="max-xs:hidden flex flex-row items-center justify-center gap-4 max-xl:gap-1 max-lg:gap-3">
          <div className="w-12 h-12 rounded-full bg-[#c4c4c4]"></div>
          <div className="flex flex-col items-start justify-center gap-0 font-cairo">
            <p className="text-[#202020] dark:text-[#ffffff] font-bold text-[15px]">
              Patricia Peter
            </p>
            <p className="text-[#878787] font-light text-[13px]">Super Admin</p>
          </div>
          <FaAngleDown className="text-[#878787] text-[15px]" />
        </div>
        <IoMdMenu className="hidden max-lg:block max-lg:ml-5 text-[30px] text-[#3F4059]" />
      </div>
    </div>
  );
}

export default Header;
