import React, { useState, useEffect, useCallback } from "react";
import ContentAdmin from "./ContentAdmin";
import iconNav from "../images/Rectangle62.png";
import hamburgerMenu from "../images/fi_menu.png";
import profileNavbar from "../images/Group15.png";
import ContentCar from "./ContentCar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import { history } from "../helpers/history";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";

function Navbar({ showSidebar }) {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [logOut]);
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
                      <Link className="dropdown-item" onClick={logOut} to={"/"}>
                        Logout
                      </Link>
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
