import React from "react";
import icon from "../images/Rectangle63.png";
import home from "../images/fi_home.png";
import truck from "../images/fi_truck.png";
import { Link } from "react-router-dom";

function SidebarBlue() {
  return (
    <>
      <div className="col-1 vh-100 position-fixed sidebar">
        <img src={icon} className="icon-sidebar" alt="rectangle" />
        <Link to={"/"} className="sidebar-content pt-2 text-decoration-none">
          <img src={home} alt="home" />
          <p>Dashboard</p>
        </Link>
        <Link to={"/pagecars"} className="sidebar-content text-decoration-none">
          <img src={truck} alt="truck" />
          <p>Cars</p>
        </Link>
      </div>
    </>
  );
}

export default SidebarBlue;
