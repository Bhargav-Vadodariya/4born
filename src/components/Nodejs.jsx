import React from 'react'
import  Navbar  from '../components/mainpage/Navbar';
import Footer from './mainpage/Footer';
import Nodeimg from '../assets/images/Backend.svg';
import { HiLightBulb } from 'react-icons/hi';
import icon1 from '../assets/images/techseven.svg';
import icon2 from '../assets/images/techeight.svg';
import icon3 from '../assets/images/technine.svg';

function Nodejs() {
  return (
    <div>
      <Navbar />
      <div className="Python-title-area-1 text-center bg-black  py-5">
        <div className="col-lg-12 py-10 bg-black">
          <div className="section-content">
            <div className="section-title">
              <h2 className="text-white text-5xl font-semibold ">
                Node JS Development
              </h2>
              <div className="flex justify-center items-center section-text text-lg font-thin  text-[#FFBC00]">
                <a className="no-underline text-white" href="/about">
                  <span className="text-[#FFBC00] px-2 ">
                    Home
                    <span
                      style={{
                        position: 'relative',
                        top: '14px',

                        fontSize: '4rem',
                      }}
                    >
                      -
                    </span>
                  </span>
                  Node JS
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
                <h3 className="text-xl align-start  text-[#FFBC00] mb-2">
                  Node.js for Web Applications And API
                </h3>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Using Node.js to Strengthen Online Applications
                </h1>
                <p className="text-[#919da4] tracking-wide leading-7 text-base font-['Montserrat']">
                  Our Node.js services revolutionize the creation of web
                  applications by utilizing its event-driven, non-blocking
                  architecture. Our specialty is developing scalable, blazingly
                  fast web apps that guarantee the best possible user
                  experiences. Our proficiency with Node.js guarantees a strong
                  basis for your online presence, ranging from intricate
                  enterprise-grade systems to single-page apps (SPAs).
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
                  Node.js for IoT (Internet of Things)
                </p>
                <p>
                  <span>
                    <i
                      className="tick fa-solid fa-circle-check"
                      // style="color: #FFBC00;"
                    />
                  </span>
                  Node.js for Real-Time Data Processing
                </p>
                <p>
                  <span>
                    <i
                      className="tick fa-solid fa-circle-check"
                      // style="color: #FFBC00;"
                    />
                  </span>{' '}
                  Node.js for Microservices Architecture
                </p>
                <p>
                  <span>
                    <i
                      className="tick fa-solid fa-circle-check"
                      // style="color: #FFBC00;"
                    />
                  </span>
                  Node.js for Cloud-Native Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="python-steps-section bg-black py-10">
        <div className="container">
          <div className="roadmap-heading text-center text-white pt-16 mb-10">
            <h1 className="text-4xl font-bold ">Development Steps</h1>
            <p className="text-base font-thin text-[#919da4] py-4">
              Steps to Build an API for E-Commerce Website Development
            </p>
          </div>
          <div className="row flex flex-wrap">
            {/* left */}
            <div className="col-lg-6 col-md-6 ">
              <div className="col-lg-12">
                <div
                  className="single-rodmap-box absolute wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="roadmap-content px-3 py-4">
                    <h3 className="text-white font-weight-600">
                      Configuration and Setup of the Environment
                    </h3>

                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      Configure project structure and version control (using
                      Git, for example).
                    </p>
                  </div>
                </div>

                <div className="singles-rodmaps-boxs wow fadeInLeft data-wow-delay='0.4s">
                  <div className="rodmap-content  text-[#FFBC00]">
                    <h1>02</h1>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div
                  className="single-rodmap-box absolute wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="roadmap-content px-3 py-4">
                    <h3 className="text-white font-weight-600">
                      Developing Backends with Node.js
                    </h3>

                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      Put in place GraphQL endpoints or RESTful APIs. Install
                      middleware to handle errors, authenticate users, and route
                      traffic.
                    </p>
                  </div>
                </div>
                <div className="singles-rodmaps-boxs wow fadeInLeft data-wow-delay='0.4s">
                  <div className="rodmap-content  text-[#FFBC00]">
                    <h1>04</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="col-lg-6 col-md-6">
              <div className="col-lg-12">
                <div className="singles-rodmaps-boxs wow fadeInLeft data-wow-delay='0.4s">
                  <div className="rodmap-content1  text-[#FFBC00]">
                    <h1>01</h1>
                  </div>
                </div>
                <div
                  className="single-rodmap-box-right absolute wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="roadmap-content px-3 py-4">
                    <h3 className="text-white font-weight-600">
                      Database Integration
                    </h3>

                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      Connect Node.js to the selected database using libraries
                      or ORM (Object-Relational Mapping) frameworks like
                      Mongoose or Sequelize.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="singles-steps-boxs wow fadeInLeft data-wow-delay='0.4s">
                  <div className="rodmap-content1  text-[#FFBC00]">
                    <h1>03</h1>
                  </div>
                </div>
                <div className="step-box col-lg-12">
                  <div
                    className="single-steps-box-right absolute wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <div className="roadmap-content px-3 py-4">
                      <h3 className="text-white font-medium">
                        Deploy and Monitor
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Install the API in a live environment and configure
                        tools for tracking usage statistics, performance, and
                        any problems. Make use of built-in platform monitoring
                        tools or solutions such as DataDog and New Relic.
                      </p>
                    </div>
                  </div>
                </div>
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
                <h4 className=" text-[#FFBC00]">4Born Solutions FEATURES</h4>

                <h1 className="text-5xl font-bold text-white">
                  The most trusted way
                </h1>
              </div>
            </div>
          </div>
          <div className="row flex flex-wrap py-10">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="feature-single-box group relative overflow-hidden">
                <div className="feature-box-inner ">
                  <div className="feature-icon1 ">
                    <i className="icon  group-hover:bg-[#FFBC00]">
                      <img src= {icon1}
                      className=" h-8 w-8   group-hover:text-black " />
                    </i>
                  </div>
                  <div className="feature-title p-4">
                    <h3>Node.js: Transforming IoT Solutions</h3>
                    <p>
                      Discover how Node.js and IoT technologies are combining.
                      We provide Node.js-powered IoT application and platform
                      development services. Transforming IoT Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="feature-single-box group">
                <div className="feature-box-inner">
                  <div className="feature-icon1 ">
                    <i className="icon group-hover:bg-[#FFBC00]">
                      <img src= {icon2}
                      className="  h-8 w-8  group-hover:text-black " />
                    </i>
                  </div>
                  <div className="feature-title">
                    <h3>Creating Competent Groups for API Solutions</h3>
                    <p>
                      In addition to providing API solutions, 4Born
                      SolutionWhether you require an API development team,
                      integration experts, or support specialists, we can
                      provide your company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="feature-single-box group">
                <div className="feature-box-inner">
                  <div className="feature-icon1 ">
                    <i className="icon  group-hover:bg-[#FFBC00]">
                      <img src={icon3} className="    group-hover:text-black " />
                    </i>
                  </div>
                  <div className="feature-title">
                    <h3>Real-Time Data Processing Excellence with Node.js</h3>
                    <p>
                      Utilize Node.js's strength for your demands in processing
                      data in real time. Building apps that require real-time
                      data processing and updating is our area of expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="feature-bottom-text text-white pt-2  text-center">
              <p className="text-center flex justify-center items-center align-center ">
                <i className="icon !flex !justify-center !items-center !align-center">
                  <HiLightBulb className="w-5 h-5" />
                </i>
                Do you Know More?
                <span>
                  <a href="/Contact" className=" ml-1 text-[#FFBC00]">
                    Lets Connect
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nodejs;
