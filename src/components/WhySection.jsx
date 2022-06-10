import React from "react";
import hours from "../images/icon_24hrs.png";
import complete from "../images/icon_complete.png";
import price from "../images/icon_price.png";
import professional from "../images/icon_professional.png";

function WhySection() {
  return (
    <>
      <div className="container-fluid why-section">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row">
              <div className="col">
                <h2 className="heading-2">Why Us?</h2>
                <p className="description">
                  Mengapa harus pilih Binar Car Rental?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="card shadow h-100 p-3">
                  <div className="card-body">
                    <img className="mb-3" src={complete} alt="icon" />
                    <h5 className="card-title fw-bold">Mobil Lengkap</h5>
                    <p className="card-text description">
                      Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                      dan terawat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="card shadow h-100 p-3">
                  <div className="card-body">
                    <img className="mb-3" src={price} alt="icon" />
                    <h5 className="card-title fw-bold">Harga Murah</h5>
                    <p className="card-text description">
                      Harga murah dan bersaing, bisa bandingkan harga kami
                      dengan rental mobil lain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="card shadow h-100 p-3">
                  <div className="card-body">
                    <img className="mb-3" src={hours} alt="icon" />
                    <h5 className="card-title fw-bold">Layanan 24 Jam</h5>
                    <p className="card-text description">
                      Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                      juga tersedia di akhir minggu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="card shadow h-100 p-3">
                  <div className="card-body">
                    <img className="mb-3" src={professional} alt="icon" />
                    <h5 className="card-title fw-bold">Sopir Profesional</h5>
                    <p className="card-text description">
                      Sopir yang profesional, berpengalaman, jujur, ramah dan
                      selalu tepat waktu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhySection;
