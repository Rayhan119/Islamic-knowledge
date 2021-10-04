//import  react,react bootstrap,usestate,useeffect,images
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesHome from "../ServiceHome/ServicesHome";
import img1 from "../../images/top.jpg";
import img2 from "../../images/download (1).jpg";
import img3 from "../../images/download.jpg";
import img4 from "../../images/images.jpg";
import "./Main.css";
const Main = () => {
  // usestate declare
  const [services, setServices] = useState([]);
  //useeffect declare
  useEffect(() => {
    fetch("homeData.json") //only four data get
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="home-section-top">
              <h2>Welcome to Islamic Knowledge</h2>

              <p>
                We are Providing Online Holy Quran Classes All Over The
                World.Specially Learn Quran Online Bd is looking for Bangladeshi
                who are residing abroad. Let's learn Quran Online with one of
                the best Online Quran Learning Academy. We are providing online
                Quran teaching service to kids and adults, male and female
                across the globe. Our Quran learning courses are specially
                designed for you and your kids. Under the guidance of qualified
                Quran Tutors, we will provide you step by step Quran Learning
                with the rules of Tajweed and essential Islamic knowledge. Are
                you looking for an online Quran tutor for yourself or for your
                children, let’s learn Quran with online Quran tutor in
                one-to-one Quran class at the comfort of your home.
              </p>
              <button className="welcome-btn">Read more</button>
            </div>
          </Col>
          <Col>
            <div className="main-img">
              <div className="top-img">
                <img src={img1} alt="" />
              </div>
              <div className="down-img">
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="services-section">
            <div className="services-area">
              <h1>Our Services</h1>
              <h5>
                Ethical and Moral Beliefs That Guides To The Straight Path!
              </h5>
            </div>
            <div className="services">
              {services.map((service) => (
                <ServicesHome key={service.id} service={service}></ServicesHome>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
