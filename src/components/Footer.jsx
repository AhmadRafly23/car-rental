import React from "react";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4 custom-font-2">
              <p className="custom-font-2">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p className="custom-font-2">binarcarrental@gmail.com</p>
              <p className="custom-font-2">081-233-334-808</p>
            </div>
            <div className="col-md-2">
              <p className="fw-bold custom-font-2">Our services</p>
              <p className="fw-bold custom-font-2">Why Us</p>
              <p className="fw-bold custom-font-2">Testimonial</p>
              <p className="fw-bold custom-font-2">FAQ</p>
            </div>
            <div className="col-md-3">
              <p className="custom-font-2">Connect with us</p>
              <div>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/HDLm5Gk/icon-facebook.png"
                    alt="icon-facebook"
                    border="0"
                    className="me-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/bsJjK8F/icon-instagram.png"
                    alt="icon-instagram"
                    border="0"
                    className="me-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/jLjDcp2/icon-mail.png"
                    alt="icon-mail"
                    border="0"
                    className="me-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/t2B4XC6/icon-twitch.png"
                    alt="icon-twitch"
                    border="0"
                    className="me-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/Tmqs9XX/icon-twitter.png"
                    alt="icon-twitter"
                    border="0"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <p className="custom-font-2">Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
