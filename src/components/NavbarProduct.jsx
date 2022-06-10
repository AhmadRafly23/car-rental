import React from "react";

function NavbarProduct() {
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
                <a className="nav-link btn" href="#/">
                  Register
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarProduct;
