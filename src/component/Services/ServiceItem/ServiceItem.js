import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import "./ServiceItem.css";
const ServiceItem = (props) => {
  const { img, name, description, price, duration } = props.serviceItem;
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
                <Button className="cart-btn">Detail</Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceItem;
