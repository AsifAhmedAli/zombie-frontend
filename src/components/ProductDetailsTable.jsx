// import { NavLink } from "react-router-dom";
// import TableContentRow from "./TableContentRow";

// const ProductDetailsTable = () => {
//   return (
//     <div className="w-full">
//       <TableContentRow leftTitle="Brand" rightTitle="Genuine Honda" />
//       <TableContentRow
//         leftTitle="Manufacturer Part Number"
//         rightTitle="33150.T28-A81"
//       />
//       <TableContentRow
//         leftTitle="Part Description"
//         rightTitle="Composte Assembly"
//       />
//       <TableContentRow leftTitle="Other Names" rightTitle="Headlamp Assembly" />
//       <TableContentRow
//         leftTitle="Item Dimensions"
//         rightTitle="35.7 x 19.6 x 12.1 inches"
//       />
//       <TableContentRow leftTitle="Item Weigh" rightTitle="13.80 Pounds" />
//       <TableContentRow leftTitle="Position" rightTitle="Driver Side" />
//       <TableContentRow leftTitle="Condition " rightTitle="New" />
//       <TableContentRow
//         leftTitle="Fitment Type"
//         rightTitle="Direct Replacement"
//       />
//       <TableContentRow leftTitle="Manutacturer" rightTitle="Honda" />
//       <TableContentRow leftTitle="SKU" rightTitle="33150.T28-A81" />
//       <div className="w-full flex border border-b-0 text-sm">
//         <div className="w-4/12 p-2 bg-sectionBg">
//           <span>Warranty</span>
//         </div>
//         <div className="w-8/12 p-2">
//           <span>
//             This genuine Honda parts guaranteed by Hondas factory warranty. For
//             more information,{" "}
//             <span className="text-navbarColor underline">
//               <NavLink to="/">please see our Honda Warranty Page</NavLink>
//             </span>
//           </span>
//         </div>
//       </div>
//       <div className="w-full flex border text-sm">
//         <div className="w-4/12 p-2 bg-sectionBg">
//           <span>Shipping & Return</span>
//         </div>
//         <div className="w-8/12 p-2">
//           <span className="underline mr-8">
//             <NavLink to="/">Shipping Policy</NavLink>
//           </span>

//           <span className="underline mr-8">
//             <NavLink to="/">Return Policy</NavLink>
//           </span>
//         </div>
//       </div>

//       {/* warning */}
//       <div className="mt-4">
//         <p className="text-sm">
//           <span className="text-navbarColor font-semibold">Warning:</span>{" "}
//           Calfornia's Proposiion 65
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import TableContentRow from "./TableContentRow";

const ProductDetailsTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/product/${productId}`
        );
        setProduct(response.data);
        // console.log(response)
        // console.log(response.data)

        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  
    return (
      <div className="w-full">
        <TableContentRow leftTitle="Brand" rightTitle="Genuine Honda" />
        <TableContentRow
          leftTitle="Manufacturer Part Number"
          rightTitle={product.PartNumber}
        />
        <TableContentRow
          leftTitle="Part Description"
          rightTitle={product.PartDescription}
        />
        <TableContentRow leftTitle="Other Names" rightTitle="" />
        <TableContentRow
          leftTitle="Item Dimensions"
          rightTitle={`${product.Height} * ${product.Length} * ${product.Width} inches`}
        />
<TableContentRow leftTitle="Item Weight" rightTitle={`${parseFloat(product.Weight).toFixed()} pounds`} />
        <TableContentRow leftTitle="Position" rightTitle="Driver Side" />
        <TableContentRow leftTitle="Condition " rightTitle="New" />
        <TableContentRow
          leftTitle="Fitment Type"
          rightTitle="Direct Replacement"
        />
        <TableContentRow leftTitle="Manutacturer" rightTitle="Honda" />
        <TableContentRow
          leftTitle="SKU"
          rightTitle={product.PartNumber}
        />
        <div className="w-full flex border border-b-0 text-sm">
          <div className="w-4/12 p-2 bg-sectionBg">
            <span>Warranty</span>
          </div>
          <div className="w-8/12 p-2">
            <span>
              This genuine Honda parts guaranteed by Honda's factory warranty.
              For more information,{" "}
              <span className="text-navbarColor underline">
                <NavLink to="/">please see our Honda Warranty Page</NavLink>
              </span>
            </span>
          </div>
        </div>
        <div className="w-full flex border text-sm">
          <div className="w-4/12 p-2 bg-sectionBg">
            <span>Shipping & Return</span>
          </div>
          <div className="w-8/12 p-2">
            <span className="underline mr-8">
              <NavLink to="/">Shipping Policy</NavLink>
            </span>

            <span className="underline mr-8">
              <NavLink to="/">Return Policy</NavLink>
            </span>
          </div>
        </div>

        {/* warning */}
        <div className="mt-4">
          <p className="text-sm">
            <span className="text-navbarColor font-semibold">Warning:</span>{" "}
            Calfornia's Proposiion 65
          </p>
        </div>
      </div>
    );
};

export default ProductDetailsTable;
