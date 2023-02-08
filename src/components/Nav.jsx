import React,{useState,useEffect} from 'react'
import  { Link } from 'react-router-dom'
import {
  
    FaBars,
  } from 'react-icons/fa';
const Nav = () => {
    
  const [nav,setNav] = useState(false);
       
        const handleNav=()=>{
           setNav(!nav);}
  return (
       <div  className='w-full fixed top-0 z-10 bg-slate-900'>
       <div className="container mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
       
         <span className="text-2xl  font-bold  text-white"
         >AmarPatilPhotography</span>
       
     </div>
        <ul
        className="hidden md:flex space-x-10  text-gray-100 font-bold text-sm uppercase"
      >
        <li className= " hover:text-gray-500 hover:animate-bounce hover:underline  ">
        <Link to='/'>Home</Link>
        </li>
        
        <li className="hover:text-gray-500 hover:animate-bounce hover:underline">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-gray-500 hover:animate-bounce hover:underline">
        <Link to='/baby1'>Gallery</Link>
        </li>
        <li className="hover:text-gray-500 hover:animate-bounce hover:underline">
          <a href="https://www.instagram.com/amru_patil_1/">Instagram</a>
        </li>
      
      </ul>
    

        {/** mobile manu */}
        <div onClick={handleNav} className='md:hidden z-10 flex justify-end'>
        <FaBars size={20} className=' bg-white mr-[16px] ml-[100px] flex items-center cursor-pointer' />
      </div>
          {/** mobile manu */}
          <div 
          onClick={handleNav}
           className={nav ?
           'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black px-4 py-7 flex flex-col'
           :
           'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className=' h-full text-center pt-12'>
            <li className= "text-3xl hover:text-cyan-500 hover:animate-bounce hover:underline ">
        <Link to='/'>Home</Link>
        </li>
        <li className="hover:text-cyan-500 hover:animate-bounce hover:underline text-3xl  ">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-cyan-500  hover:animate-bouncehover:underline text-3xl">
        <Link to='/baby1'>Gallery</Link>
        </li>
        <li className="hover:text-cyan-500 hover:animate-bounce hover:underline text-3xl">
          <a href="https://www.instagram.com/amru_patil_1/ ">Instagram</a>
        </li>
      
            </ul>
          </div>
    </div>
    </div>
  )
}

export default Nav