/** @format */

import React, { useState } from "react";
import NavMovePage from "../../../components/Uitilty/NavMovePage/NavMovePage";

import "./style.css";

import img1 from "../../../images/abaya/jacket-1.jpg";
import img2 from "../../../images/abaya/jacket-2.jpg";
import img3 from "../../../images/abaya/jacket-3.jpg";
import img4 from "../../../images/abaya/jacket-4.jpg";
import img5 from "../../../images/abaya/jacket-1.jpg";
import cards from "../../../images/cards.png";
import Zoom from "react-medium-image-zoom";
import ImageZoom from "react-image-zooom";
import "react-medium-image-zoom/dist/styles.css";
import { Accordion, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import RateContainer from "../../../components/Rate/RateContainer";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import ProductContainerGridSlider from "../../../components/Product/ProductContainerGridSlider/ProductContainerGridSlider";
import ProductContainerGrid from "../../../components/Product/ProductContinerGrid/ProductContinerGrid";

const ProducteDetilsPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const colors = [
    "#ff6347", // Tomato
    "#4682b4", // SteelBlue
    "#32cd32", // LimeGreen
    "#ffa500", // Orange
    "#8a2be2", // BlueViolet
    "#dc143c", // Crimson
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <NavBar />
      <div>
        <NavMovePage title="تفاصيل المنتج" />
        <section className="product-section">
          <div className="container">
            <div className="back-link">
              <Link
                to="/products"
                style={{ textDecoration: "none", textAlign: "right" }}>
                &lt;&lt; كل المنتجات
              </Link>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <div className="product-pic-zoom">
                    <ImageZoom
                      className="product-big-img"
                      src={img1}
                      alt="A image to apply the ImageZoom plugin"
                      zoom="500"></ImageZoom>
                    <div className="row d-flex justify-content-between">
                      <div
                        className="card border-0 mt-4"
                        style={{ width: "10rem" }}>
                        <Zoom>
                          <img src={img2} className="img-thumbnail" alt="..." />
                        </Zoom>
                      </div>
                      <div
                        className="card border-0 mt-4"
                        style={{ width: "10rem" }}>
                        <Zoom>
                          <img src={img3} className="img-thumbnail" alt="..." />
                        </Zoom>
                      </div>
                      <div
                        className="card border-0 mt-4"
                        style={{ width: "10rem" }}>
                        <Zoom>
                          <img src={img4} className="img-thumbnail" alt="..." />
                        </Zoom>
                      </div>
                      <div
                        className="card border-0 mt-4"
                        style={{ width: "10rem" }}>
                        <Zoom>
                          <img src={img5} className="img-thumbnail" alt="..." />
                        </Zoom>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 product-details text-end">
                <h2 className="p-title">بلوزة بيبلوم بيضاء</h2>
                <h3 className="p-price">4000 ريال</h3>
                <h4 className="p-stock">
                  متاح : <span> في المخزن </span>
                </h4>
                <div className="p-rating">
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o fa-fade"></i>
                </div>
                <div className="fw-size-choose">
                  <div className="color-container">
                    <p className="m-0">الالوان المتاحة</p>
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className={`color-item ${
                          activeIndex === index ? "active" : ""
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleClick(index)}>
                        <span></span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="quantity">
                  <p className="ms-3 mb-2">الكمية المتاحة</p>
                  <div
                    className="border rounded-pill d-flex justify-content-center align-items-center "
                    style={{ width: "100px" }}>
                    {/* <p
                    className="fs-6 me-2 mb-2 "
                    style={{ color: "#f51167", cursor: "pointer" }}
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}>
                    +
                  </p> */}
                    <p className="mb-2 ms-3 text-center">{quantity}</p>
                    {/* <p
                    className="fs-6 ms-2  mb-2 "
                    style={{ color: "#f51167", cursor: "pointer" }}
                    onClick={() => {
                      setQuantity(quantity - 1);
                    }}>
                    -
                  </p> */}
                  </div>
                </div>
                <Button
                  className="rounded-pill btn-more"
                  style={{ backgroundColor: "#ff66b2", border: "none" }}>
                  اشتري الان
                </Button>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>معلومات المنتج</Accordion.Header>
                    <Accordion.Body>
                      <div className="panel-body">
                        <p>
                          الطول التقريبي 66 سم / 26 بوصة (بناء على عينة مقاس 8
                          في المملكة المتحدة) الألياف المختلطة العارضة ترتدي
                          مقاس 8 في المملكة المتحدة مقاس الاتحاد الأوروبي 36 /
                          مقاس الولايات المتحدة 4 وطولها 5'8 "
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>الشحن والإرجاع</Accordion.Header>
                    <Accordion.Body>
                      <div className="panel-body">
                        <h4>7 أيام إرجاع</h4>
                        <p>
                          الدفع عند الاستلام متاح
                          <br />
                          خدمة التوصيل للمنزل <span>3 - 4 أيام</span>
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>تفاصيل الدفع</Accordion.Header>
                    <Accordion.Body>
                      <div className="panel-body">
                        <img src={cards} alt="" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin pharetra tempor so dales. Phasellus
                          sagittis auctor gravida. Integer bibendum sodales arcu
                          id te mpus. Ut consectetur lacus leo, non scelerisque
                          nulla euismod nec.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="social-sharing">
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RateContainer />
        <div className="mt-4" style={{ marginTop: "60px !important" }}>
          <ProductContainerGrid title={"منتجات قد تعجبك"} btn={"المزيد"} />
        </div>
      </div>
    </>
  );
};

export default ProducteDetilsPage;
