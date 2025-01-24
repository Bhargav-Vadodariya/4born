import React from 'react';
import bhautikimg from '../mainpage/bhautik-profile.svg';

function Aboutus() {
  return (
    <div className=" bg-black ">
      <div className="container mx-auto  md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h5 className="text-lg font-semibold text-[#fabb04] mb-2">
            About Us
          </h5>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About 4Born Solutions
          </h1>
          <p className="text-gray-400 text-lg">
            Welcome to 4Born Solution, a place where technological advancement
            and creativity meet to expand possibilities.
          </p>
        </div>
        <div className="bg-[url('../src/assets/images/service-bg.png')] bg-cover bg-center bg-no-repeat rounded-lg px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-lg overflow-hidden">
          {' '}
          {/* Added rounded corners and overflow hidden */}
          <div className="lg:text-left lg:bg-transparent p-6 pl-5 lg:p-0 rounded-lg">
            {' '}
            {/* Text content container with background and padding */}
            <h2 className="text-4xl font-semibold text-white pl-5 mb-4">
              Our Story
            </h2>
            <p className="text-gray-400 text-lg">
              4Born Solutions is a software development company that provides
              cutting-edge solutions to businesses and individuals. We are
              dedicated to providing the best possible service to our clients.
              <br />
              We are passionate about technology and strive to stay ahead of the
              curve by constantly innovating and improving our services. At
              4Born Solutions, we believe that technology has the power to
              transform businesses and change lives. We are committed to helping
              our clients achieve their goals and realize their full potential.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 mx-4 px-5 rounded-md mt-6 transition duration-300">
              Get Started Now
            </button>
          </div>
          <div>
            <img
              src={bhautikimg}
              alt="About Us"
              className="rounded-lg shadow-md w-full h-auto lg:max-w-[400px] mx-auto"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;


