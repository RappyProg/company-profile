"use client";
import React, { useState } from 'react';

function Menu({ isOpen }: { isOpen: boolean }) {
    return (
      <div
        className={`absolute top-full left-0 right-0 bg-amber-200 text-black transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><a href={'/'} className="text-lg hover:text-amber-800">Home</a></li>
          <li><a href={'/about'} className="text-lg hover:text-amber-800">About</a></li>
          <li><a href={'/services'} className="text-lg hover:text-amber-800">Services</a></li>
          <li><a href={'/teams'} className="text-lg hover:text-amber-800">Teams</a></li>
        </ul>
      </div>
    );
  }
export default function Burger(){
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
        <button onClick={handleClick} className="flex flex-col justify-center items-center min-[360px]:block sm:hidden">
        <span className={`bg-amber-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
        </span>
        <span className={`bg-amber-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
        </span>
        <span className={`bg-amber-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
        </span>    
        </button>
        
        <Menu isOpen={isOpen} />
    </>
    
  );
}