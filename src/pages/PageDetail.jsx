import React from "react";
import CarsDetail from "../components/CarsDetail";
import NavbarProduct from "../components/NavbarProduct";
import Search from "../components/Search";

function PageDetail() {
  return (
    <>
      <NavbarProduct />
      <div id="hero-section">
        <div className="container-fluid p-0 m-0 pt-5">
          <div className="py-5"></div>
        </div>
      </div>
      <Search />
      <CarsDetail />
    </>
  );
}

export default PageDetail;
