

import React from 'react';
import logo from '../mainpage/4BChat_List.png';
import { TbBulbFilled } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa6';
import { LuAlarmClockCheck } from 'react-icons/lu';

function Chooseus() {
  const features = [
    { icon: <TbBulbFilled />, title: 'Expertise' },
    { icon: <RiCustomerService2Fill />, title: 'Custom Solutions' },
    { icon: <FaRegHandshake />, title: 'Innovation' },
    { icon: <LuAlarmClockCheck />, title: 'Reliability' },
  ];

  return (
    <div className="bg-black pt-16 pb-16">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {' '}
          {/* Adjusted grid for responsiveness */}
          <div className="">
            {' '}
            {/* Added padding for larger screens */}
            <img
              src={logo}
              alt="Logo"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="pt-4 md:pt-0">
            {' '}
            {/* Added padding for larger screens */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#FFBC00] mb-2">
                Why Choose Us?
              </h3>
              <h1 className="text-4xl font-bold text-white mb-4">
                Excellence in 4B Technology!
              </h1>
              <p className="text-[#919da4] text-lg">
                Our staff is made up of seasoned experts knowledgeable about the
                newest technology and best practices in the business. <br />{' '}
                <br />
                With sophisticated analytics and processing capabilities, we
                unleash the power of data, translating complex data sets into
                useful insights for strategic expansion and informed decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-box flex items-center rounded-lg p-4 transition-all duration-300 overflow-hidden relative group`} /* Conditional background and hover effect */
                >
                  <div className='absolute inset-0 bg-[#ffbd00] translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div> {/* Background overlay */}
                  <span className="text-2xl text-gray-300 mr-4 relative z-10 group-hover:text-black"> {/* Icon (lighter gray, changes to black on hover) */}
                    {feature.icon}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-300 relative z-10 group-hover:text-black">
                    
                    {/* {/* Text (lighter gray, changes to black on hover) */}
                    {feature.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chooseus;

