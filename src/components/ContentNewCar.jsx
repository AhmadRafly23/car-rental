import React from "react";
import { AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import TabelNewCar from "./TabelNewCar";

function ContentNewCar({ sidebar }) {
  return (
    <>
      <div className="d-flex px-0 content-car">
        <div className={sidebar ? "vh-100 px-0 active" : "non-active"}>
          <p className="text-admin" style={{ marginTop: "20px" }}>
            CARS
          </p>
          <p className="text-admin text-hover">List Car</p>
        </div>
        <div
          className={
            sidebar ? "content-active" : "content-active content-nonactive"
          }
        >
          <div className="main-admin-content">
            <div className="d-flex align-items-center mb-3 navigation-text">
              <p className="fw-bold ">Cars</p>
              <AiOutlineRight className="fw-bold nav-right" />
              <p className="fw-bold">List Car</p>
              <AiOutlineRight className="fw-bold nav-right" />
              <p>Add New Car</p>
            </div>
            <p className="fw-bold text-big-admin mb-3">Add New Car</p>
            <div className="row w-100" style={{ height: "80vh" }}>
              <TabelNewCar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentNewCar;
