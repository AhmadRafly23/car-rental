import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import { history } from "../helpers/history";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";

function NavbarProduct() {
  const { isLoggedIn } = useSelector((state) => state.auth);
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
      <div id="navbar">
        <div className="container-fluid m-0 p-0">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand" href="#/">
              BinarCar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link me-4" href="#/">
                  Our Services
                </a>
                <a className="nav-link me-4" href="#/">
                  Why Us
                </a>
                <a className="nav-link me-4" href="#/">
                  Testimonial
                </a>
                <a className="nav-link me-4" href="#/">
                  FAQ
                </a>
                {isLoggedIn ? (
                  <Link className="nav-link btn" onClick={logOut} to={"/"}>
                    Logout
                  </Link>
                ) : (
                  <Link className="nav-link btn" to={"/register"}>
                    Register
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarProduct;
