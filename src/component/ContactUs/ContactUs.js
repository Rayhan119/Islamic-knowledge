import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div>
      <Header></Header>
      {/* contact header starts*/}
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      {/* contact main section(mail,phone,Location) */}
      <Container>
        <Row className="contact-section">
          <Col>
            <Card className="cart-section" style={{ width: "18rem" }}>
              <i class="fas fa-search-location"></i>
              <Card.Body>
                <h1>Location</h1>
                <p>335 simanta Line,Uttora,Dhaka, Bangladesh(Head Office)</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cart-section" style={{ width: "18rem" }}>
              <i class="fas fa-envelope"></i>
              <Card.Body>
                <h1>Email us</h1>
                <p>info@islamicknowledge.com</p>
                <p>info@islamicknowledge119.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cart-section" style={{ width: "18rem" }}>
              <i class="fas fa-phone-volume"></i>
              <Card.Body>
                <h1>Phone Us</h1>
                <p>+88018198711**</p>
                <p>+88017198711**</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
