// import ProductContentLeft from "./ProductContentLeft";
// import ProductContentRight from "./ProductContentRight";

// const ProductContent = () => {
//   return (
//     <div className="w-[85%] container mx-auto py-6">
//       {/* title */}
//       <div className="w-full">
//         <h2 className="text-2xl font-medium">
//           Honda 33150-T2A-A81 Headlight Assembly, Driver Side
//         </h2>
//       </div>

//       {/* content */}
//       <div className="w-full flex justify-between gap-4 my-6">
//         {/* content left */}
//         <ProductContentLeft />
//         {/* content right */}
//         <ProductContentRight />
//       </div>
//     </div>
//   );
// };

// export default ProductContent;


import { useEffect, useState } from "react";
import ProductContentLeft from "./ProductContentLeft";
import ProductContentRight from "./ProductContentRight";
import { useParams, NavLink } from "react-router-dom";

const ProductContent = () => {
  const [productData, setProductData] = useState(null);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(`http://localhost:5001/product/${productId}`);
      const data = await response.json();
      setProductData(data);
      // console.log(data)
    };

    fetchProductData();
  }, [productId]);

  return (
    <div className="w-[85%] container mx-auto py-6">
      {/* title */}
      <div className="w-full">
        <h2 className="text-2xl font-medium">
          
          Honda {productData?.PartNumber} Headlight Assembly, Driver Side
        </h2>
      </div>

      {/* content */}
      <div className="w-full flex justify-between gap-4 my-6">
        {/* content left */}
        <ProductContentLeft productData={productData} />
        {/* content right */}
        <ProductContentRight productData={productData} />
      </div>
    </div>
  );
};

export default ProductContent;



