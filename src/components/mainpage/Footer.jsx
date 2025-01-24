import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-area bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="footer-about">
            <div className="Logo flex justify-center items-center mb-4">
              <a className="footer-logo" href="/">
                <img
                  src="src/assets/images/final-logo-4born.svg"
                  className=""
                  alt=""
                />
              </a>
            </div>
            <p className="text-[#7E7E7E] py-2">
              4Born Solutions is a software development company that specializes
              in creating custom web and mobile applications.
            </p>
            <div className="icons flex space-x-4 py-2 text-2xl text-[#7E7E7E]  p-2 rounded-md justify-center md:justify-start">
              {' '}
              {/* Improved styling and responsiveness */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social transition-colors duration-300"
              >
                <FaLinkedin />
              </a>{' '}
              {/* Added links and hover effect */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social  transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social  transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social  transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social  transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h1 className=" text-white text-2xl font-bold">Usefull Links</h1>
            <ul className="py-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <Link to="/Python">Python</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h1 className="text-white text-2xl font-bold">Our Services</h1>
            <ul className="py-2">
              <li>
                <Link to="/Nodejs">Node JS</Link>
              </li>
              <li>
                <Link to="/Php development">PHP Development</Link>
              </li>
              <li>
                <Link to="/Blockchain">Blockchain </Link>
              </li>
              <li>
                <Link to="/Branding">Branding</Link>
              </li>
              <li>
                <Link to="/Bigdata">Big Data</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h1 className="text-white text-2xl font-bold">Contact</h1>
            <ul className="py-2">
              <li>
                <a href="#">contact@4born.com </a>
              </li>
              <li>
                <a href="#">sales@4born.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <hr className="border-[#7E7E7E] my-4" />
          <p className="text-center text-lg text-white">
            &copy; Copyright{' '}
            <a href="/" style={{ textDecoration: 'none' }}>
              <span style={{ textDecoration: 'none', color: '#FFBC00' }}>
                4Born Solutions.
              </span>
            </a>{' '}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer
