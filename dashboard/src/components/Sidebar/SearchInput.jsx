import search from "../../assets/search.svg"

function SearchInput() {
  return (
    <div className="flex flex-row items-center justify-center gap-3 border-[2px] border-[#ececeb] rounded-md py-[10px] px-0 w-[200px] max-md:w-[45px] max-md:py-[10px] max-md:gap-0 max-md:bg-[#F5F5F5] ">
      <img src={search} alt="search icon" className="w-[20px] h-[20px] " />
      <input
        type="text"
        className="max-md:hidden border-none outline-none focus:outline-none font-cairo font-medium text-lg w-[140px] "
        placeholder="Search Here"
      />
    </div>
  );
}

export default SearchInput;
