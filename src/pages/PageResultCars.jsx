import React from "react";
import NavbarProduct from "../components/NavbarProduct";
import Search from "../components/Search";
import SearchCarResult from "../components/SearchCarResult";

function PageResultCars() {
  return (
    <>
      <NavbarProduct />
      <div id="hero-section">
        <div className="container-fluid p-0 m-0 pt-5">
          <div className="py-5"></div>
        </div>
      </div>
      <Search />
      <SearchCarResult />
    </>
  );
}

export default PageResultCars;
