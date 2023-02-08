import React from 'react'
import onkar from '../assets/amru2.png'
import Typewriter from 'typewriter-effect';
const Home2 = () => {
  return (
    <div className=' font-Poppins '>
   
  


  <div
    className="font-Poppins absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold "
  >
    <span className= "font-Poppins text-black ">I'am</span>
    <h3 className="text-start text-2xl text-black py-2 md:text-6xl animate-pulse">
       <Typewriter
        
        options={{
          strings: ['Photographer', 'Traveler', 'Videographer'],
          autoStart: true,
          loop: true,
          
        }}
      />
    </h3>

  

  </div>
 
  </div>
  )
}

export default Home2

{/**<img
    className=" absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover "
    src={onkar}
    alt=""
  /> */}