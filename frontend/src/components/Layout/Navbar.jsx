import React from 'react'
import { GoHeart } from "react-icons/go";
import { SlCompass } from "react-icons/sl";

function Navbar() {
  return (
    <>
    <nav className="px-4 py-2 bg-white/10 backdrop-blur-md mx-20 rounded-full shadow-md z-20 relative top-8">
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold text-white">Planage</div>
      <ul className="flex space-x-16">
        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">Destinations <SlCompass /></a></li>
        <li><a href="#" className="text-white hover:text-gray-300">Budget Planner</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
      </ul>
      <div className="flex space-x-4">
        <button className="border-2 border-white text-white font-bold py-2 px-4 rounded-full">
          Sign Up
        </button>
        <button className="bg-yellow-300 text-white font-bold py-2 px-4 rounded-full">
          Sign In
        </button>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar