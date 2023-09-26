import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bestfeaturesingle(pros) {
  return (
    <>
       <Col lg={4} md={4} sm={12}>
              <div className="FeatureBox">
                <div className="FeatureImg">
                  <img src={pros.imgsrc} />
                </div>
                <div className="FeatureCon">
                  <h3>{pros.title}</h3>
                  <p>
                   {pros.shortdesc}
                  </p>
                </div>
              </div>
            </Col>
    </>
  )
}

export default Bestfeaturesingle
