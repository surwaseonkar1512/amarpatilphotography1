import React from 'react'
import fb from '../assets/icons8-facebook.gif'
import insta from '../assets/icons8-instagram.gif'
const Footer = () => {
  return (
    <div class="w-full bg-gray-800 font-Poppins">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
       
        <span class="text-2xl font-bold text-white">AmarPatilPhotography</span>
      </div>
      <span class="hidden md:block font-medium text-white"
        >© copyright2023 AmarPatilPhotography </span>
      <div class="flex gap-2">
        <a href="https://www.facebook.com/amru.patil.98"><img class="w-4 cursor-pointer" src={fb} alt="" /></a>
        <a href="https://www.instagram.com/amru_patil_1"><img class="w-4 cursor-pointer" src={insta}alt="" /></a>
       
      </div>
    </div>
  </div>
  )
}

export default Footer