import React from "react";
import { NavLink } from "react-router-dom";

const PageLinks = () => {
  return (
    <div className="w-full flex items-center justify-center gap-6">
      <NavLink
        to="/"
        className="border border-navbarColor px-6 py-2 rounded-md text-[15px]"
      >
        HOME
      </NavLink>

      <NavLink
        to="/autobodyparts"
        className="border border-navbarColor px-6 py-2 rounded-md text-[15px]"
      >
        AUTO BODY PARTS
      </NavLink>

      <NavLink
        to="/headlights"
        className="border border-navbarColor px-6 py-2 rounded-md text-[15px]"
      >
        HEADLIGHTS & LIGHTING
      </NavLink>

      <NavLink
        to="/electricals"
        className="border border-navbarColor px-6 py-2 rounded-md text-[15px]"
      >
        ELECTRICAL
      </NavLink>

      <NavLink
        to="/suspension"
        className="border border-navbarColor px-6 py-2 rounded-md text-[15px]"
      >
        SUSPENSION
      </NavLink>

      <NavLink
        to="/interior"
        className="border border-navbarColor px-6 py-2 rounded-md text-[15px]"
      >
        INTERIOR
      </NavLink>

      <NavLink
        to="/exterior"
        className="border border-navbarColor px-6 py-2 rounded-md text-[15px]"
      >
        EXTERIOR
      </NavLink>
    </div>
  );
};

export default PageLinks;
