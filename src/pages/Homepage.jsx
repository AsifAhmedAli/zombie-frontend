import React from "react";
import HomePageContent from "../components/HomePageContent";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import TopNav from "../components/TopNav";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Navbar />
      <SearchBox />
      <HomePageContent />
    </div>
  );
};

export default Homepage;
