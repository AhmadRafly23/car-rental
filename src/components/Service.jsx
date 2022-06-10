import React from "react";
import service from "../images/img_service.png";
import ceklist from "../images/ceklist.png";

function Service() {
  return (
    <>
      <div className="w-100 d-flex justify-content-center">
        <div className="container service-section">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <img
                className="img-fluid px-3 px-md-0 mr-md-5 mb-md-3 mb-lg-0"
                src={service}
                alt="service"
              />
            </div>
            <div className="col-lg-6 d-flex px-0 justify-content-center justify-content-lg-start">
              <div className="w-75 ms-md-5 mt-3 mt-md-0">
                <h2 className="title-service">
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </h2>
                <div className="content-service">
                  <p className="mb-4">
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                    harga lebih murah dibandingkan yang lain, kondisi mobil
                    baru, serta kualitas pelayanan terbaik untuk perjalanan
                    wisata, bisnis, wedding, meeting, dll.
                  </p>
                  <ul className="list-group">
                    <li>
                      <img src={ceklist} className="me-3" />
                      Sewa Mobil Dengan Supir di Bali 12 Jam
                    </li>
                    <li>
                      <img src={ceklist} className="me-3" />
                      Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </li>
                    <li>
                      <img src={ceklist} className="me-3" />
                      Sewa Mobil Jangka Panjang Bulanan
                    </li>
                    <li>
                      <img src={ceklist} className="me-3" />
                      Gratis Antar - Jemput Mobil di Bandara
                    </li>
                    <li>
                      <img src={ceklist} className="me-3" />
                      Layanan Airport Transfer / Drop In Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
