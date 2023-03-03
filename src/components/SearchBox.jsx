import React from "react";
import { NavLink } from "react-router-dom";

const SearchBox = () => {
  return (
    <div className="bg-sectionBg shadow w-full py-2">
      <div className="container w-[85%] mx-auto flex justify-between items-center">
        {/* left */}
        <div className="w-full flex items-center gap-6">
          <p className="text-[15px]">Honda Parts</p>
          <p> | </p>
          <p className="text-[15px]">Honda Accessories</p>
        </div>
        {/* center */}
        <div className="w-full">
          <div className="w-10/12 bg-white mx-auto flex items-center gap-2">
            <input
              type="text"
              className="w-full bg-transparent px-2 py-1 outline-none border-none placeholder:text-black placeholder:text-opacity-60 text-sm"
              placeholder="Search by Vin, Parts Number, or Description"
            />
            <span className="text-white bg-navbarColor py-1 px-2 cursor-pointer text-sm">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        {/* right */}
        <div className="w-full flex justify-end">
          <NavLink to="/cart">
            <div className="w-max bg-navbarColor text-white py-2 px-4 flex gap-2 items-center cursor-pointer rounded">
              <i className="fa-solid fa-cart-plus"></i>
              <span className="text-sm">My Cart</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
