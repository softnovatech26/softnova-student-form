import React, { useState } from 'react';
import { Search } from 'lucide-react'; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-[#0f141c] text-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* 1. Left Side: Logo and Brand Name */}
      <div className="flex items-center space-x-3 cursor-pointer">
      
        <div className="w-12 h-12 rounded-full border-2 border-gray-600 bg-white flex items-center justify-center overflow-hidden">
          <img 
            src="/SoftNova Logo.png" 
            alt="SoftNova Logo" 
            className="w-10 h-10 object-contain"
          />
        </div>
      
        <h1 className="text-2xl font-bold tracking-wide">
          SoftNova <span className="text-[#e14d43]">Academy</span>
        </h1>
      </div>

      {/* 2. Middle: Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium tracking-wide">
        <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
        <a href="#courses" className="hover:text-gray-300 transition-colors">Courses</a>
        <a href="#trainers" className="hover:text-gray-300 transition-colors">Trainers</a>
        <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
        <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
      </div>

      {/* 3. Right Side: Search Bar */}
      <div className="relative w-64">
        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          
        </span>
        
      </div>

    </nav>
  );
};

export default Navbar;