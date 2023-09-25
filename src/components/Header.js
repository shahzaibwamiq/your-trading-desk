import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Container  from 'react-bootstrap/Container';

function Header() {
  return (
    <>
      <header className="mastheader">
        <div className="container-fluid">
          <Navbar className="navbar navbar-expand-lg navbar-light bg-body-tertiary"  expand="lg">
            <Navbar.Brand to="/"  className="navbar-brand" href="#">
              <img src="assets/images/logo.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

              
            <Navbar.Collapse  
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className=" home-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="" to="/market">
                    Market <span className="off-sale">30% off</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="" href="#">
                    Community
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
            <div className="header-icon">
              <ul>
                <li>
                  <a href="#">
                    <img src="assets/images/search.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/filter.png" />
                  </a>
                </li>
              </ul>
            </div>
          </Navbar>
        </div>


        
      </header>

      
    </>
  );
}

export default Header;
