
import React from 'react';
import Navbar from '../components/mainpage/Navbar';
import Footer from './mainpage/Footer';
import Nodeimg from '../assets/images/Branding.svg';
import icon1 from '../assets/images/techseven.svg';
import icon2 from '../assets/images/techeight.svg';
import icon3 from '../assets/images/technine.svg';
import mailimg from '../assets/images/form.png'
import benifit1 from '../assets/images/benefit1.svg';
import benifit2 from '../assets/images/benefit2.svg';

function Branding() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="Python-title-area-1 text-center bg-black  py-5">
          <div className="col-lg-12 py-10 bg-black">
            <div className="section-content">
              <div className="section-title">
                <h2 className="text-white text-5xl font-semibold ">Branding</h2>
                <div className="breatcome-text flex justify-center items-center section-text text-lg font-thin  text-[#FFBC00]">
                  <a className="no-underline text-white" href="/about">
                    <span className="text-[#FFBC00]  ">Home</span>
                    <span className="text-[#FFBC00] ">Services</span>
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
                    Connection
                  </h3>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Why Go with 4Born for Your Brand?
                  </h1>
                  <p className="text-[#919da4] tracking-wide leading-7 text-base font-['Montserrat']">
                    Selecting 4Born Solutions entails working with a group
                    committed to the success of your company. We combine
                    intuition in design with data-driven insights, experience
                    with innovation, and creativity with strategy. Our goal is
                    to strengthen your brand's voice, enhance its identity, and
                    steer it in the direction of long-term success.
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
                    Let's Build a Remarkable Brand Together
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Building Lasting Connections through Branding
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>{' '}
                    Our Approach to Branding Excellence
                  </p>
                  <button class="contact-us">
                    <img src={mailimg} alt="Mail Icon" />
                    <span>Contact Us</span>
                  </button>
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
                  <h4 className=" text-[#FFBC00]">
                    Brand Impact as a Measure of Success
                  </h4>

                  <h1 className="text-5xl font-bold text-white">
                    Collaborate with 4Born to Transform Your Brand
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
                      <h3>Differentiating Your Brand in Cutthroat Markets</h3>
                      <p>
                        We create distinctive brand identities that set your
                        company apart by emphasizing its special selling points,
                        building credibility, and leaving a lasting impression.
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
                      <h3>Consumer-focused brand interactions</h3>
                      <p>
                        We focus on creating customer-centric brand experiences,
                        understanding their needs, emotions, and aspirations to
                        forge deep and lasting connections.
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
                      <h3>Collaborating for Impact and Brand Resonance</h3>
                      <p>
                        Collaborate with 4Born Solutions to set out on an
                        extraordinary branding adventure. In addition to
                        building brands, our joint efforts seek to resonate with
                        your audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benifit-area bg-[#0D0D0D] py-10 pt-9 pb-10">
          <div className="container">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div
                  class="dreamit-section-title upper1 pb-10 text-center wow fadeInLeft "
                  data-wow-delay=".3s"
                >
                  <h1 class="section-title text-white">
                    Creating Visual Signatures that Make a Statement
                  </h1>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap justify-start align-left items-start">
              <div className="col-lg-6 col-md-6">
                <div
                  className="benifit-single-box wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="benifit-inner-box">
                    <div className="benifit-top-title text-white pb-3">
                      <h4 className='text-2xl font-semibold'>
                        Interactive Brand Standards for Syncerated Communication
                      </h4>
                    </div>
                    <div class="dreamit-single-thumb">
                      <img src={benifit1} class="img-fluid" alt="" />
                    </div>
                    <div class="benefit-title text-[#919DA4] pt-4">
                      <p>
                        Our brand standards are an interactive resource that
                        helps with brand expression. From vocal inflections to
                        graphic cues,
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
                        Brand Identity Development
                      </p>
                      <p>
                        <span>
                          <i
                            className="tick fa-solid fa-circle-check"
                            // style="color: #FFBC00;"
                          />
                        </span>
                        Branding and Design Agency
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
                      <h4 className='text-2xl font-semibold'>
                        Interactive Brand Standards for Syncerated Communication
                      </h4>
                    </div>
                    <div class="dreamit-single-thumb">
                      <img src={benifit2} class="img-fluid" alt="" />
                    </div>
                    <div class="benefit-title text-[#919DA4] pt-4  ">
                      <p>
                        Our brand standards are an interactive resource that
                        helps with brand expression. From vocal inflections to
                        graphic cues,
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
                        Brand Identity Development
                      </p>
                      <p>
                        <span>
                          <i
                            className="tick fa-solid fa-circle-check"
                            // style="color: #FFBC00;"
                          />
                        </span>
                        Branding and Design Agency
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

export default Branding
