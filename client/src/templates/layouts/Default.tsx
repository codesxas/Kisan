import React from "react";
import { Outlet } from "react-router-dom";

// components
import Sidebar from "../components/nav/Sidebar";

function Default() {
  return (
    <div className="main">
      <div className="nav">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Default;
