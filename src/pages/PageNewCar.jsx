import React, { useState } from "react";
import ContentNewCar from "../components/ContentNewCar";
import Navbar from "../components/Navbar";
import SidebarBlue from "../components/SidebarBlue";

function PageNewCar() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className="row gx-0">
        <SidebarBlue />
        <Navbar showSidebar={showSidebar} />
        <ContentNewCar sidebar={sidebar} />
      </div>
    </>
  );
}

export default PageNewCar;
