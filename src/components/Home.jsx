import React from 'react'
import Typewriter from 'typewriter-effect';
import onkar from '../assets/amru2.png'
import Home2 from './Home2';
import bgv from '../assets/bgv2.mp4'

const Home = () => {
  return (
    <div className=' font-Poppins bg-gradient-to-r from-indigo-500 '>
    <div className='w-[100%] h-screen'>
 <div className='absolute  w-[100%] h-[100%] '>
 <video className='w-full h-screen object-cover opacity-70 ' autoPlay muted loop src={bgv}/>
 <div className=' w-[100%] h-[100%] top-[50%] left-[-10%]  flex flex-col items-center  text-5xl text-black '>
       <Home2/>
       
 </div>
 </div>
 </div>

 </div>
  )
}

export default Home