import React from 'react';



function Contactus() {
  return (
    <div className=" bg-black mx-auto  px-4 md:px-6 lg:px-8">
      <div className="container  mx-auto  px-4 md:px-6 lg:px-8">
        <div className="Contactus1 bg-black text-white bg-black text-center py-5">
          <h1>LET`S GET TO WORK</h1>

          <p>
            Get in touch with us today to discuss how we can help your business
            thrive. Contact us now for a free consultation.
          </p>
          <button className="startedbutton border-2 border-transparent bg-yellow-400 hover:duration-500 hover:bg-slate-950 text-black hover:text-white hover:border-yellow-400 px-4 p-2.5 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
