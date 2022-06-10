import React, { useEffect, useState } from "react";
import axios from "axios";
import kunci from "../images/Vector.png";
import jam from "../images/fi_clock.png";
import { FiTrash2 } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function DataApiCar() {
  const API_URL = "http://localhost:3005/cars";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataCar = async () => {
    setLoading(true);
    try {
      const res = await axios(API_URL);
      setData(res.data);
    } catch (err) {
      alert("API sedang dalam gangguan" + err);
    }
    setLoading(false);
  };

  useEffect(() => {
    dataCar();
  }, []);
  //   console.log(data);
  return (
    <>
      {loading
        ? "Loading..."
        : data.map((state) => {
            return (
              <div className="col-xl-3 col-lg-4">
                <div className="card me-4 p-3 mt-3 w-100">
                  <Link to={`/pagedetail/${state.id}`}>
                    <img
                      src={state.image}
                      className="card-img-top"
                      alt="img-card"
                    />
                  </Link>
                  <div className="card-body">
                    <p className="text-card mb-2">{state.name}</p>
                    <p className="text-card fw-bold mb-3">
                      Rp. {state.price} / hari
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <img src={kunci} alt="rent" />
                      <p className="text-card ms-2">Start rent - Finish rent</p>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <img src={jam} alt="time" />
                      <p className="text-card ms-2">
                        Updated at 4 Apr 2022, 09.00
                      </p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <div className="btn-delete d-flex align-items-center justify-content-center">
                        <span>
                          <FiTrash2 className="mb-1 me-1" />
                        </span>
                        <span>Delete</span>
                      </div>
                      <div className="btn-edit d-flex align-items-center justify-content-center">
                        <span>
                          <FaEdit className="mb-1 me-1" />
                        </span>
                        <span>Edit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
}

export default DataApiCar;
