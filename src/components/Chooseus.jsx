// import React from 'react';
// import logo from '../assets/images/4BChat_List.png';
// import { TbBulbFilled } from 'react-icons/tb';
// import { RiCustomerService2Fill } from 'react-icons/ri';
// import { FaRegHandshake } from 'react-icons/fa6';
// import { LuAlarmClockCheck } from 'react-icons/lu';




// function chooseus() {
//   return (
//     <div>
//       <div className="about-area bg-black pt-[6.5rem] pb-[7rem]">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="p-4">
//               <div className="dreamit">
//                 <img src={logo} alt="Logo" />
//               </div>
//             </div>
//             <div className="choosecontent">
//               <div className="choosediscription p-4">
//                 <h3>Why Choose Us?</h3>
//                 <h1>Excellence in 4B Technology!</h1>
//                 <p>
//                   Our staff is made up of seasoned experts that are
//                   knowledgeable about the newest technology and best practices
//                   in the business.
//                   <br></br>
//                   <br></br>
//                   With the help of our sophisticated analytics and processing
//                   capabilities, unleash the power of data. We translate
//                   intricate data sets into useful insights that promote
//                   strategic expansion and well-informed decision-making.
//                 </p>
//               </div>
//               <div className="chooseitems flex  flex-wrap gap-4">
//                 <div className="choosebox rounded w-[18rem] flex items-center  p-4 ">
//                   <div>
//                     <h2>
//                       <span>
//                         <TbBulbFilled className="chooseicon align-middle inline-block mr-2 text-yellow-500" />
//                       </span>
//                       Expertise
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="choosebox rounded w-[18rem] flex items-center bg-[#1E1E24] p-4">
//                   <div>
//                     <h2>
//                       <span >
//                         <RiCustomerService2Fill className="chooseicon align-middle inline-block mr-2 text-yellow-500" />
//                       </span>
//                       Custom Solution
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="choosebox rounded w-[18rem] flex items-center bg-[#1E1E24] p-4">
//                   <div>
//                     <h2>
//                       <span>
//                         <FaRegHandshake className="chooseicon align-middle inline-block mr-2 text-yellow-500" />
//                       </span>
//                       Innovation
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="choosebox rounded w-[18rem] flex items-center bg-[#1E1E24] p-4">
//                   <div>
//                     <h2>
//                       <span>
//                         <LuAlarmClockCheck className="chooseicon align-middle inline-block mr-2 text-yellow-500" />
//                       </span>
//                       Reliability
//                     </h2>
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

// export default chooseus;

import React from 'react';
import logo from '../assets/images/4BChat_List.png';
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
    <div className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {' '}
          {/* Adjusted grid for responsiveness */}
          <div className="md:p-6">
            {' '}
            {/* Added padding for larger screens */}
            <img
              src={logo}
              alt="Logo"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:p-6">
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

