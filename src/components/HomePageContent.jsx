import React from "react";
import { Outlet } from "react-router-dom";
import PageLinks from "./PageLinks";

const HomePageContent = () => {
  return (
    <div className="w-full py-8">
      {/* page links */}
      <PageLinks />
      {/* content */}
      <div className="py-12 flex justify-between gap-10 container mx-auto w-[85%]">
        <div className="w-3/12 bg-navbarColor p-4">
          <h2 className="text-white text-xl">SEARCH BY VEHICLE</h2>

          <div className="mt-10">
            {/* select year */}
            <div className="bg-white px-4 py-2">
              <select className="bg-transparent cursor-pointer outline-none border-none w-full">
                <option>Select Year</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>

            {/* select make */}
            <div className="bg-white px-4 py-2 my-6">
              <select className="bg-transparent cursor-pointer outline-none border-none w-full">
                <option>Select Make</option>
                <option value="make1">make1</option>
                <option value="make2">make2</option>
                <option value="make3">make3</option>
                <option value="make4">make4</option>
                <option value="make5">make5</option>
                <option value="make6">make6</option>
                <option value="make7">make7</option>
                <option value="make8">make8</option>
              </select>
            </div>

            {/* select model */}
            <div className="bg-white px-4 py-2 my-6">
              <select className="bg-transparent cursor-pointer outline-none border-none w-full">
                <option>Select Model</option>
                <option value="Model 1">Model 1</option>
                <option value="Model 2">Model 2</option>
                <option value="Model 3">Model 3</option>
                <option value="Model 4">Model 4</option>
                <option value="Model 5">Model 5</option>
                <option value="Model 6">Model 6</option>
                <option value="Model 7">Model 7</option>
                <option value="Model 8">Model 8</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-9/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
