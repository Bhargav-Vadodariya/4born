

import React from 'react';

function Vision() {
  return (
    <div className="bg-black py-12">
      {' '}
      {/* Container with background and padding */}
      <div className="container mx-auto">
        {' '}
        {/* Responsive container */}
        <div className="text-center">
          {' '}
          {/* Centered title section */}
          <h4 className="text-[#fabb04] text-lg font-semibold mb-2">
            4Born Solutions
          </h4>{' '}
          {/* Smaller title */}
          <h1 className="text-5xl mb-8 md:text-4xl font-bold text-white">
            We turn your vision into reality - Powerful Influence
          </h1>{' '}
          {/* Main title */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {' '}
          {/* Responsive grid */}
          {[
            /* Array of feature data */
            {
              icon: 'src/assets/images/vone.svg',
              title: 'Our Vision',
              description:
                'Our mission at 4Born Solutions is to be the leading innovators in the fields of big data, blockchain, branding, backend. We aspire to redefine industry standards. Productivity and efficiency are our top priorities.',
            },
            {
              icon: 'src/assets/images/vtwo.svg',
              title: 'Our Mission',
              description:
                "Our mission is to develop innovative goods that not only satisfy but also surpass our customers' changing needs while offering unmatched value and promoting long-term success.",
            },
            {
              icon: 'src/assets/images/vthree.svg',
              title: '24/7 Support',
              description:
                "We promise to be there for you around-the-clock, so whenever you need technical support, advice, or solutions, we'll be here to help. Our top goal is your success.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#15161c] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            >
              {' '}
              {/* Feature box with hover effects */}
              <div className="flex justify-center mb-4">
                {' '}
                {/* Icon container */}
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12"
                />{' '}
                {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>{' '}
              {/* Title */}
              <p className="text-[#919da4] text-base">
                {feature.description}
              </p>{' '}
              {/* Description */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vision;

