import React from 'react'

function Landingpage() {
  return (
    <div className='w-full h-[32rem] bg-black flex justify-center items-center'>
      <div className= "container1 w-1/2 pl-20 text-left  ">
      <div className="title bg-black flex justify-center items-center">
        <h1 className="text-6xl font-bold text-left text-white">Welcome to</h1>
        </div>
        <div className="bg-black text-center py-8">
            <div className='logo2'>
      <h3 className="dif-title text-5xl font-bold text-yellow-400 relative inline-block z-50 ">
        4Born Solutions
      </h3>
      </div>
      <div className='shape z-10'></div>
      <div className="title ">
        <p className=" text-[#919da4] text-left mt-4 z-50 ">
        At 4Born Solutions, we specialize in delivering cutting-edge solutions in the realm of Backend development, Big Data analytics, Blockchain technology, and Branding strategies.
      </p>
      </div>
      <button className="bg-yellow-400 text-black font-bold py-2 px-4  mt-4">Get Started Now</button>
      
      </div>
        </div>
      <div className= "container2 w-1/2">
        <h1 className="text-6xl font-bold text-center text-white">Welcome to</h1>
        </div>
    </div>
  )
}

export default Landingpage;
