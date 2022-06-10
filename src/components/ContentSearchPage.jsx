import React from "react";
import bgcar from "../images/img_car.png";
import Footer from "./Footer";
import Search from "./Search";

function ContentSearchPage() {
  return (
    <>
      <div style={{ marginBottom: "6rem" }}>
        <section id="hero-section">
          <div className="container-fluid p-0 m-0 pt-5">
            <div className="row m-0 p-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <div className="content-hero">
                  <h1 className="heading-hero">
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                  </h1>
                  <p className="desc-hero">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="w-100" src={bgcar} alt="img-car" />
              </div>
            </div>
          </div>
        </section>
        <Search />
      </div>
    </>
  );
}

export default ContentSearchPage;
