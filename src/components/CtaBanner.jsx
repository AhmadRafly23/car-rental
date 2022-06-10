import React from "react";

function CtaBanner() {
  return (
    <>
      <div className="w-100 d-flex justify-content-center">
        <div className="container cta-banner">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center flex-column">
              <h1 className="heading-1 text-center text-lg-left text-light">
                Sewa Mobil di (Lokasimu) Sekarang
              </h1>
              <p className="description text-center text-light content-banner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a className="btn-web px-5 py-2 font-weight-bold" href="#">
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaBanner;
