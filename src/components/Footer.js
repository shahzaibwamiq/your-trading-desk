import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <footer id="theme-footer">
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Forex</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Assets Market</a>
                </li>
                <li>
                  <a href="#">Trading</a>
                </li>
                <li>
                  <a href="#">Consultation</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={3} sm={12} >
              <h3>Information</h3>
              <ul>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Join Community</a>
                </li>
                <li>
                  <a href="#">Learning</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <h3>Platform</h3>
              <ul>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="about.php">About</a>
                </li>
                <li>
                  <a href="contact.php">Contact</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <h3>About</h3>
              <p>
                Stay connected with us and let's know more about Forex and more
                explorer us on this
              </p>
              <ul className="footer-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
