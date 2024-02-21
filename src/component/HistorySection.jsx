import React from "react";
import { Col, Row } from "reactstrap";
import CarouselComp from "./CarouselComp";
function HistorySection() {
  return (
    <div className="history_">
      <Row className="m-0" id="history">
        <Col md={2}></Col>
        <Col md={8} className="p-3 carousel-wrapper">
          <div>
            <div className="text_wrapper">
              <p className="num_one">01.</p>
              <p className="history_h">HISTORY</p>
            </div>
            <p className="history_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt
              quam. Cras scelerisque id quam sed dignissim Pellentesque urna
              nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus
              suscipit dignissim tortor nec congue.
            </p>
          </div>
        </Col>
        <Col md={2}></Col>
        <div className="carousel_">
          <CarouselComp />
        </div>
      </Row>
    </div>
  );
}

export default HistorySection;
