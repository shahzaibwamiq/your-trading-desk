import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Bestplatformsec() {
  return (
    <>
       <section className="OurBestPlatform">
        <Container >
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} >
              <div className="PlatformImg">
                <img src="assets/images/platform-img.png" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} >
              <div className="PlatformCon">
                <h2 className="theme-h2">Development Of Our Best Platform</h2>
                <div id="projectFacts" className="sectionclassName">
                  <div className="fullWidth eight columns">
                    <div className="projectFactsWrap ">
                      <div
                        className="item wow fadeInUpBig animated animated"
                        data-number="12"
                        style={{ visibility: 'visible ' }}
                      >
                        <p>Our Users</p>
                        <p id="number1" className="number">
                          12 <span>M+</span>
                        </p>
                      </div>
                      <div
                        className="item wow fadeInUpBig animated animated"
                        data-number="55"
                        style={{ visibility: 'visible ' }}
                      >
                        <p>Active Transaction</p>
                        <p id="number2" className="number">
                          55
                        </p>
                      </div>
                      <div
                        className="item wow fadeInUpBig animated animated"
                        data-number="359"
                        style={{ visibility: 'visible ' }}
                      >
                        <p>Brand Partner</p>
                        <p id="number3" className="number">
                          359
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Has become the best choice to become a platform that <br />{' '}
                  accommodates users in asset transactions
                </p>
                <a href="#">Let’s know more</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section> 
    </>
  )
}

export default Bestplatformsec
