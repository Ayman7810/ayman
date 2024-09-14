/** @format */

import React from "react";
import NavBar from "../../components/Uitilty/NavBarLogin/NavBar";
import Banner from "../../components/Home/Banner/Banner";
import Categories from "../../components/Category/Categories/Categories";
import ProductContainerGrid from "../../components/Product/ProductContinerGrid/ProductContinerGrid";
import ProductContainerGridSlider from "../../components/Product/ProductContainerGridSlider/ProductContainerGridSlider";
import ProductFeaturedDeals from "../../components/Product/ProductFeaturedDeals/ProductFeaturedDeals";
import { Col, Row } from "react-bootstrap";

import OurServices from "../../components/OurServices/OurServices";
import "./MyComponent.css";
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Categories />

      <ProductContainerGrid title={"احدث المنتجات"} btn={"المزيد"} />
      <Row className=" m-0">
        <Col lg="9">
          <ProductFeaturedDeals />
        </Col>
        <Col lg="3">
          <OurServices />
        </Col>
      </Row>
      <ProductContainerGrid title={"الاكثر مبيعا"} btn={"المزيد"} />

      <ProductContainerGrid />
      {/* <ProductContainerGridSlider /> */}
    </div>
  );
};

export default HomePage;
