import React from 'react';
import Navbar from '../components/mainpage/Navbar';
import Footer from '../components/mainpage/Footer';
import '../index.css';


function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-area bg-black">
        <div className="Contact-title  text-center bg-black">
          <div className="col-lg-12 pt-32 bg-black">
            <div className="text-center ">
              {' '}
              {/* Centered title section */}
              <h4 className="text-[#fabb04] text-lg font-light mb-2">
                Contact Info
              </h4>{' '}
              {/* Smaller title */}
              <h1 className="text-5xl mb-8 md:text-4xl font-medium text-white">
                Write Us Something
              </h1>{' '}
              {/* Main title */}
            </div>
          </div>
          <div className="container mx-auto overflow-hidden py-5 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {' '}
              {/* Main grid container */}
              <div className="grid grid-cols-1 gap-4">
                {' '}
                {/* Left column grid */}
                <div className="contact-info-single-box bg-[#1e1e24] rounded p-4 flex flex-col items-center justify-center">
                  <h2 className="text-lg py-2 text-white">Address Info</h2>
                  <p className="text-[#919da4] text-center">
                    {' '}
                    {/* Center text within box */}
                    303(A)-White House, <br /> Opp R.T.O Office, <br />{' '}
                    Bhavnagar-364003
                  </p>
                </div>
                <div className="contact-info-single-box bg-[#1e1e24] rounded p-4 flex flex-col items-center justify-center">
                  <h2 className="text-lg py-2 text-white">Phone Calls</h2>
                  <p className="text-[#919da4] text-center">
                    {' '}
                    {/* Center text within box */}
                    <a
                      href="tel:+91 8849516668"
                      className="no-underline text-[#919da4]"
                    >
                      +91 8849516668
                    </a>
                  </p>
                </div>
                <div className="contact-info-single-box bg-[#1e1e24] rounded p-4 flex flex-col items-center justify-center">
                  <h2 className="text-lg py-2 text-white">E-Mail Address</h2>
                  <p className="text-[#919da4] text-center">
                    {' '}
                    {/* Center text within box */}
                    <a
                      href="mailto:contact@4born.in"
                      className="no-underline text-[#919da4] block"
                    >
                      {' '}
                      {/* Added block for better spacing */}
                      contact@4born.in
                    </a>
                    <a
                      href="mailto:support@4born.in"
                      className="no-underline text-[#919da4] block"
                    >
                      {' '}
                      {/* Added block for better spacing */}
                      support@4born.in
                    </a>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 pb-10 flex flex-col items-center justify-center bg-[#0d0d0d]">
                {' '}
                {/* Right column grid - add your other content here */}
                {/* ... Put your form or other content for the right column in here... */}
                {/*  Example content: */}
                <div className="contact-info-single-box bg-[#0D0D0D]  rounded p-4 flex flex-end align-left justify-start">
                  <h2 className="text-4xl pb-9 text-white">Get in Touch</h2>
                </div>
                <form
                  className="row  p-4 forminput"
                  action="https://formbold.com/s/3Zkqy"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <div className="col-md-6 pb-4 ">
                    <input
                      type="Name"
                      placeholder="Your Name"
                      class="form-control"
                      id="inputName"
                    />
                  </div>
                  <div class="col-md-6 pb-4">
                    <input
                      type="Email"
                      placeholder="Your Email"
                      class="form-control"
                      id="Email4"
                    />
                  </div>
                  <div class="col-12 pb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inputSubject"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="col-12 pb-4">
                    <textarea
                      type="message"
                      className="form-control text-white w-full"
                      id="inputtext"
                      placeholder="Message..."
                      rows={5} // Set initial height
                    ></textarea>
                  </div>

                  <div className="form-box text-center">
                    <a
                      href=''
                      class="btn"
                      type="submit"
                      target="_blank"
                    >
                      <span class="btn__inner">
                        <span
                          class="btn__label"
                          data-label="Get in touch"
                          data-hover="Go for it 💪"
                        >
                          Get in touch
                          <span class="btn__label__background"></span>
                        </span>
                      </span>
                      <span class="btn__background"></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
