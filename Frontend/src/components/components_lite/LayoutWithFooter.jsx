import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LayoutWithFooter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWithFooter;
