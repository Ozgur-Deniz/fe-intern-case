import { IoMdMenu } from "react-icons/io";
import shoppingBag from '../../assets/shopping-bag.svg';

function SidebarHeader() {
  return (
    <div className="flex flex-row items-center justify-evenly max-lg:justify-start w-full h-[100px] border-[#ececeb] dark:border-[#1b1c66] border-b-2">
      <div className="flex flex-row items-center justify-start gap-2 min-w-[160px] max-lg:ml-5">
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#161919] to-[#5B5C7A] ">
          <img
            className="w-[30px] h-[30px]"
            src={shoppingBag}
            alt="logo"
          />
        </div>
        <div className="max-md:hidden font-cairo flex flex-col items-start justify-center gap-0">
          <p className="text-[#161919] dark:text-[#ffffff] font-bold text-lg leading-none">
            master
          </p>
          <p className="text-[#4F56D3] font-bold text-xl leading-none">POS</p>
        </div>
      </div>
      <IoMdMenu className="max-lg:hidden text-[30px] text-[#3F4059] dark:text-white " />
    </div>
  );
}

export default SidebarHeader;
