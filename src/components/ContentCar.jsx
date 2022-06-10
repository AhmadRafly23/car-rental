import React from "react";
import { AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import DataApiCar from "./DataApiCar";

function ContentCar({ sidebar }) {
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
              <p className="fw-bold">Cars</p>
              <AiOutlineRight className="fw-bold nav-right" />
              <p>List Car</p>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100 mb-3">
              <p className="fw-bold text-big-admin mb-0">List Car</p>
              <Link to={"/pagenewcar"} className="btn-car text-decoration-none">
                <AiOutlinePlus className="custom-font-2 fw-bold me-2" />
                Add New Car
              </Link>
            </div>
            <div className="d-flex mb-4">
              <div className="box-car">All</div>
              <div className="box-car">Small</div>
              <div className="box-car">Medium</div>
              <div className="box-car">Large</div>
            </div>
            <div className="container-fluid data-tabel-admin w-100 d-flex flex-wrap">
              <div className="row">
                <DataApiCar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentCar;
