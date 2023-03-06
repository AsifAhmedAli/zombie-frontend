// import React from "react";
// import { NavLink } from "react-router-dom";

// const SearchBox = () => {
//   return (
//     <div className="bg-sectionBg shadow w-full py-2">
//       <div className="container w-[85%] mx-auto flex justify-between items-center">
//         {/* left */}
//         <div className="w-full flex items-center gap-6">
//           <p className="text-[15px]">Honda Parts</p>
//           <p> | </p>
//           <p className="text-[15px]">Honda Accessories</p>
//         </div>
//         {/* center */}
//         <div className="w-full">
//           <div className="w-10/12 bg-white mx-auto flex items-center gap-2">
//             <input
//               type="text"
//               className="w-full bg-transparent px-2 py-1 outline-none border-none placeholder:text-black placeholder:text-opacity-60 text-sm"
//               placeholder="Search by Vin, Parts Number, or Description"
//             />
//             <span className="text-white bg-navbarColor py-1 px-2 cursor-pointer text-sm">
//               <i className="fa-solid fa-magnifying-glass"></i>
//             </span>
//           </div>
//         </div>
//         {/* right */}
//         <div className="w-full flex justify-end">
//           <NavLink to="/cart">
//             <div className="w-max bg-navbarColor text-white py-2 px-4 flex gap-2 items-center cursor-pointer rounded">
//               <i className="fa-solid fa-cart-plus"></i>
//               <span className="text-sm">My Cart</span>
//             </div>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchParam = searchParams.get("searchParam");

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5001/search?searchParam=${searchTerm}`
      );
      setSearchResults(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span
              className="text-white bg-navbarColor py-1 px-2 cursor-pointer text-sm"
              onClick={handleSearch}
            >
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
      {loading && (
        <div className="w-full py-4 flex justify-center">
          <i className="fa-solid fa-spinner fa-spin"></i>
        </div>
      )}
      {searchResults.length > 0 && (
        <div className="container mx-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr className="text-left text-sm">
                <th className="p-2 ">Honda Code / VIN</th>
                <th className="p-2">Part Number</th>
                <th className="p-2">Description</th>
                <th className="p-2">Dealer Net Price Amount</th>
                <th className="p-2">Suggested Retail Price Amount</th>
                <th className="p-2">Part Number Stripped</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result) => (
                <tr
                  key={result.ID}
                  className="border-b hover:bg-gray-100 text-sm"
                >
                  <td className="p-2">{result.HondaCode}</td>
                  <td className="p-2">{result.PartNumber}</td>
                  <td className="p-2">{result.PartDescription}</td>
                  <td className="p-2">{result.MostForwardSupersession}</td>
                  <td className="p-2">{result.SuggestedRetailPriceAmount}</td>
                  <td className="p-2">{result.PartNumberStripped}</td>
                  <td className="p-2">
                    <Link to={`/product/${result.ID}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <ul>
            {searchResults.map((result) => (
              <li key={result.ID}>{result.PartDescription}</li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
