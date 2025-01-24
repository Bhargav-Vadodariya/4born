import React from 'react';
import Navbar from '../components/mainpage/Navbar';
import quickmake from '../assets/images/Quike-Make.svg';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa6';
import tradeimg from '../assets/images/TradeCrazyAPI.svg';
import eotp from '../assets/images/E-OTP.svg';
import Hashimg from '../assets/images/Hashlib.svg';
import transimg from '../assets/images/transpro.svg';
import Footer from '../components/mainpage/Footer';





function Product() {
  const features1 = [
    { icon: <RiCustomerService2Fill />, title: 'Custom Solutions' },
    { icon: <FaRegHandshake />, title: 'Innovation' },
    
  ];
 const features2 = [
    { icon: <RiCustomerService2Fill />, title: 'Buy Now' },
 ]
 const features3 = [
   { icon: <RiCustomerService2Fill />, title: 'User Security' },
   { icon: <FaRegHandshake />, title: 'User Dashbord' },
 ];
  return (
    <div>
      <Navbar />
      <div className="ourproduct-title-section text-center bg-[#0D0D0D]">
          <div className="col-lg-12 py-10 bg-black">
            <div className="section-content">
              <div className="section-title">
                <h2 className="text-white text-5xl font-semibold">Our Product</h2>
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
                    Our Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div className="container  overflow-hidden">
          <div className="ourproduct-title bg-[#0D0D0D] grid grid-cols-1 md:grid-cols-2  py-16">
            {/* Left Grid */}
            <div className="text-left flex flex-col">
              {/* Title and Description */}
              <div className="mb-6">
                <h3 className="text-lg  text-[#FFBC00] mb-2">Quick Make</h3>
                <h1 className="text-4xl font-bold text-white mb-4">
                  Generate quotations in minutes, saving you valuable time.
                </h1>
                <p className="text-[#919da4] text-base">
                  Save time, reduce stress, and make every project a success
                  with Quick Make - Your Quotation Companion! Sign up now and
                  experience the future of hassle-free project quotations. Let
                  Quick Make be your partner in success!
                </p>
              </div>

              {/* Feature Boxes */}
              <div className="grid grid-cols-2 gap-4">
                {features1.map((feature, index) => (
                  <div
                    key={index}
                    className="product-feature-box relative bg-[#1e1e24] flex items-center rounded-sm py-3 pl-4 align-center transition-all duration-300 overflow-hidden relative  group"
                  >
                    <div className="absolute inset-0 bg-[#ffbd00] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-2xl text-[#FFBC00] mr-4 relative z-10 group-hover:text-black">
                      {feature.icon}
                    </span>
                    <h2 className="text-lg mb-0 font-semibold text-white relative z-10 group-hover:text-black">
                      {feature.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Grid */}
            <div className="flex justify-center items-center">
              <img
                src={quickmake}
                className="w-full h-auto max-w-[500px] rounded-md shadow-md"
                alt="Quick Make"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="TradeCrazyAPI bg-[#0D0D0D] py-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
            <div className="py-2 md:py-0 px-5 md:px-0">
              <img
                src={tradeimg}
                className="w-full h-auto max-w-[450px] rounded-md shadow-md"
                alt="about"
              />
            </div>
            <div className="text-left pt-5 md:pt-0   md:px-0 ">
              <div className="mb-6">
                <h3 className="text-xl align-start text-[#FFBC00] mb-2">
                  TradeCrazyAPI
                </h3>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Real-time market data
                </h1>
                <p className="text-[#919da4] text-lg">
                  Integrating our Stock Market API into your existing trading
                  platforms is seamless and hassle-free.Our Stock Market API
                  delivers real-time data on stock prices, volume, and market
                  trends directly to your fingertips.
                </p>
                <p className="text-[#919da4] text-lg">
                  Real-time market data empowers you to stay informed about the
                  market's pulse. By monitoring live data streams, you can
                  identify patterns, detect market sentiment shifts, and adjust
                  your trading strategies accordingly.
                </p>
              </div>
              <div className="grid grid-cols-2">
                {features2.map((feature, index) => (
                  <div
                    key={index}
                    className="product-feature-box relative bg-[#1e1e24] flex items-center rounded-sm py-3 pl-4 align-center transition-all duration-300 overflow-hidden relative  group"
                  >
                    <div className="absolute inset-0 bg-[#ffbd00] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-2xl text-[#FFBC00] mr-4 relative z-10 group-hover:text-black">
                      {feature.icon}
                    </span>
                    <h2 className="text-lg mb-0 font-semibold text-white relative z-10 group-hover:text-black">
                      {feature.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="EOtp bg-[#0D0D0D] py-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
            <div className="text-left pt-5 md:pt-0  md:px-0 ">
              <div className="mb-6">
                <h3 className="text-xl align-start text-[#FFBC00] mb-2">
                  E-OTP
                </h3>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Email Verification With OTP
                </h1>
                <p className="text-[#919da4] text-lg">
                  Email Verification API - the ultimate solution to secure your
                  user authentication process! With our API, you can
                  effortlessly send an OTP to any email ID, ensuring a seamless
                  and reliable verification experience for your users.
                </p>
              </div>
              <div className="grid grid-cols-2">
                {features2.map((feature, index) => (
                  <div
                    key={index}
                    className="product-feature-box relative bg-[#1e1e24] flex items-center rounded-sm py-3 pl-4 align-center transition-all duration-300 overflow-hidden relative  group"
                  >
                    <div className="absolute inset-0 bg-[#ffbd00] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-2xl text-[#FFBC00] mr-4 relative z-10 group-hover:text-black">
                      {feature.icon}
                    </span>
                    <h2 className="text-lg mb-0 font-semibold text-white relative z-10 group-hover:text-black">
                      {feature.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-2 pt-8 md:py-0 px-5 md:px-0">
              <img
                src={eotp}
                className="w-full flex h-auto max-w-[350px] rounded-md shadow-md"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="HashLib bg-[#0D0D0D] py-5">
        <div className="container overflow-hidden">
          <div className="HashLib-title grid grid-cols-1 md:grid-cols-2  py-16">
            <div className="flex justify-center items-center">
              <img
                src={Hashimg}
                className="w-full h-auto max-w-[450px] rounded-md shadow-md"
                alt="Quick Make"
              />
            </div>
            <div className="text-left flex flex-col">
              {/* Title and Description */}
              <div className="mb-6">
                <h3 className="text-lg  text-[#FFBC00] mb-2">Hashlib</h3>
                <h1 className="text-4xl font-extrabold text-white mt-4 mb-4">
                  Revolutionizes data security
                </h1>
                <p className="text-[#919da4] leading-9 text-xl">
                  Hashlib is the cutting-edge product that revolutionizes data
                  security. With its advanced algorithms, it effortlessly
                  converts any text or message into an unbreakable hash form,
                  ensuring your sensitive information remains protected from
                  prying eyes.
                </p>
              </div>

              {/* Feature Boxes */}
              <div className="grid grid-cols-2 gap-4">
                {features3.map((feature, index) => (
                  <div
                    key={index}
                    className="product-feature-box relative bg-[#1e1e24] flex items-center rounded-sm py-3 pl-4 align-center transition-all duration-300 overflow-hidden relative  group"
                  >
                    <div className="absolute inset-0 bg-[#ffbd00] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-2xl text-[#FFBC00] mr-4 relative z-10 group-hover:text-black">
                      {feature.icon}
                    </span>
                    <h2 className="text-lg mb-0 font-semibold text-white relative z-10 group-hover:text-black">
                      {feature.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transpro bg-[#0D0D0D] py-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
            <div className="text-left pt-5 md:pt-0  md:px-0 ">
              <div className="mb-6">
                <h3 className="text-base align-start text-[#FFBC00] mb-4">
                  TRANSPRO
                </h3>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Smart Translation Service Agency.
                </h1>
                <p className="text-[#919da4] py-3 leading-7 text-lg">
                  In our digital age, companies need accurate translations to
                  help them speak to new customers and emerging markets.
                </p>
              </div>
              <div className="grid grid-cols-2">
                {features2.map((feature, index) => (
                  <div
                    key={index}
                    className="product-feature-box relative bg-[#1e1e24] flex items-center rounded-sm py-3 pl-4 align-center transition-all duration-300 overflow-hidden relative  group"
                  >
                    <div className="absolute inset-0 bg-[#ffbd00] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="text-2xl text-[#FFBC00] mr-4 relative z-10 group-hover:text-black">
                      {feature.icon}
                    </span>
                    <h2 className="text-lg mb-0 font-semibold text-white relative z-10 group-hover:text-black">
                      {feature.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center py-2 pt-8 flex md:py-0 px-5 md:px-0">
              <img
                src={transimg}
                className="w-full flex h-auto max-w-[200px] justify-center align-center rounded-md shadow-md"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
