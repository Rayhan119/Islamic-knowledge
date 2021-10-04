//import react,react bootstrap,react router dom
import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServicesHome.css";
const ServicesHome = (props) => {
  const { img, name, price, description, duration } = props.service;

  return (
    <div>
      <Container>
        <Row>
          <Card className="cart" style={{ width: "17rem" }}>
            <div className="cart-img">
              <Card.Img src={img} />
            </div>
            <Card.Body>
              <Card.Title>
                <h5 className="text-center text-danger p-2">{name}</h5>
              </Card.Title>
              <Card.Text>{description}</Card.Text>
              <p>
                {" "}
                <span>Duration </span> : {duration}
              </p>
              <p>
                {" "}
                <span>Price</span> : {price}$
              </p>
              <div className="cart-btn-area">
                <Link to={"/detail"}>
                  <Button className="cart-btn">Detail</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesHome;
