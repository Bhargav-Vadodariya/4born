import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from 'react-bootstrap'; // Import only what you need


import { BiListUl } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Navdropdown from './Navdropdown';


// In your Navbar or other components:

function MyNavbar() {
  // Renamed for clarity
  const [isSticky, setIsSticky] = useState(false);
  const [show, setShow] = useState(false); // State for offcanvas
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () =>
      window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${isSticky ? 'sticky' : ''} bg-black flex `}
    >
      {' '}
      {/* Combined sticky logic, default bg-black */}
      <Container
        fluid
        className="container inline-flex justify-content-end px-2 md:px-6 lg:px-8"
      >
        {' '}
        {/* Added responsive container */}
        <Navbar.Brand
          placement="start"
          className="justify-content-start"
          to="/"
        >
          <img
            src="src/assets/images/final-logo-4born.svg"
            alt="Logo"
            className="w-auto h-8 "
          />{' '}
          {/* Adjusted logo size */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
          className="border-none bg-transparent"
        >
          <BiListUl />
        </Navbar.Toggle>
        {/* Added toggle button */}
        <Navbar.Offcanvas placement="end" show={show} onHide={handleClose}>
          {' '}
          {/* Offcanvas content */}
          <Offcanvas.Header closeButton className="text-white bg-black">
            <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>{' '}
            {/* Simple title */}
          </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end bg-black">
            <Nav className="justify-content-end spl-nav flex flex  space-x-2 px-2">
              {' '}
              {/* Vertical navigation */}
              <div className="group flex flex space-x-2">
                {' '}
                <Link
                  to="/"
                  className="link-text text-lg text-white font-semibold hover:text-yellow-400 transition-colors duration-500"
                >
                  Home
                </Link>
                <Navdropdown />
                <Link
                  to="/about"
                  className="link-text transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  to="/Portfolio"
                  className="link-text transition-colors duration-300"
                >
                  Portfolio
                </Link>
                <Link
                  to="/Product"
                  className="link-text transition-colors duration-300"
                >
                  Product
                </Link>
                <Link
                  to="/RateCard"
                  className="link-text transition-colors duration-300"
                >
                  Rate Card
                </Link>
              </div>
            </Nav>

            <Link
              to="/Contact"
              className="contactus text-decoration-none text-black border-2 border-transparent bg-yellow-400 hover:bg-slate-950 hover:!text-white hover:border-yellow-400 px-3 py-2 rounded-md transition-all duration-200 ease-in-out"
            >
              {' '}
              {/* Consistent button style */}
              Contact Us
            </Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
