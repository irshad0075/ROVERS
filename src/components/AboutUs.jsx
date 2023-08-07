import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import imageslide from "../assets/images/pro.png";

const WhyUs = () => {
  return (
    <section>
        <Container id="about" className="pb-5">
          <Row className="d-flex pt-5">
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <img src={imageslide} alt="" className="w-75" />
            </Col>
            <Col md={6}>
              <div className="px-md-4">
                
                <h1 data-aos="fade-zoom-in" style={{color: " #000f59"}}>
                 About Us
                </h1>
                <Row>
                  <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up">
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: " #000f59" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up">
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: " #000f59" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col
                    sm={6}
                    mb={3}
                    mb-sm={0}
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: " #000f59" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    sm={6}
                    mb={3}
                    mb-sm={0}
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: " #000f59" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default WhyUs;
