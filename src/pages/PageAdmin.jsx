import React, { useState } from "react";
import ContentAdmin from "../components/ContentAdmin";
import Navbar from "../components/Navbar";
import SidebarBlue from "../components/SidebarBlue";

function PageAdmin() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className="row gx-0">
        <SidebarBlue />
        <Navbar showSidebar={showSidebar} />
        <ContentAdmin sidebar={sidebar} />
      </div>
    </>
  );
}

export default PageAdmin;
