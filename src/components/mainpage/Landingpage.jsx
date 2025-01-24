import React, { useRef, useEffect } from 'react';



function Landingpage() {
  const orbitingImageRef = useRef(null);
    useEffect(() => {
      let animationFrameId;
      let rotation = 0;

      const animate = () => {
        if (orbitingImageRef.current) {
          rotation += 0.5;
          orbitingImageRef.current.style.transform = `rotate(${rotation}deg)`;
        }
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
        
        
  return (
    <div className="bg-black flex justify-center items-center h-auto py-12"> {/* Hero section, full viewport height */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center"> {/* Single container, responsive padding */}
        <div className="text-left lg:text-left lg:w-1/2 mb-8 lg:mb-0"> {/* Text content container */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Welcome to 4Born Solutions</h1> {/* Combined titles */}
          <p className="text-[#919da4] text-base md:text-lg  mb-6"> {/* Description */}
            At 4Born Solutions, we specialize in delivering cutting-edge solutions in the realm of Backend development, Big Data analytics, Blockchain technology, and Branding strategies.
          </p>
          <button className="startedbutton bg-yellow-400 hover:bg-slate-950 text-black hover:text-white hover:border-yellow-400 border-2 border-transparent font-bold py-2 px-4 rounded-md transition duration-300"> {/* Button with transition */}
            Get Started Now
          </button>
        </div>
        <div className="lg:w-1/2 relative mt-8 lg:mt-0"> {/* Image container, responsive and positioned relative */}
          <img src="src/assets/images/first-bg.svg" alt="Background" className="w-full h-auto max-w-md mx-auto lg-mx-0" /> {/* Background image */}
          <img src="src/assets/images/circle-area.svg" alt="Orbit" 
          className="absolute top-0 left-1 transform -translate-x-1/2 -translate-y-1/2  w-full h-full"
          ref={orbitingImageRef}
          style={{transition: 'transform 5s linear infinite'}} /> {/* Orbiting image */}
        </div>
      </div>
    </div>
  );
}


export default Landingpage;
