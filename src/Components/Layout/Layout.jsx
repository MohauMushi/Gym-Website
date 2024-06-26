import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";


const LayoutContent = () => {

  return (
    <div className="site-wrapper">
      <Navbar />
	  <Home />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutContent;

