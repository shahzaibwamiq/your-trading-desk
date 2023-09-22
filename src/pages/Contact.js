import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <>
    <section className="breadcrumbs">
           <Container>

            <h1>Contact</h1>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><i className="fas fa-caret-right"></i></li>
                <li><span>Contact</span></li>
            </ul>
            </Container>

    </section>
    
    
    <section className="secContact">
           <Container>
          <Row>
                <Col xs={12} md={7} >   
                    <div className="thumb">
                        <img src="assets/images/platform-img.png"/>
                    </div>
                </Col>
                <Col xs={12} md={5} >            
                    <div className="ct_info">
                        <h2>Contact Info</h2>
                        <ul>
                            <li>Our Location<br/>
                            <strong>Canada, USA 2nd stage, UK – 560076 Demo</strong></li>
                            <li>Free Support<br/>
                            <strong><a href="tel:(123445566778)">+(123) 445566778</a></strong></li>
                            <li>Email Us<br/>
                            <strong><a href="mailto:admin@gamil.com">admin@gamil.com</a></strong></li>
                            <li>Opening Hour<br/>
                            <strong>Mon – Fri: 9 AM – 6 PM</strong></li>
                        </ul>
                    </div>
        
                </Col>
            </Row>
            </Container>
    </section>
    
    
    <section className="secMessage">
           <Container>

            <div className="text-center">
                <h2>Send Message</h2>
                <p>Let`s join our platform community and start investing in cryptocurrency</p>
            </div>
          <Row>
          <Col xs={12} md={4} >     
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051" width="100%" height="450" frameborder="0" style={{border: '0px', 'pointer-events': 'none'}} allowfullscreen=""></iframe>
               
                </Col>
                <Col xs={12} md={8} >   
                    <div className="ct_form">
                        <form className="form" action="" method="">
                          <Row>
                          
                                 <Col xs={12} md={6} >
                                    <input type="text" className="form-control" name="name" placeholder="Full Name"/>
                                </Col>
                                 <Col xs={12} md={6} >
                                    <input type="email" className="form-control" name="email" placeholder="Email Address"/>								
                                </Col>
                                 <Col xs={12} md={6} >
                                    <input type="tel" className="form-control" name="phone" placeholder="Phone Number"/>
                                </Col>
                                 <Col xs={12} md={6} >
                                    <input type="text" className="form-control" name="subject" placeholder="Your Subject"/>
                                </Col>
                                <Col xs={12} > 
                                    <textarea className="form-control" name="message" placeholder="Your Message"></textarea>
                                </Col>
                                <Col xs={12} > 
                                    <input type="submit" name="submit" value="SEND MESSAGE" className="btn_submit"/>
                                </Col>
                                </Row>
                        </form>
                    </div>
                </Col>
                </Row>
            </Container>
    </section>
        </>
  )
}

export default Contact
