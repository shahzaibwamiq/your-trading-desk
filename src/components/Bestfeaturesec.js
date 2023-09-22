import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bestfeaturesec() {
  return (
    <>
      
      <section className="BestFeatures">
        <Container >
          <div className="section-title">
            <Row className="align-items-center">
              <Col sm={12} md={8} lg={8}>
                <h2 className="theme-h2">
                  Best Features For Users Convenience
                </h2>
              </Col>
              <Col lg={4} md={4} sm={12} >
                <p className="theme-para">
                  Here our features that we present to make it easier for each
                  of our users <a href="#">Let’s know more</a>
                </p>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={4} md={4} sm={12} >
              <div className="FeatureBox">
                <div className="FeatureImg">
                  <img src="assets/images/payment.png" />
                </div>
                <div className="FeatureCon">
                  <h3>Easy Payment</h3>
                  <p>
                    Easier payments with many options to sell or buy in our
                    transactions
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="FeatureBox">
                <div className="FeatureImg">
                  <img src="assets/images/security.png" />
                </div>
                <div className="FeatureCon">
                  <h3>High Security</h3>
                  <p>
                    Security system with high technology and encryption of every
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="FeatureBox">
                <div className="FeatureImg">
                  <img src="assets/images/ecosystem.png" />
                </div>
                <div className="FeatureCon">
                  <h3>Best Ecosystem</h3>
                  <p>
                    The services we provide with full support for the
                    convenience of our
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Bestfeaturesec
