import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Header.css";
import Menu from "./Navigation/Menu";
const Header = () => {
  return (
    <div>
      <div className="header-top">
        <Container>
          <Row>
            <Col>
              <div className="contact">
                <i class="fas fa-phone-alt"></i>
                +8801778856602
              </div>
            </Col>
            <Col>
              <div className="info">
                <i class="fas fa-envelope"></i>
                info@islamicknowledge.com
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Header;
