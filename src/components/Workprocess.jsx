import React from 'react'

function Workprocess() {
  return (
    <div className="process-area bg-black pt-[2rem] pb-[1rem]">
      <div className="container bg-black  mx-auto py-10 px-4 md:px-6 lg:px-8">
        <div className="Workprocess1 bg-black text-white bg-black text-center py-5">
          <h5>WORK PROCESS</h5>
          <h1>Our Work Process</h1>
          <p>
            Our methodical, effective, and goal-oriented approach to achieving
            outstanding <br /> results at 4Born Solutions is intended to
            optimize results at each phase of the <br /> project.
          </p>
        </div>
        <div className="Workprocess2 py-10 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex justify-center align-center">
            <div className="process flex flex-col items-center">
              <div className="process-thumb bg-[#15161C] flex flex-col items-center justify-center p-5 rounded-md">
                <img
                  src="src/assets/images/workFlow1.svg"
                  alt="process"
                  className="transition-transform duration-300 transform hover:scale-x-[-1]"
                />
                <div className="number">
                  <span>01</span>
                </div>
              </div>
              <div className="process-detail flex flex-col items-center mx-9">
                <h1 className="process-name text-center text-white text-2xl font-bold py-2 ">
                  Planning
                </h1>
                <p className="text-center px-5 text-[#7E7E7E]">
                  We start by carefully considering your vision, objectives, and
                  particular needs
                </p>
              </div>
            </div>
            <div className="process flex flex-col items-center">
              <div className="process-thumb bg-[#15161C] flex flex-col items-center justify-center p-5 rounded-md">
                <img
                  src="src/assets/images/workFlow2.svg"
                  alt="process"
                  className="transition-transform duration-300 transform hover:scale-x-[-1]"
                />
                <div className="number">
                  <span>02</span>
                </div>
              </div>
              <div className="process-detail flex flex-col items-center mx-9">
                <h1 className="process-name text-center text-white text-2xl font-bold py-2 ">
                  Prototyping
                </h1>
                <p className="text-center px-5 text-[#7E7E7E]">
                  We start by carefully considering your vision, objectives, and
                  particular needs
                </p>
              </div>
            </div>
            <div className="process flex flex-col items-center">
              <div className="process-thumb bg-[#15161C] flex flex-col items-center justify-center p-5 rounded-md">
                <img
                  src="src/assets/images/workFlow3.png"
                  alt="process"
                  className="transition-transform duration-300 transform hover:scale-x-[-1]"
                />
                <div className="number">
                  <span>03</span>
                </div>
              </div>
              <div className="process-detail flex flex-col items-center mx-9">
                <h1 className="process-name text-center text-white text-2xl font-bold py-2 ">
                  Development & Deployment
                </h1>
                <p className="text-center px-5 text-[#7E7E7E]">
                  We start by carefully considering your vision, objectives, and
                  particular needs
                </p>
              </div>
            </div>
            <div className="process flex flex-col items-center">
              <div className="process-thumb bg-[#15161C] flex flex-col items-center justify-center p-5 rounded-md">
                <img
                  src="src/assets/images/workFlow4.svg"
                  alt="process"
                  className="transition-transform duration-00 transform hover:scale-x-[-1]"
                />
                <div className="number">
                  <span>04</span>
                </div>
              </div>
              <div className="process-detail flex flex-col items-center mx-9">
                <h1 className="process-name text-center text-white text-2xl font-bold py-2 ">
                  Product Launching
                </h1>
                <p className="text-center px-5 text-[#7E7E7E]">
                  We start by carefully considering your vision, objectives, and
                  particular needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workprocess;
