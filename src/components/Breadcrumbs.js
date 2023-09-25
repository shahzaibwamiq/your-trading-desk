import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Breadcrumbs({pageTitle, url}) { 
  return (
    <>
        <section className="breadcrumbs">
           <Container>

            <h1>{pageTitle}</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><i className="fas fa-caret-right"></i></li>
                <li><span>{pageTitle}</span></li>
            </ul>
            </Container>

    </section> 
    </>
  )
}

export default Breadcrumbs
