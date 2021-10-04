//import useState,useEffect,react bootstrap
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./Service.css";
const Service = () => {
  //useState declare
  const [serviceItem, setServiceItem] = useState([]);
  //useEffect declare
  useEffect(() => {
    fetch("fakeData.json") //almost ten data import
      .then((res) => res.json())
      .then((data) => setServiceItem(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <div className="services-item-section">
            <div className="services-item-area">
              <h1>Our Services</h1>
              <h5>
                Ethical and Moral Beliefs That Guides To The Straight Path!
              </h5>
            </div>
            <div className="service-item">
              {serviceItem.map((item) => (
                <ServiceItem key={item.id} serviceItem={item}></ServiceItem>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
