import React from "react";
import bgcar from "../images/img_car.png";

function HeroSection() {
  return (
    <>
      <div className="row align-items-center flex-column-reverse flex-md-row hero-section">
        <div className="col-md-6 d-flex justify-content-center py-lg-5 py-xl-0">
          <div className="col-md-8 text-center text-md-start">
            <h1 className="heading-1">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="w-75 text-hero-section">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a
              className="btn btn-web px-5 py-2 fw-bold mb-5 mb-md-5 mb-lg-0"
              href="#"
            >
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <img className="w-100" src={bgcar} alt="car" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
