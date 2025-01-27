function NavBar() {
  return (
    <div className="flex justify-around font-dorispp p-8">
      <div className="flex flex-1 justify-around text-lg lg:text-xl xl:text-2xl">
        <div className="cursor-pointer transition ease-in delay-50 duration-50 hover:text-[#f872a7]">
          Menu
        </div>
        <div className="cursor-pointer transition ease-in delay-50 duration-50 hover:text-[#f872a7]">
          Offer
        </div>
        <div className="cursor-pointer transition ease-in delay-50 duration-50 hover:text-[#f872a7]">
          Order Track
        </div>
      </div>
      <div className="flex-[0.5] text-center">
        <div className="sushi text-transparent transition-[background-position] duration-[275ms] ease-[ease] overflow-hidden bg-clip-text bg-[length:200%_100%] bg-[100%] hover:bg-[0_100%] cursor-pointer font-extrabold text-2xl lg:text-3xl xl:text-4xl w-fit m-auto">
          SUSHI
        </div>
      </div>
      <div className="flex-1 text-center">
        <input
          placeholder="Search"
          className="bg-transparent placeholder:text-black outline-none text-lg xl:text-xl border-b-[1px] border-black w-1/3 transition ease-in delay-50 duration-50 focus:border-[#f872a7]"
        />
      </div>
    </div>
  );
}

export default NavBar;
