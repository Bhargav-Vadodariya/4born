import React from 'react'

import { useState, useEffect } from 'react';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the navbar should be sticky based on scroll position
      setIsSticky(window.pageYOffset > 0); // Example: sticky when scrolled past top
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className=" bg-black mx-auto  flex justify-between items-center">
        <div className="container">
          <div className="Logo  mr-10">
            <a className="navbar-brand" href="index">
              <img
                src="src/assets/images/final-logo-4born.svg"
                className="img-fluid"
              />
            </a>
            <div className="flex justify-end space-x-4 items-center">
              <a
                href="/"
                className="text-md text-lg font-semibold px-4 text-yellow-400"
              >
                Home
              </a>
              {['About', 'Service', 'Portfolio', 'Product', 'Rate Card'].map(
                (text, index) => (
                  <a
                    key={index}
                    href={`/${text}`}
                    className="text-md text-lg font-semibold px-4 transition-colors duration-200 ease-in-out hover:text-yellow-400"
                  >
                    {text}
                  </a>
                ),
              )}
              {/* <button className="bg-[#facc15] text-black px-4 p-4   rounded-md hover-black out"> */}
              <button className="border-2 border-transparent bg-yellow-400 hover:duration-500 hover:bg-slate-950 text-black hover:text-white hover:border-yellow-400 px-4 p-4 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}   
export default React.memo(Navbar);

 
