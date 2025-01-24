import React from 'react';
import Navbar from '../components/mainpage/Navbar';
import Footer from './mainpage/Footer';
import Nodeimg from '../assets/images/Branding.svg';
import benifit1 from '../assets/images/benefit1.svg';
import benifit2 from '../assets/images/benefit2.svg';
import processimg from '../assets/images/BigDataProcess.svg';

function Bigdata() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="Python-title-area-1 text-center bg-black  py-5">
          <div className="col-lg-12 py-10 bg-black">
            <div className="section-content">
              <div className="section-title">
                <h2 className="text-white text-5xl font-semibold ">BigData</h2>
                <div className="breatcome-text flex justify-center items-center section-text text-lg font-thin  text-[#FFBC00]">
                  <a className="no-underline text-white" href="/about">
                    <span className="text-[#FFBC00]  ">Home</span>
                    BigData
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Python-section-1 bg-[#0D0D0D] py-10">
          <div className="container overflow-hidden bg-[#0D0D0D]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
              <div className="w-full md:w-[600px] lg:w-[600px]">
                <img
                  src={Nodeimg}
                  className="w-full h-auto rounded-md shadow-md"
                  alt="Python"
                />
              </div>
              <div className="text-left pt-5 md:pt-0 px-4  md:px-0 ">
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Infrastructure That Is Scalable for Big Data Handling
                  </h1>
                  <p className="text-[#919da4] tracking-wide leading-7 text-base font-['Montserrat']">
                    Privacy and security are critical in the Big Data world. We
                    guarantee strict security protocols, such as data
                    encryption, access limits, and adherence to legal
                    requirements, in order to protect confidential data and
                    preserve data integrity.
                  </p>
                </div>
                <div className="about-check-text">
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Big Data: Advancing Creativity and Development
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Prospective Analysis and Future Verification
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>{' '}
                    Boost Your Plan Using Big Data Knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Python-feature-area bg-[#0D0D0D] py-10 text-center">
          <div className="container">
            <div className="row flex pb-10">
              <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="dreamit-section-title">
                  <h4 className=" text-[#FFBC00]">Wallet Connection</h4>

                  <h1 className="text-5xl font-bold text-white">
                    Benefit of Wallet Connection
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benifit-area bg-[#0D0D0D] py-10 pt-9 pb-10">
          <div className="container">
            <div class="row">
              <div class="col-lg-12 col-md-12"></div>
            </div>
            <div class="row flex flex-wrap justify-start align-left items-start">
              <div className="col-lg-6 col-md-6">
                <div
                  className="benifit-single-box wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="benifit-inner-box">
                    <div className="benifit-top-title text-white  pb-3">
                      <h4 className="text-2xl font-semibold">
                        Processing Data in Real Time for Quick Actionability
                      </h4>
                    </div>
                    <div class="dreamit-single-thumb">
                      <img src={benifit1} class="img-fluid" alt="" />
                    </div>
                    <div class="benefit-title text-[#919DA4]">
                      <p>
                        Utilize our solutions to fully utilize the power of
                        real-time data processing. Acquire real-time
                        information, react quickly to evolving trends, and take
                        advantage of new opportunities in the ever-changing
                        digital world.
                      </p>
                    </div>
                    <div className="about-check-text">
                      <p className='text-white'>
                        <span>
                          <i
                            className="tick fa-solid fa-circle-check"
                            // style="color: #FFBC00;"
                          />
                        </span>
                        Real-time Data Processing
                      </p>
                      <p className='text-white'>
                        <span>
                          <i
                            className="tick fa-solid fa-circle-check"
                            // style="color: #FFBC00;"
                          />
                        </span>
                        Data Governance Expertise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="benifit-single-box wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="benifit-inner-box">
                    <div className="benifit-top-title text-white pb-3">
                      <h4 className="text-2xl font-semibold">
                        Entire Big Data Solutions Customized for You
                      </h4>
                    </div>
                    <div class="dreamit-single-thumb">
                      <img src={benifit2} class="img-fluid" alt="" />
                    </div>
                    <div class="benefit-title text-[#919DA4]">
                      <p>
                        At 4Born, we offer end-to-end Big Data solutions,
                        customized to suit your specific needs. From data
                        collection to analysis and visualization, our services
                        cover the entire spectrum of Big Data management,
                        ensuring a seamless and efficient data journey.
                      </p>
                    </div>
                    <div className="about-check-text">
                      <p className='text-white'>
                        <span>
                          <i
                            className="tick fa-solid fa-circle-check"
                            // style="color: #FFBC00;"
                          />
                        </span>
                        Customized Big Data Solutions
                      </p>
                      <p className='text-white'>
                        <span>
                          <i
                            className="tick fa-solid fa-circle-check"
                            // style="color: #FFBC00;"
                          />
                        </span>
                        Advanced Analytics Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Python-section-1 bg-[#0D0D0D] py-10">
          <div className="container overflow-hidden bg-[#0D0D0D]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
              <div className="text-left pt-5 md:pt-0 px-4  md:px-0 ">
                <div className="mb-6">
                  <h3 className="text-xl align-start  text-[#FFBC00] mb-2">
                    Revealing Big Data's Power
                  </h3>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Big Data: Converting Understanding into Creativity
                  </h1>
                  <p className="text-[#919da4] tracking-wide leading-7 text-base font-['Montserrat']">
                    Big Data is about the potential that lies within this
                    enormous pool of data, not merely about quantity of
                    information. Our expertise at 4Born Solutions is using Big
                    Data to drive innovation across industries, extract valuable
                    insights, and harness its potential.
                  </p>
                </div>
                <div className="about-check-text">
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Understanding the Essence of Big Data
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Big Data for Improving Business Intelligence
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[500px] lg:w-[500px]">
                <img
                  src={processimg}
                  className="w-full h-auto rounded-md shadow-md"
                  alt="Python"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Bigdata;
