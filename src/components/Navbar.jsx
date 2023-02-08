import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import dark from '../assets/icons8-night.gif'
const Navbar = () => {

  const navigate = useNavigate();

    const  goTo = ()=>{
      navigate("/baby");
    }  


  return (
    <nav className="w-full fixed top-0 z-10 bg-slate-900">
    <div className="container mx-auto py-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
       
        <span className="text-2xl  font-bold  text-white"
          >AmarPatilPhotography</span>
        
      </div>
      <ul
        className="hidden md:flex space-x-10  text-gray-100 font-bold text-sm uppercase"
      >
        <li className= " hover:text-gray-500 hover:animate-bounce  ">
        <Link to='/'>home</Link>
        </li>
        <li className="hover:text-gray-500">
          <a href="#about">ABOUT</a>
        </li>
        <li className="hover:text-gray-500">
        <Link to='/baby1'>gallery</Link>
        </li>
        <li className="hover:text-gray-500">
          <a href="https://www.instagram.com/amru_patil_1/">instagram</a>
        </li>
      
      </ul>
    
    
      <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20 text-gray-100 ">
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>
      <ul
        id="menu"
        className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10  text-center  text-gray-100"
      >
      <li className="hover:text-gray-500 ">
        <a href="#">HOME</a>
      </li>
      <li className="hover:text-gray-500">
        <a href="#about">ABOUT</a>
      </li>
      <li className="hover:text-gray-500">
        <a href="#services">PORTFOLIO</a>
      </li>
      <li className="hover:text-gray-500">
        <a href="#works">INSTAGRAM</a>
      </li>
     
      </ul>
    </div>
  </nav>
  )
}

export default Navbar