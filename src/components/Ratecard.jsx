import React from 'react'
import Navbar from '../components/mainpage/Navbar';
import Footer from '../components/mainpage/Footer';



function Ratecard() {
  return (
    <div>
      <Navbar />
      <div className="Ratecard-title-section text-center bg-[#0D0D0D]">
        <div className="col-lg-12 py-10 bg-black">
          <div className="section-content">
            <div className="section-title">
              <h2 className="text-white text-5xl font-semibold">Rate Card</h2>
              <div className="flex justify-center items-center section-text text-lg font-thin  text-[#FFBC00]">
                <a className="no-underline text-white" href="/Ratecard">
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
                  Rate Card
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden py-5 bg-[#0D0D0D]">
          <div className="tablebox bg-[#0D0D0D] my-10">
            <table class="table table-dark table-bordered">
              <thead >
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Technology</th>
                  <th scope="col">Rate ( Per Hour )</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>React.js</td>
                  <td> 25 usd</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>node.js</td>
                  <td>25 usd</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Core php </td>
                  <td>10 usd</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>HTML/CSS</td>
                  <td> 10 usd</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Blockchain</td>
                  <td>50 usd</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Python </td>
                  <td>35 usd</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Ratecard;
