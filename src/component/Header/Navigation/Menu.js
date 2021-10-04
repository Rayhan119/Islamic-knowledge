//import react dom,react bootstrap and internal react.
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div>
      <Container>
        <Row className="navigation-area">
          {/* logo area */}
          <Col className="logo-text">
            <h5>
              <span>Islamic</span> knowledge<span>.com</span>
            </h5>
          </Col>
          <Col>
            {/* navigation area */}
            <div className="nav-area">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
