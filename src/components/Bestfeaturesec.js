import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bestfeaturesingle from './Bestfeaturesingle';


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
            <Bestfeaturesingle title="Easy Payment" shortdesc="Easier payments with many options to sell or buy in our
                    transactions" imgsrc="assets/images/security.png"/>
           <Bestfeaturesingle title="High Security" shortdesc="Security system with high technology and encryption of every" imgsrc="assets/images/payment.png" />
           <Bestfeaturesingle title="Best Ecosystem" shortdesc="The services we provide with full support for the
                    convenience of our" imgsrc="assets/images/ecosystem.png"/>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Bestfeaturesec
