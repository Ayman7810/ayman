/** @format */

import React from "react";
import "./style.css";
import img from "../../../images/abaya/14.jpg";

import { Bounce, Fade } from "react-reveal";
import { AiOutlineGooglePlus } from "react-icons/ai";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Fade>
        <div className="react-reveal">
          <div className="section-title mt-4">
            <h2>تسجيل الدخول</h2>
          </div>
          <div className="wrapper">
            <main className="authentication-content">
              <div className="container-fluid">
                <div className="authentication-card">
                  <div
                    className="card shadow rounded-0 overflow-hidden"
                    style={{ direction: "ltr" }}>
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-4 p-sm-5 text-end">
                          <p className="card-text mb-5">
                            ! قم بتسجيل الدخول واحصل على الدعم الاستشاري
                          </p>
                          <form className="form-body">
                            <div className="d-grid">
                              <a
                                tabIndex="0"
                                className="btn btn-white radius-30 border rounded-pill"
                                dir="rtl">
                                <span className="d-flex justify-content-center align-items-center">
                                  <AiOutlineGooglePlus
                                    className="fa fa-google ms-2"
                                    style={{ color: "rgb(240, 128, 128)" }}
                                  />
                                  <span>تسجيل الدخول عبر جوجل</span>
                                </span>
                              </a>
                            </div>
                            <div className="login-separater text-center mb-4">
                              <span>تسجيل الدخول عبر الايميل</span>
                              <hr />
                            </div>
                            <div className="row g-3">
                              <div className="col-12">
                                <label
                                  htmlFor="inputEmailAddress"
                                  className="form-label">
                                  الايميل
                                </label>
                                <div className="ms-auto position-relative">
                                  <div className="position-absolute top-50 translate-middle-y search-icon px-3"></div>
                                  <input
                                    type="email"
                                    className="form-control radius-30 ps-5"
                                    id="inputEmailAddress"
                                    dir="rtl"
                                    placeholder=" الايميل"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <label
                                  htmlFor="inputChoosePassword"
                                  className="form-label">
                                  كلمة المرور
                                </label>
                                <div className="ms-auto position-relative">
                                  <div className="position-absolute top-50 translate-middle-y search-icon px-3"></div>
                                  <input
                                    type="password"
                                    className="form-control radius-30 ps-5"
                                    id="inputChoosePassword"
                                    dir="rtl"
                                    placeholder="كلمة المرور"
                                  />
                                </div>
                              </div>
                              <div className="col-5 d-flex">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexSwitchCheckChecked">
                                    تذكرني
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-grid">
                                  <button
                                    type="submit"
                                    className="btn btn-primary radius-30"
                                    style={{
                                      background: "rgb(240, 128, 128)",
                                      border: "none",
                                    }}>
                                    تسجيل الدخول
                                  </button>
                                </div>
                              </div>
                              <div className="col-6 ">
                                <p className="mb-0 fs-6">
                                  <Link
                                    to="/Regester"
                                    className="mx-2 moveLink">
                                    أنشاء حساب جديد
                                  </Link>
                                </p>
                              </div>
                              <div className="col-6 ">
                                <Link to="/Reset-password" className="mx-2 moveLink">
                                  نسيت كلمة المرور
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 bg-login d-flex  justify-content-center">
                        <Bounce>
                          <img src={img} className="img-fluid" alt="" />
                        </Bounce>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default LoginPage;
