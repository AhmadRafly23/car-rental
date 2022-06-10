import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";
import { Link } from "react-router-dom";

import car from "../images/img-mobil.png";
import logo from "../images/logo-bcr.png";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-8">
            <img
              src={car}
              alt="bg-car"
              style={{ objectFit: "cover", height: "100vh", width: "100%" }}
            />
          </div>
          <div className="col-4">
            <div className="row mx-5 h-100">
              <div className="col-12 d-flex flex-column justify-content-center">
                <img
                  src={logo}
                  alt=""
                  style={{
                    width: "100px",
                    height: "40px",
                    marginBottom: "1.5rem",
                  }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Welcome, Admin BCR
                </p>

                <Form onSubmit={handleRegister} ref={form}>
                  {!successful && (
                    <div>
                      <div className="form-group input-oauth">
                        <label htmlFor="username">Username</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={username}
                          onChange={onChangeUsername}
                          validations={[required, vusername]}
                        />
                      </div>

                      <div className="form-group input-oauth mt-3">
                        <label htmlFor="email">Email:</label>
                        <Input
                          type="text"
                          className="form-control "
                          name="email"
                          value={email}
                          onChange={onChangeEmail}
                          validations={[required, validEmail]}
                        />
                      </div>

                      <div className="form-group input-oauth mt-3">
                        <label htmlFor="password">Password:</label>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={onChangePassword}
                          validations={[required, vpassword]}
                        />
                      </div>

                      {/* 2. Menemukan tombol kirim sign up */}
                      <div className="form-group">
                        <button className="btn-auth mt-4">Sign Up</button>
                      </div>
                    </div>
                  )}

                  {message && (
                    <div className="form-group">
                      <div
                        className={
                          successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
                <p className="mt-2">
                  Alerady have an account?
                  <span>
                    <Link to={"/login"}> Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
