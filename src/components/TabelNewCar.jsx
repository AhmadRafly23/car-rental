import React, { useState } from "react";
import upload from "../images/fi_upload.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TabelNewCar() {
  const navigate = useNavigate();
  const [nama, setNama] = useState(null);
  const [harga, setHarga] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const notify = () =>
    toast.success("Data Berhasil Disimpan", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  function changeName(e) {
    setNama(e.target.value);
  }

  function changeHarga(e) {
    setHarga(e.target.value);
  }

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", nama);
    formData.append("category", "small");
    formData.append("price", harga);
    formData.append("status", false);
    formData.append("image", selectedFile);

    axios
      .post("https://rent-cars-api.herokuapp.com/admin/car", formData)
      .then(() => {
        navigate("/pagecars");
        notify();
      })
      .catch((err) => alert("File Upload Error"));
  };
  // console.log(harga);
  // console.log(nama);
  return (
    <>
      <div className="form-body bg-light tabel-new p-3 ms-3">
        <form>
          <div className="row mb-3">
            <div className="col-3">
              <label for="inputName" className="form-label">
                Nama
              </label>
              <label for="wajib" style={{ color: "red" }}>
                *
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="inputNama6"
                className="form-control input-newcar"
                placeholder="Nama"
                onChange={changeName}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-3">
              <label for="inputPassword6" className="form-label">
                Harga
              </label>
              <label for="wajib" style={{ color: "red" }}>
                *
              </label>
            </div>
            <div className="col-lg-9">
              <input
                type="text"
                id="inputHarga6"
                className="form-control input-newcar"
                placeholder="Harga"
                onChange={changeHarga}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-3">
              <label for="inputFoto6" className="form-label">
                Foto
              </label>
              <label for="wajib" style={{ color: "red" }}>
                *
              </label>
            </div>
            <div className="col-lg-9">
              <div className="input-group" style={{ width: "35%" }}>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <label
                  for="formFile"
                  id="file-input"
                  className="form-control text-secondary align-items-center d-flex"
                >
                  {selectedFile === null ? "Selected File" : selectedFile.name}
                </label>
                <span className="input-group-text">
                  <img src={upload} alt="" />
                </span>
              </div>
              <small
                id="fileHelp"
                className="form-text text-muted"
                style={{ marginLeft: "1px" }}
              >
                File size max. 2 MB
              </small>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-3">
              <label for="inputStartRent6" className="form-label">
                Start Rent
              </label>
            </div>
            <div className="col-lg-9">
              <span> - </span>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-3">
              <label for="inputFinishRent6" className="form-label">
                Finish Rent
              </label>
            </div>
            <div className="col-lg-9">
              <span> - </span>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-3">
              <label for="inputCreatedRent6" className="form-label">
                Created Rent
              </label>
            </div>
            <div className="col-lg-9">
              <span> - </span>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <label for="inputUpdatedRent6" className="form-label">
                Updated Rent
              </label>
            </div>
            <div className="col-lg-9">
              <span> - </span>
            </div>
          </div>
        </form>
      </div>
      <div className="row ms-1" style={{ marginTop: "10rem" }}>
        <div className="col-12">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-save" onClick={submitForm}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default TabelNewCar;
