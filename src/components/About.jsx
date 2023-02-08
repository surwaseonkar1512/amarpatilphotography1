import React from 'react'
import amru from '../assets/amru1.jpg'
import mapl from '../assets/icons8-locations-64.png'
const About = () => {
  return (
    <div id="about" className=" font-Poppins px-10 bg-slate-900">
      <div
        className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20" >
        
        <div className="relative">
         
          <div className="h-full rounded-full overflow-hidden">
            <img src={amru} alt="" />
          </div>
        </div>
       
        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 className="text-3xl font-medium text-white">Amar Patil </h1>
          <h1 className="text-3xl font-medium text-white">
            Professional Photographer
          </h1>
          <div className=" font-medium text-white">
            Live In:-kalamb, maharashtra
            <a href="https://goo.gl/maps/LbNzy1vnMDgAFn9f8"><img src={mapl}/></a>
          </div>
          <p className="text-dark  text-white">
            
            “Photography is a way of feeling, of touching, of loving. What you have caught on film
             is captured forever… It remembers little things, long after you have forgotten everything.”
          </p>
          
          </div>
        </div>
      </div>
  
  )
}

export default About

{/**id="about"  */}