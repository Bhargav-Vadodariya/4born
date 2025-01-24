import React from 'react';
import Navbar from '../components/mainpage/Navbar';
import Footer from './mainpage/Footer';
import Blockchainimg from '../assets/images/Blockchain.svg';
import { HiLightBulb } from 'react-icons/hi';
import icon1 from '../assets/images/tone.svg';
import icon2 from '../assets/images/ttwo.svg';
import icon3 from '../assets/images/tthree.svg';

function Blockchain() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="Python-title-area-1 text-center bg-black  py-5">
          <div className="col-lg-12 py-10 bg-black">
            <div className="section-content">
              <div className="section-title">
                <h2 className="text-white text-5xl font-semibold ">
                  Blockchain Technology
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
                    Blockchain
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
                  src={Blockchainimg}
                  className="w-full h-auto rounded-md shadow-md"
                  alt="Python"
                />
              </div>
              <div className="text-left pt-5 md:pt-0 px-4  md:px-0 ">
                <div className="mb-6">
                  <h3 className="text-xl align-start  text-[#FFBC00] mb-2">
                    We include AI-driven solutions.
                  </h3>
                  <h1 className="text-5xl font-bold text-white mb-4">
                    To improve user experiences and increase engagement, we
                    include AI-driven solutions.
                  </h1>
                  <p className="text-[#919da4] tracking-wide leading-7 text-base font-['Montserrat']">
                    With 4Born Solutions, explore the disruptive potential of
                    blockchain technology. As a pioneer in the field of
                    distributed ledger technology, we provide a range of
                    specialized services that enable blockchain technology to
                    transform a number of industries.
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
                    Blockchain technology solutions
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Custom blockchain development
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>{' '}
                    Decentralized applications (DApps).
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Blockchain integration consultation
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
                        Define Project Objectives and Requirements
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Determine the purpose and specific use case for your
                        blockchain application (e.g., cryptocurrency, supply
                        chain, identity management).
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
                        Select Framework or Platform
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Choose a suitable blockchain platform (e.g., Ethereum,
                        Hyperledger, Corda) based on your project requirements,
                        scalability needs, and consensus mechanisms.
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
                        Private or Public Blockchain
                      </h3>

                      <p className="text-[#919da4] font-weight-400 line-height-28">
                        Decide whether to use a public blockchain (accessible to
                        all) or a private/permissioned blockchain (restricted
                        access).
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
                          Implement Smart Contracts
                        </h3>

                        <p className="text-[#919da4] font-weight-400 line-height-28">
                          Develop smart contracts using programming languages
                          like Solidity (for Ethereum) or Chaincode (for
                          Hyperledger Fabric) to automate transactions and
                          enforce rules.
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
                    The most trusted way for <br />
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
                        <img
                          src={icon1}
                          className=" h-8 w-8   group-hover:text-black "
                        />
                      </i>
                    </div>
                    <div className="feature-title p-4">
                      <h3>Blockchain-as-a-Service (BaaS) Solutions</h3>
                      <p>
                        Our BaaS solutions give organizations scalable,
                        affordable blockchain infrastructure so they can
                        concentrate on innovation rather than the hassles of
                        managing the underlying technology.
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
                      <h3>Utilize 4Born Solutions to Experience Innovation</h3>
                      <p>
                        Our dedication to providing state-of-the-art solutions
                        and in-depth knowledge of blockchain's possibilities
                        guarantee that your foray into the realm of
                        decentralized technology is met with success.
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
                      <h3>Secure Blockchain Integration and Consultation</h3>
                      <p>
                        We help you navigate the complexities of integrating
                        blockchain technology while guaranteeing efficiency,
                        security, and compatibility. Take advantage of our
                        advice on how to use distributed ledger technology to
                        improve security and expedite operations.
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
    </div>
  );
}

export default Blockchain;
