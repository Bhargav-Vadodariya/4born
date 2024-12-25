import React from 'react'

function navbar() {
  return (
    <div className="w-full px-20 py-8 flex justify-between items-center">
       <div className='Logo flex justify-start mr-10'>
         <a className="navbar-brand" href="index">
          <img src="src/assets/images/final-logo-4born.svg" className="img-fluid" alt=""/>
        </a> 
       </div>
         <div className="flex justify-end space-x-4 items-center">
            <a href="/" className="text-md text-lg font-semibold px-4 text-yellow-400">Home</a>
            {['About', 'Service', 'Portfolio', 'Product', 'Rate Card'].map((text, index) => (
                <a key={index} href={`/${text}`} className="text-md text-lg font-semibold px-4 transition-colors duration-200 ease-in-out hover:text-yellow-400">{text}</a>
            ))}
           {/* <button className="bg-[#facc15] text-black px-4 p-4   rounded-md hover-black out"> */}
           <button className="border-2 border-transparent bg-yellow-400 hover:duration-500 hover:bg-slate-950 text-black hover:text-white hover:border-yellow-400 px-4 p-4 rounded-md">
  Contact Us
</button>
         </div>
    </div>
    )
}   

export default navbar; 
