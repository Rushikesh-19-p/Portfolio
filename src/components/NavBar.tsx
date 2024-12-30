import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-bold text-green-500">SecurityPro</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#skills" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#projects" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#contact" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-500 hover:text-white hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#skills" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
            <a href="#projects" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#contact" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;