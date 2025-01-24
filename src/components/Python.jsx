import React from 'react'
import Navbar from '../components/mainpage/Navbar';
import Footer from '../components/mainpage/Footer';
import Pythonimg from '../assets/images/Python.png';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { LuLayers3 } from 'react-icons/lu';
import { MdSecurity } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import '../index.css';


function Python() {
  return (
    <div>
      <Navbar />
      <div className="Python-title-area-1 text-center bg-black  py-5">
        <div className="col-lg-12 py-10 bg-black">
          <div className="section-content">
            <div className="section-title">
              <h2 className="text-white text-5xl font-semibold ">Python</h2>
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
                  Python
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
                src={Pythonimg}
                className="w-full h-auto rounded-md shadow-md"
                alt="Python"
              />
            </div>
            <div className="text-left pt-5 md:pt-0 px-4  md:px-0 ">
              <div className="mb-6">
                <h3 className="text-xl align-start  text-[#FFBC00] mb-2">
                  Full-Stack Web Development Excellence
                </h3>
                <h1 className="text-5xl font-bold text-white mb-4">
                  API Development and <br />
                  Integration Solutions
                </h1>
                <p className="text-[#919da4] tracking-wide leading-7 text-base font-['Montserrat']">
                  Gain extensive experience with full-stack programming by
                  utilizing Python's flexibility. We are skilled not just in
                  backend programming but also in creating frontend interfaces
                  that are responsive by combining JavaScript libraries like
                  React or Vue.js with Python-based frameworks like Django. User
                  experiences are smooth and interesting because to this
                  integration.
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
                  Dynamic Backend Development with Python
                </p>
                <p>
                  <span>
                    <i
                      className="tick fa-solid fa-circle-check"
                      // style="color: #FFBC00;"
                    />
                  </span>
                  Full-Stack Web Development Excellence
                </p>
                <p>
                  <span>
                    <i
                      className="tick fa-solid fa-circle-check"
                      // style="color: #FFBC00;"
                    />
                  </span>{' '}
                  API Development and Integration Solutions
                </p>
                <p>
                  <span>
                    <i
                      className="tick fa-solid fa-circle-check"
                      // style="color: #FFBC00;"
                    />
                  </span>
                  AI and Data-Driven Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="python-steps-section bg-black py-10">
        <div className="container">
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
                      Project Architecture and Design
                    </h3>

                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      Outline the structure, components, and modules of the web
                      application.
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
                      Implement Backend Logic
                    </h3>

                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      Develop backend functionalities such as URL routing,
                      request handling, authentication, and business logic.
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
                      Create Wireframes or Prototypes
                    </h3>

                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      Develop mockups to visualize the website's layout and user
                      interface.
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
                        Configure Environment Variables
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Develop mockups to visualize the website's layout and
                        user interface.
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
                <h4 className=" text-[#FFBC00]">CRYPTOBIT FEATURES</h4>

                <h1 className="text-5xl font-bold text-white">
                  The most trusted way for
                </h1>

                <h1 className="text-5xl font-bold text-white">
                  Powerfull Influence
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
                      <LuLayers3 className="    group-hover:text-black " />
                    </i>
                  </div>
                  <div className="feature-title p-4">
                    <h3>Excellence in Full-Stack Web Development</h3>
                    <p>
                      We combine the power of Python frameworks such as Django
                      with JavaScript libraries like React or Vue.js to craft
                      responsive, feature-rich frontend interfaces.
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
                      <HiOutlineClipboardDocumentList className="    group-hover:text-black " />
                    </i>
                  </div>
                  <div className="feature-title">
                    <h3>API Development and Integration Solutions</h3>
                    <p>
                      With our Python-based API development services, you can
                      unleash the potential of seamless interactions. We create
                      GraphQL endpoints or RESTful APIs that enable effective
                      communication between various elements of your website or
                      outside services.
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
                      <MdSecurity className="    group-hover:text-black " />
                    </i>
                  </div>
                  <div className="feature-title">
                    <h3>AI and Data-Driven Solutions</h3>
                    <p>
                      Use Python's prowess in data science and AI to improve
                      your website. We are able to incorporate intelligent
                      features thanks to our proficiency in machine learning,
                      natural language processing, and data analytics.To improve
                      user experiences and increase engagement
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
                  <a href="#" className=" ml-1 text-[#FFBC00]">
                    Lets Connect
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-area">
        <div className="container">
          <div className="row flex">
            <div className="col-lg-3 col-md-6">
              <div
                className="counter-single-box  wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="counter-title">
                  <h1>52</h1>
                  <span> +</span>
                  <p>Work Website And Applications</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                class="counter-single-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div class="counter-title">
                  <h1 class="counter">35</h1>
                  <span>+</span>
                  <p>E-commerce Development API</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                class="counter-single-box wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div class="counter-title">
                  <h1>20</h1>
                  <span> +</span>
                  <p>Happy Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div class="counter-single-box wow fadeInLeft" data-wow-delay=".6s">
              <div class="counter-title">
                <h1 class="counter">20</h1>
                <span>+</span>
                <p>International Platform API Call</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Python;
