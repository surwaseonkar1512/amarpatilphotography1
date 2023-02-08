import React from 'react'
import w4 from '../assets/wed (4).jpg'
import w7 from '../assets/wed (7).jpg'
import w8 from '../assets/wed (8).jpg'
import w2 from '../assets/wed (2).jpg'
import w14 from '../assets/wed (14).jpg'
import w15 from '../assets/wed (15).jpg'
const Deno = () => {
  return (
   <>
     <div id="works" class="py-40 bg-slate-900">
    <div class="container mx-auto">
      
      <div class="flex flex-row  ">
        <h1 class="text-indigo-600 font-bold items-start">wedding photoshoot</h1>
      
        <p class=" flex justify-end items-end">
        <button className='text-white'>more</button>
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
    </div>
  </div>
   </>
  )
}

export default Deno