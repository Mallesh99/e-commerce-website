import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from "react";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
