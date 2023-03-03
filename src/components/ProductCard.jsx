import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartImage from "../assets/product1.png";

const ProductCard = ({ price }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full flex gap-8 items-center border-b border-b-white p-6">
      {/* img */}
      <div className="w-6/12">
        <img src={CartImage} alt="" />
      </div>

      {/* content */}
      <div className="flex items-center w-full">
        {/* content left */}
        <div className="w-full">
          <p className="text-[15px]">Part No : 33150-T2A-A81</p>
          <p className="text-[15px]">Headlite Assay, L.</p>

          <span className="my-3 block text-[15px]">
            Replaced by: 33150-T2A-A82
          </span>

          <p className="text-red-500 text-xs cursor-pointer">
            1-Year Limited Warranty
          </p>

          {/* qty box */}
          <div className="flex items-center text-sm gap-4 mt-3">
            <span>Qty</span>
            <input
              type="number"
              value={quantity}
              className="w-10 text-center border-none outline-none text-black"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <div className="flex gap-2">
              <span>
                {" "}
                <NavLink to="/">Remove</NavLink> |
              </span>
              <span>
                {" "}
                <NavLink to="/">Save for later</NavLink> |
              </span>
              <span>
                <NavLink to="/">Add to list</NavLink>
              </span>
            </div>
          </div>
        </div>
        {/* content right */}
        <div className="text-center w-4/12">
          <span className="text-center">${quantity * Math.floor(price)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
