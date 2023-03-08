import productView1 from "../assets/productDetails.png";
import productView2 from "../assets/productDetails2.png";
import productView3 from "../assets/productDetails3.png";
import productViewMain from "../assets/productDetailsMain.png";
import ProductDetailsTable from "./ProductDetailsTable";

const ProductContentLeft = ({ productData }) => {
  return (
    <div className="w-full">
      {/* image div */}
      <div className="w-full flex">
        {/* img left */}
        <div className="w-3/12">
          <img
            src={productView1}
            alt=""
            className="mb-4 border border-gray-300 cursor-pointer p-2"
          />
          <img
            src={productView2}
            alt=""
            className="mb-4 border border-gray-300 cursor-pointer p-2"
          />
          <img
            src={productView3}
            alt=""
            className="border border-gray-300 cursor-pointer p-2"
          />
        </div>

        {/* img right */}
        <div className="w-full border border-gray-300">
          <img src={productViewMain} alt="" className="w-full" />
        </div>
      </div>

      {/* product info */}
      <div className="w-full my-6">
        <p className="text-lg font-medium">
          {productData?.PartNumber} {productData?.PartDescription} is Ref No. 11 in the
          diagram above
        </p>
      </div>

      {/* product info Table */}
      <div className="w-full bg-white shadow-2xl p-4">
        {/* heading */}
        <div className="w-full mb-4">
          <p className="font-medium">Product Specifications</p>
        </div>

        {/* table row */}
        <ProductDetailsTable />
      </div>
    </div>
  );
};

export default ProductContentLeft;
