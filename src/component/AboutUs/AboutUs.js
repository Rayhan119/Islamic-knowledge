//import react,react bootstrap
import React from "react";
import "./AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";
import menk from "../../images/59f84d8ed46fc.jpg";
import ahmadullah from "../../images/download (3).jpg";
import mizan from "../../images/download (2).jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header></Header>
      {/* about us top section */}
      <div className="about-us-section">
        <h1>About Us</h1>
      </div>
      <Container className="about-main-section">
        <Row>
          <div className="about-top">
            <h2>Who we are</h2>
            <p>
              Who We Are We are a team of Muslims who are eager to spread the
              message of the Quran & the Sunnah through the most easy and
              effective learning methods. We have a team who are promoting and
              thinking how Muslim can touched with Quran & Sunnah.Specially we
              are looking for Bangladeshi who are residing abroad. Money is not
              our target, trying to spread proper Islam to them. We offer
              courses that help you read and learn the Holy Quran in the most
              easy and engaging way. if you are interested to join, please
              complete the registration form. We will communicate with you. For
              any further discussion/ clarification, you may also call us at our
              local numbers. If the participants are kids, don’t worry the offer
              is covering kids too, and our tutors are a highly experienced to
              teach the kids with the funniest and easiest ways to teach them
              Arabic & Quran. All courses will be held online through “Skype”,
              which is the most reliable choice we have, also we’re working now
              on having our own Communication platform in the near future to be
              more professional and usable InShaAllah.
            </p>
          </div>
          {/* our team members area */}
          <h2 className="team-header">Our Teams</h2>
          <Col>
            <div className="teams">
              <img src={menk} alt="" />
              <h4>Mofti Menk</h4>
              <p>
                {" "}
                <span>CEO</span> ,Islamic Knowledge
              </p>
            </div>
          </Col>
          <Col>
            <div className="teams">
              <img src={ahmadullah} alt="" />
              <h4>Mofti Ahmadullah</h4>
              <p>
                <span>Founder</span>,As sunnah Foundation
              </p>
            </div>
          </Col>
          <Col>
            <div className="teams">
              <img src={mizan} alt="" />
              <h4>Mofti Mizanur Rahman</h4>
              <p>
                <span>Scholar</span>,Phd(Tafsir)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
