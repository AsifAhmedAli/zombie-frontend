import ProductContentLeft from "./ProductContentLeft";
import ProductContentRight from "./ProductContentRight";

const ProductContent = () => {
  return (
    <div className="w-[85%] container mx-auto py-6">
      {/* title */}
      <div className="w-full">
        <h2 className="text-2xl font-medium">
          Honda 33150-T2A-A81 Headlight Assembly, Driver Side
        </h2>
      </div>

      {/* content */}
      <div className="w-full flex justify-between gap-4 my-6">
        {/* content left */}
        <ProductContentLeft />
        {/* content right */}
        <ProductContentRight />
      </div>
    </div>
  );
};

export default ProductContent;
