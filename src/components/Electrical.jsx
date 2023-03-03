import { NavLink } from "react-router-dom";
import Category1 from "../assets/category1.png";
import Category2 from "../assets/category2.png";
import Category3 from "../assets/category3.png";
import Category4 from "../assets/category4.png";
import Category5 from "../assets/category5.png";
import Category6 from "../assets/category6.png";

const Electrical = () => {
  return (
    <div>
      <h1 className="text-2xl">SHOP POPULAR CATEGORIES - ELECTRICAL</h1>

      {/* category photo */}
      <div className="w-full mt-12 grid grid-cols-3 gap-y-6">
        <div className="flex flex-col justify-center items-center">
          <img src={Category1} alt="" />
          <NavLink to="/" className="mt-4">
            <button className="bg-navbarColor text-white px-4 py-2 text-sm">
              Category One
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Category2} alt="" />
          <NavLink to="/" className="mt-4">
            <button className="bg-navbarColor text-white px-4 py-2 text-sm">
              Category Two
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Category3} alt="" width={120} />
          <NavLink to="/" className="mt-4">
            <button className="bg-navbarColor text-white px-4 py-2 text-sm">
              Category Three
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Category4} alt="" />
          <NavLink to="/" className="mt-4">
            <button className="bg-navbarColor text-white px-4 py-2 text-sm">
              Category Four
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Category5} alt="" />
          <NavLink to="/" className="mt-4">
            <button className="bg-navbarColor text-white px-4 py-2 text-sm">
              Category Five
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Category6} alt="" />
          <NavLink to="/" className="mt-4">
            <button className="bg-navbarColor text-white px-4 py-2 text-sm">
              Category Six
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Electrical;
