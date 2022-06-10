import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import rectangle from "../images/Rectangle36.png";
import ceklist from "../images/Group13.png";
import success from "../images/success.png";
import pdf from "../doc/tes.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

function ContentPembayaran() {
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <div id="content-pembayaran">
          <div className="container-fluid p-0 m-0 py-5 content-pembayaran">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-1 d-flex justify-content-center">
                        <AiOutlineArrowLeft
                          className="fw-bold"
                          style={{ fontSize: "20px" }}
                        />
                      </div>
                      <div className="col-11">
                        <p className="fw-bold mb-2 custom-font-2">Tiket</p>
                        <p className="custom-font-2">Order ID: xxxxxx</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-center alur-pembayaran">
                    <img src={ceklist} alt="ceklist" />
                    <span className="custom-font-2">Pilih Metode</span>
                    <img src={rectangle} alt="rectangle" />
                    <img src={ceklist} alt="ceklist" />
                    <span className="custom-font-2">Bayar</span>
                    <img src={rectangle} alt="rectangle" />
                    <img src={ceklist} alt="ceklist" />
                    <span className="custom-font-2">Tiket</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="row">
                  <div className="col-12 d-flex align-items-center flex-column">
                    <img src={success} alt="success" className="mt-5 mb-3" />
                    <p className="fw-bold custom-font-2">
                      Pembayaran Berhasil!
                    </p>
                    <p className="text-secondary mb-3 custom-font-2">
                      Tunjukkan invoice ini ke petugas BCR di titik temu.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9 p-3 invoice">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-between align-items-center">
                        <div>
                          <p className="custom-font-2 fw-bold">Invoice</p>
                          <p className="custom-font-2 text-secondary">
                            *no invoice
                          </p>
                        </div>
                        <Download>
                          {(props: RenderDownloadProps) => (
                            <span className="btn-unduh" onClick={props.onClick}>
                              <FiDownload className="me-2 fw-bold" />
                              Unduh
                            </span>
                          )}
                        </Download>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <Viewer
                          fileUrl={pdf}
                          plugins={[getFilePluginInstance]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Worker>
    </>
  );
}

export default ContentPembayaran;
