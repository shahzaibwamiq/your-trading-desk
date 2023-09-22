import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testimonial from '../components/Testimonial';
import Videosec from '../components/Videosec';
import Currencysec from '../components/Currencysec';
import Bestfeaturesec from '../components/Bestfeaturesec';
import Bestplatformsec from '../components/Bestplatformsec';
// import ContainerFluid from 'react-bootstrap/container-fluid'

function Home() {
  return (
    <>
      <section className="BannerSlider">
        <Container fluid>
          <div id="banner_slide" className="owl-carousel owl-theme">
            <div className="item">
              <Row className=" align-items-center">
                <Col lg={8} md={8} sm={12} >
                  <div className="BannerContent">
                    <h1>
                      Best Way To Buy And Sell <br /> Your Trades
                    </h1>
                    <p>
                      We will show you the best way to be an option in selling
                      and buying Forex assets
                    </p>
                    <div className="theme-btn">
                      <a className="vc_general" href="#">
                        See Details <img src="assets/images/btn-bf.png" />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} >
                  <div className="BannerImage">
                    <img src="assets/images/banner-img.png" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="item">
            <Row className=" align-items-center">
                <Col  lg={8} md={8} sm={12}>
                  <div className="BannerContent">
                    <h1>
                      Best Way To Buy And Sell <br /> Your Trades
                    </h1>
                    <p>
                      We will show you the best way to be an option in selling
                      and buying Forex assets
                    </p>
                    <div className="theme-btn">
                      <a className="vc_general" href="#">
                        See Details <img src="assets/images/btn-bf.png" />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="BannerImage">
                    <img src="assets/images/banner-img.png" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>    
      <Bestplatformsec/>
      <Bestfeaturesec/>
      <Videosec/>
      <Currencysec/>
      <Testimonial />
      <section className="NewsletterSec">
        <Container>
          <Row>
            <Col lg={2} sm={12}></Col>
            <Col lg={8} sm={12}>
              <div className="NewsletterCon">
                <h2 className="theme-h2">Join our news letter</h2>
                <p>
                  Let's join our platform community and start investing in
                  cryptocurrency
                </p>
                <form action="index.php">
                  <input type="email" placeholder="Enter your email" />
                  <input
                    className="btn-primary"
                    type="submit"
                    value="Contact us"
                  />
                </form>
              </div>
            </Col>
            <div className="col-lg-2 col-lg-2 col-sm-12"></div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
