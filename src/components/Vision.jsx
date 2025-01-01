// import React from 'react'

// function Vision() {
//   return (
//     <div className="intro">
//       <div className="container mx-auto">
//         <div className="flexx ">
//           <h4 className="heading text-[#fabb04]">4Born Solutions</h4>
//           <h1>We turn your vision into reality</h1>
//           <h1>Powerfull Influence</h1>
//         </div>
//       </div>
//       <div className="featureArea pt-[6.5rem] pb-[6rem]">
//         <div className="container max-w mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
//             <div className="mb-2">
//               <div className="feature-single-box">
//                 <div className="feature-box-inner">
//                   <div className="feature-icon1 aspect-square ">
//                     <img
//                       src="src/assets/images/vone.svg"
//                       className="max-w-full h-2.5"
//                     />
//                   </div>
//                   <div className="feature-title">
//                     <h3>Our Vision</h3>
//                     <p>
//                       Our mission at 4Born Solutions is to be the leading
//                       innovators in the fields of big data, blockchain,
//                       branding, backend, and big data. We aspire to redefine
//                       industry standards Productivity and efficiency are our top
//                       priorities.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-2">
//               <div className="feature-single-box upper1">
//                 <div className="feature-box-inner">
//                   <div className="feature-icon1 aspect-square ">
//                     <img src="src/assets/images/vtwo.svg" className="" />
//                   </div>
//                   <div className="feature-title">
//                     <h3>Our Mission</h3>
//                     <p>
//                       Our mission is to develop innovative goods that not only
//                       satisfy but also surpass our customers' changing needs
//                       while offering unmatched value and promoting long-term
//                       success. We aim to create innovative products.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-2">
//               <div className="feature-single-box upper2">
//                 <div className="feature-box-inner">
//                   <div className="feature-icon1 aspect-square">
//                     <img
//                       src="src/assets/images/vthree.svg"
//                       className="max-w-full h-auto"
//                     />
//                   </div>
//                   <div className="feature-title">
//                     <h3>24/7 Support</h3>
//                     <p>
//                       We promise to be there for you around-the-clock, so
//                       whenever you need technical support, advice, or solutions,
//                       we'll be here to help. Our top goal is your success, and
//                       we'll always Ready To Support.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Vision;

import React from 'react';

function Vision() {
  return (
    <div className="bg-black py-12">
      {' '}
      {/* Container with background and padding */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {' '}
        {/* Responsive container */}
        <div className="text-center mb-8">
          {' '}
          {/* Centered title section */}
          <h4 className="text-[#fabb04] text-lg font-semibold mb-2">
            4Born Solutions
          </h4>{' '}
          {/* Smaller title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white">
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

