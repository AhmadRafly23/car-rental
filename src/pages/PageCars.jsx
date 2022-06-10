import React, { useState } from "react";
import ContentCar from "../components/ContentCar";
import Navbar from "../components/Navbar";
import SidebarBlue from "../components/SidebarBlue";
import { useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PageCars() {
  const [sidebar, setSidebar] = useState(true);
  const location = useLocation();

  function showSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <>
      <div className="row gx-0">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <SidebarBlue />
        <Navbar showSidebar={showSidebar} />
        <ContentCar sidebar={sidebar} />
      </div>
    </>
  );
}

export default PageCars;
