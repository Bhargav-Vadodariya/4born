
import React from 'react';
import Navbar from '../components/mainpage/Navbar';
import Footer from './mainpage/Footer';
import phpimg from '../assets/images/PHPDevelopmentService.svg';
import { HiLightBulb } from 'react-icons/hi';
import icon1 from '../assets/images/techseven.svg';
import icon2 from '../assets/images/techeight.svg';
import icon3 from '../assets/images/technine.svg';

function PHP() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="Python-title-area-1 text-center bg-black  py-5">
          <div className="col-lg-12 py-10 bg-black">
            <div className="section-content">
              <div className="section-title">
                <h2 className="text-white text-5xl font-semibold ">
                  PHP Backend Service
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
                    PHP Backend Service
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
                  src={phpimg}
                  className="w-full h-auto rounded-md shadow-md"
                  alt="Python"
                />
              </div>
              <div className="text-left pt-5 md:pt-0 px-4  md:px-0 ">
                <div className="mb-6">
                  <h3 className="text-xl align-start  text-[#FFBC00] mb-2">
                    PHP Development Services
                  </h3>
                  <h1 className="text-5xl font-bold text-white mb-4">
                    Using PHP to Create Dynamic Backend Solutions
                  </h1>
                  <p className="text-[#919da4] tracking-wide leading-7 text-base font-['Montserrat']">
                    At 4Born Solutions, our PHP development services are geared
                    towards building robust backend systems that power your
                    digital presence. Our proficient team excels in leveraging
                    PHP's flexibility and scalability to create tailored
                    solutions that meet your specific business needs.
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
                    API Development
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    E-commerce Development
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>{' '}
                    PHP Web Development
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
                        Specify the needs and goals.
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Describe the objective of your API. Ascertain the
                        features it will provide, including payment processing,
                        user authentication, access to the product catalog, etc.
                        Verify compliance with the specifications of the
                        e-commerce platform.
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
                        Specify Core Functionality
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Begin developing the essential features and
                        functionalities of the API. This entails setting up
                        endpoints for crucial functions such as checkout,
                        payment processing, user administration, cart
                        management, and product listing.
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
                        Create the API.
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Design an API that is complete, with endpoints, data
                        types (JSON, XML), authentication techniques (OAuth, API
                        keys), and error-handling procedures included. For
                        logical and understandable endpoints, adhere to RESTful
                        standards.
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
                  <h1 className="text-5xl font-bold text-white">
                    PHP Development
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
                        <img
                          src={icon1}
                          className=" h-8 w-8   group-hover:text-black "
                        />
                      </i>
                    </div>
                    <div className="feature-title p-4">
                      <h3>Dynamic Backend Solutions with PHP</h3>
                      <p>
                        The best approaches for planning and overseeing APIs to
                        build backend systems that are both scalable and
                        effective.techniques for database optimization in
                        backend systems to increase scalability and performance.
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
                        <img
                          src={icon2}
                          className="  h-8 w-8  group-hover:text-black "
                        />
                      </i>
                    </div>
                    <div className="feature-title">
                      <h3>API Development and Integration Expertise</h3>
                      <p>
                        With our expertise in API development and integration,
                        unleash the power of your systems. Our teams are experts
                        at creating APIs, which act as the framework for
                        networked systems and facilitate data interchange and
                        communication across apps.
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
                        <img
                          src={icon3}
                          className="    group-hover:text-black "
                        />
                      </i>
                    </div>
                    <div className="feature-title">
                      <h3>Creating Competent Groups for API Solutions</h3>
                      <p>
                        In addition to providing API solutions, 4Born
                        SolutionWhether you require an API development team,
                        integration experts, or support specialists, we can
                        provide your company with the proper people to
                        effectively manage and develop your API infrastructure.s
                        also helps you create competent teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PHP
