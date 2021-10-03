import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div>
      <Container>
        <Row className="navigation-area">
          <Col className="logo-text">
            <h5>
              <span>Islamic</span> knowledge<span>.com</span>
            </h5>
          </Col>
          <Col>
            <div className="nav-area">
              <a href="#home">Home</a>
              <a href="#features">About Us</a>
              <a href="#pricing">Services</a>
              <a href="#pricing">Contact Us</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
