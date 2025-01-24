import React from 'react';
import Navbar from '../components/mainpage/Navbar';
import aboutimg from '../assets/images/about.svg';
import teamwork from '../assets/images/TeamWorkDevelopment.svg'
import icon1 from '../assets/images/4btechone.svg';
import icon2 from '../assets/images/4btechtwo.svg';
import icon3 from '../assets/images/4btechthree.svg';
import Footer from '../components/mainpage/Footer';



const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus-area bg-black text-center py-5">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-content">
                <div className="section-title">
                  <h2 className="text-white">About Us</h2>
                  <div className="flex justify-center items-center section-text text-lg  text-[#FFBC00]">
                    <a className="no-underline text-white" href="/about">
                      <span className="text-[#FFBC00] px-2 ">
                        Home
                        <span
                          style={{
                            position: 'relative',
                            top: '14px',
                            fontWeight: '100',
                            fontSize: '4rem',
                          }}
                        >
                          -
                        </span>
                      </span>
                      About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
              <div className="py-2 md:py-0 px-5 md:px-0">
                <img
                  src={aboutimg}
                  className="w-full h-auto max-w-[450px] rounded-md shadow-md"
                  alt="about"
                />
              </div>
              <div className="text-left pt-5 md:pt-0 px-4  md:px-0 ">
                <div className="mb-6">
                  <h3 className="text-3xl align-start font-semibold text-[#FFBC00] mb-2">
                    About Us
                  </h3>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Innovative Approaches Using 4B Technology
                  </h1>
                  <p className="text-[#919da4] text-xl">
                    Using Blockchain, Big Data, Backend, and Branding to Create
                    Innovative Solutions. committed to influencing the future
                    with innovative ideas and state-of-the-art technologies.
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
                    Expertise in Backend architecture
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Blockchain development
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>{' '}
                    Big Data analytics
                  </p>
                  <p>
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    and strategic branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap-area pt-100 pb-70 bg-black">
        <div className="container">
          <div className="row flex flex-wrap">
            <div className="col-lg-6 col-md-6">
              <div className="col-lg-12">
                <div
                  className="single-rodmap-box absolute wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="roadmap-content px-3 py-4">
                    <h3 className="text-white font-weight-600">
                      Exposed 4Born Solutions: The Origin of Innovation
                    </h3>
                    <span className="text-[#FFBC00]">2022</span>
                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      4Born Solutions became a shining example of innovation in
                      2022, setting the groundwork for a journey that would
                      change the world. Our founding signaled a dedication to
                      developing cutting-edge technological solutions that would
                      transform entire sectors. We started on a path to
                      greatness with the goal of fusing creativity and
                      technology.
                    </p>
                  </div>
                  <div className="vertical-text relative">
                    <h2>Begining</h2>
                  </div>
                </div>
                <div className="">
                  <div className="singles-rodmaps-boxs wow fadeInLeft data-wow-delay='0.4s">
                    <div className="rodmap-content  text-[#FFBC00]">
                      <h1>02</h1>
                    </div>
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
                      Boosting Development with 4B Innovation
                    </h3>
                    <span className="text-[#FFBC00]">2024</span>
                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      As we dug farther into the fields of backend, blockchain,
                      big data, and branding in 2023, 4Born Solutions thrived.
                      We were able to create innovative solutions in this
                      crucial year by utilizing the capabilities of these
                      state-of-the-art technology. We became leaders in the tech
                      business as a result of our rapid growth in these domains.
                    </p>
                  </div>
                  <div className="vertical-text relative">
                    <h2>The 3rd</h2>
                  </div>
                </div>
              </div>
            </div>
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
                      Introducing Solution-Centric Products
                    </h3>
                    <span className="text-[#FFBC00]">2023</span>
                    <p className="text-[#919da4] font-weight-400 line-height-28">
                      Authoritatively embrace top-line applications whereas fo
                      Proactively extend market-driven paradigms rather than of
                      empowerment enthusiastically adminis.
                    </p>
                  </div>
                  <div className="vertical-text relative">
                    <h2>The 2nd</h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="singles-rodmaps-boxs wow fadeInLeft data-wow-delay='0.4s">
                  <div className="rodmap-content1  text-[#FFBC00]">
                    <h1>03</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-area bg-black py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="dreamit-content">
                <h1 className="section-title text-center text-white font-weight-800">
                  4B Technologies
                </h1>
                <p className="section-text text-center text-[#919ea4] pt-2">
                  Come experience the limitless potential of 4B technology with
                  us.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-lg-4 col-md-6 col-sm-12 gap-2">
              <div
                className="feature-single-box wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="feature-box-inner justify-center ">
                  <div className="icon justify-center align-center p-4 flex">
                    <img src={icon1} alt="icon" />
                  </div>
                  <div className="inner-text">
                    <h2>Backend Technology</h2>
                    <p>
                      The best approaches for planning and overseeing APIs to
                      build backend systems that are both scalable and
                      effective.techniques for database optimization in backend
                      systems to increase scalability and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 gap-2">
              <div
                className="feature-single-box wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="feature-box-inner justify-center ">
                  <div className="icon justify-center align-center p-4 flex">
                    <img src={icon2} alt="icon" />
                  </div>
                  <div className="inner-text">
                    <h2>Blockchain Technology</h2>
                    <p>
                      Recognizing how blockchain technology is enabling
                      decentralization to transform financial
                      services.investigating the effects of asset tokenization
                      on different industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 gap-2">
              <div
                className="feature-single-box wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="feature-box-inner justify-center ">
                  <div className="icon justify-center align-center p-4 flex">
                    <img src={icon3} alt="icon" />
                  </div>
                  <div className="inner-text">
                    <h2>Big Data</h2>
                    <p>
                      investigating methods and tools for real-time data
                      processing, analysis, and insight extraction.addressing
                      the problems and answers related to protecting security
                      and privacy while working with large datasets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-area bg-black py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 flex">
              <div
                className="skillit-section-title wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <h4>Skils and Abilities</h4>
                <h1 className="section-title">
                  Unique Answers, Customized Plans
                </h1>
                <p>
                  At 4Born Solutions, we create experiences rather than just
                  solutions. Innovation characterizes our strategy, which views
                  every obstacle as a chance to produce something truly
                  remarkable.
                </p>
                <p>
                  Our strategies are bespoke, tailored to address unique needs
                  while ensuring optimal results.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 flex flex-col ">
              <div
                className="process-bar wow fadeInLeft w-full mb-4"
                data-wow-delay="0.3s"
              >
                <span className="prosses-bar-title text-white font-weight-600 text-xl">
                  Backend Technology
                </span>
                <div className="process-bar-progress">
                  <progress value={0} />
                </div>
              </div>
              <div
                className="process-bar wow fadeInLeft w-full mb-4"
                data-wow-delay="0.3s"
              >
                <span className="prosses-bar-title text-white font-weight-600 text-xl">
                  Blockchain Technology
                </span>
                <div className="process-bar-progress">
                  <progress value={0} />
                </div>
              </div>
              <div
                className="process-bar wow fadeInLeft w-full mb-4"
                data-wow-delay="0.3s"
              >
                <span className="prosses-bar-title text-white font-weight-600 text-xl">
                  Big Data
                </span>
                <div className="process-bar-progress">
                  <progress value={0} />
                </div>
              </div>
              <div
                className="process-bar wow fadeInLeft w-full mb-4"
                data-wow-delay="0.3s"
              >
                <span className="prosses-bar-title text-white font-weight-600 text-xl">
                  Branding
                </span>
                <div className="process-bar-progress">
                  <progress value={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus-area bg-black text-center py-5">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
              <div className="text-left pt-5 md:pt-0 px-4  md:px-0 ">
                <div className="teamwork-content mb-6">
                  <h3 className="text-xl align-start text-[#FFBC00] mb-2">
                    About Us
                  </h3>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Redefining Providers
                  </h1>
                  <p className="text-[#919da4] text-lg">
                    Check out our revolutionary product line, which is created
                    to improve brand visibility, strengthen security protocols,
                    and change operations. Every product is painstakingly made
                    to improve the effectiveness and worth of your operations.
                  </p>
                </div>
                <div className="about-check-text">
                  <p className="text-lg">
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    Our goal is to be the change-initiator.
                  </p>
                  <p className="text-lg">
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    the designers of advancement
                  </p>
                  <p className="text-lg">
                    <span>
                      <i
                        className="tick fa-solid fa-circle-check"
                        // style="color: #FFBC00;"
                      />
                    </span>
                    and the partners in your journey towards success
                  </p>
                </div>
              </div>
              <div className="py-2 md:py-0 px-5 md:px-0">
                <img
                  src={teamwork}
                  className="w-full h-auto max-w-[450px] rounded-md shadow-md"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
