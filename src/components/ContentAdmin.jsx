import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import TabelAdmin from "./TabelAdmin";

function ContentAdmin({ sidebar }) {
  return (
    <>
      <div className="d-flex px-0 content-admin">
        <div className={sidebar ? "vh-100 px-0 active" : "non-active"}>
          <p className="text-admin" style={{ marginTop: "20px" }}>
            DASHBOARD
          </p>
          <p className="text-admin text-hover">Dashboard</p>
        </div>
        <div
          className={
            sidebar ? "content-active" : "content-active content-nonactive"
          }
        >
          <div className="main-admin-content">
            <div className="d-flex align-items-center mb-3 navigation-text">
              <p className="fw-bold">Dashboard</p>
              <AiOutlineRight className="fw-bold nav-right" />
              <p>Dashboard</p>
            </div>
            <p className="fw-bold mb-3 text-big-admin">Dashboard</p>
            <div className="data-tabel-admin w-100">
              <TabelAdmin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentAdmin;
