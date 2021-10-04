//Import form react dom and internal react.
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <Row>
          <div>
            <p>
              “O you who believe, seek help through patience and prayer.
              <br /> Surely, Allah is with those who are patient.”{" "}
              <strong>(Q. 2:153)</strong>
            </p>
          </div>
          <div className="subscribe">
            <span>Subscribe for Latest Update</span>
            <input type="text" placeholder="Email address" />
            <button>subscribe</button>
          </div>
          <hr />
          <div className="footer-end">
            <div className="menu">
              <h4>Menu</h4>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="Learning">
              <h4>Learnings</h4>
              <ul>
                <li>Quran Recitation</li>
                <li>Hadidth</li>
                <li>Nikkah/Marriage</li>
                <li>Masala of Islam</li>
                <li>Quranic Grammer</li>
              </ul>
            </div>
            {/* social icon */}
            <div className="social-icon">
              <h4>Social Links</h4>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram-square"></i>
            </div>
          </div>
          {/* footer end */}
          <p className="pt-5">
            Copyright © 2020 - 2021{" "}
            <span className="footer-span">Islamicknowledge.com.</span> All
            rights reserved.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
