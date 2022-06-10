import React, { useState } from "react";
import ContentAdmin from "./ContentAdmin";
import iconNav from "../images/Rectangle62.png";
import hamburgerMenu from "../images/fi_menu.png";
import profileNavbar from "../images/Group15.png";
import ContentCar from "./ContentCar";

function Navbar({ showSidebar }) {
  return (
    <>
      <div className="row">
        <div className="col-12 position-fixed navbar-admin">
          <img src={iconNav} className="mx-4" alt="icon-navbar" />
          <div className="navbar-admin-right">
            <img
              src={hamburgerMenu}
              alt="hamburger-menu"
              onClick={() => showSidebar()}
            />
            <div className="search-navbar d-flex align-items-center">
              <div className="d-flex align-items-center">
                <input type="search" className="input-navbar" />
                <button className="button-navbar">Search</button>
              </div>
              <div>
                <div className="dropdown ms-4">
                  <img src={profileNavbar} alt="profile" />
                  <button
                    className="dropdown-toggle ms-1"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ahmad Rafly
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        {!car ? (
          <ContentAdmin sidebar={sidebar} />
        ) : (
          <ContentCar sidebar={sidebar} />
        )}
      </div> */}
    </>
  );
}

export default Navbar;
