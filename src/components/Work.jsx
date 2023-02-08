import React from 'react'

import w4 from '../assets/wed (4).jpg'
import w7 from '../assets/wed (7).jpg'
import w8 from '../assets/wed (8).jpg'
import w2 from '../assets/wed (2).jpg'
import w14 from '../assets/wed (14).jpg'
import w15 from '../assets/wed (15).jpg'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div id="works" class=" font-Poppins  py-40 bg-slate-900">
    <div class="container mx-auto">
      
      <div class="flex flex-col gap-3 items-center">
        <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
        <h1 class="text-3xl text-white">Works & Projects</h1>
        <p class="w-1/2 text-center text-gray-400">
          
        </p>
      </div>
      
      <div class="p-5 sm:p-0 flex flex-wrap justify-between">
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w4} />
        </div>
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w14}/>
        </div>
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w15}/>
        </div>
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w7}/>
        </div>
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w8}/>
        </div>
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w8}/>
        </div>
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w7}/>
        </div>
        
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src= {w7}/>
        </div>
      </div>
      <div class="flex flex-col gap-3 items-center">
      <Link to='/baby1'> <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
  see more
</button>
</Link>
       
       
      </div>
    </div>
  </div>
  )
}

export default Work