import React from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";

function Header() {
  return (
    <div className='bg-[#ffffff] w-[98%] flex flex-row items-center px-8 justify-between h-[80px] mt-5 rounded-xl'>
      <div className='text-left'>
        <p className='font-cairo text-[22px] text-[#202020] font-semibold'>Products</p>
        <p className='font-open text-[14px] text-[#878787] font-normal '>Manage Your Products</p>
      </div>
      <div className='flex flex-row items-center justify-center gap-6'>
        <div className='flex flex-row items-center justify-center gap-4'>
          <GoSun className='text-[#4F56D3] text-[15px] '/>
          <div className='bg-[#ECECEB] w-[55px] h-[30px] rounded-xl flex items-center justify-start'>
            <div className='rounded-full bg-[#4F56D3] w-[28px] h-[28px] cursor-pointer '></div>
          </div>
          <IoMoonOutline className='text-[#878787] text-[15px] ' />
        </div>
        <div className="w-px h-[30px] bg-[#C2C2C2]"></div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <TbWorld className='text-[#878787] text-[20px] '/>
          <IoMdNotificationsOutline className='text-[#878787] text-[20px] '/>
          <GoMail className='text-[#878787] text-[20px] '/>
          <GiSettingsKnobs className='text-[#878787] text-[20px] '/>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <div className='w-12 h-12 rounded-full bg-[#c4c4c4]'></div>
          <div className='flex flex-col items-center justify-center gap-0 font-cairo'>
            <p className='text-[#202020] font-bold text-[15px]'>Patricia Peter</p>
            <p className='text-[#878787] font-light text-[13px]'>Super Admin</p>
          </div>
          <FaAngleDown className='text-[#878787] text-[15px]'/>
        </div>
      </div>
    </div>
  )
}

export default Header