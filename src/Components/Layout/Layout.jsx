import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const LayoutContent = () => {

  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutContent;

