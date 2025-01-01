import React from 'react'
import bhautikimg from '../assets/images/bhautik-profile.svg'

function Aboutus() {
  return (
    <div className="aboutus bg-black text-center py-5">
      <div className="container bg-black">
        <h5>About Us</h5>
        <h1> About 4Born Solutions</h1>
        <h6>
          Welcome to 4Born Solution, a place where technological advancement and{' '}
          <br /> creativity meet to expand possibilities.{' '}
        </h6>
      </div>
      <div className="container mx-auto">
        <div className="Ourstory grid grid-cols-2 gap-8">
          <div className="ourstory-left">
            <h1>Our Story</h1>
            <p>
              4Born Solutions is a software development company that provides
              cutting-edge solutions to businesses and individuals. We are
              dedicated to providing the best possible service to our clients.
              <br /> We are passionate about technology and strive to stay ahead
              of the curve by constantly innovating and improving our services.
              At 4Born Solutions, we believe that technology has the power to
              transform businesses and change lives. We are committed to helping
              our clients achieve their goals and realize their full potential.
            </p>
            <button className="startedbutton2 mt-5">
              <span className="button-text py-3 bg-yellow-400 hover:bg-slate-950 text-black hover:text-white hover:border-yellow-400 border-2 border-transparent font-semibold py-2 px-4 rounded-md transition duration-300">
                Get Started Now
              </span>
            </button>
          </div>
          <div className="ourstory-right">
            <img src={bhautikimg} alt="Aboutus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
