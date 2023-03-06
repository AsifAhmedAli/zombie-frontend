import { NavLink } from "react-router-dom";
import RelatedParts from "./RelatedParts";

const ProductContentRight = ({ productData }) => {
  return (
    <div className="w-full">
      {/* upper content */}
      <div className="w-full flex gap-2">
        {/* left */}
        <div className="w-5/12">
          <span className="text-sm">
            Addtional informaion: We Can Provide further information hereLike
            Generic Partfitment, orDetailed information. <br className="mb-4" />{" "}
            This part number has beenUpdated by Honda to:{productData?.PartNumber}.This is
            the exact item and willfunction the same
            <br className="mb-4" />
            SImilar to an amazon Product Page
          </span>
        </div>
        {/* right */}
        <div className="w-7/12 bg-navbarColor text-white p-4">
          <h3 className="text-lg mb-4">Your Price : $179.44</h3>
          <p className="text-sm mb-4">Dealer Price : $279.44</p>
          <p className="text-sm mb-4">Total Savings : $69.78 (39% OFF)</p>
          <p className="text-sm">QTY : 1</p>

          <div className="my-4">
            <p className="text-sm">
              Shipping related information , if logged into an account or check
              shipping estimated If not logged in
            </p>
          </div>

          <div className="my-4">
            <p className="text-sm">
              We noticed that no VIN was used, please click here to insertVIN to
              confirm correct part fitment (Or similar message if no VIN is
              used)
            </p>
          </div>

          <div className="my-4">
            <p className="text-sm">
              <span className="text-red-600">
                <NavLink to="/">Click here</NavLink>
              </span>{" "}
              for Our Return Policy
            </p>
          </div>

          {/* button */}
          <div className="mb-4">
            <NavLink to="/">
              <button className="w-full bg-AddtoCart py-3">Add to Cart</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/">
              <button className="w-full bg-buyNow py-3">Buy Now</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div className="w-full mt-6 bg-white shadow-2xl p-4">
        <p className="font-medium text-lg">Related Parts</p>
        <RelatedParts />
      </div>
    </div>
  );
};

export default ProductContentRight;
