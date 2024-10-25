import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // For managing mobile menu state

  return (
    <nav className='flex items-center justify-between h-20 mx-2 p-4 md:mx-[50px] lg:mx-[100px]'>
      {/* Logo */}
      <span className='flex justify-center items-center'>
        <img className='w-[130px] h-auto' src="/images/Odyssey.png" alt="logo" />
      </span>
      
      {/* Hamburger Menu Button for Small Screens */}
      <button
        className='lg:hidden block text-2xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'X' :'=' } {/* This is the hamburger icon */}
      </button>

      {/* Navbar Links - Hidden on small screens, shown on medium+ */}
      <ul className={`lg:flex items-center justify-center gap-12 text-sm min-h-screen font-medium ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white lg:static lg:bg-transparent lg:w-auto lg:h-screen z-10`}>
        <li className='p-4 lg:p-0'>Stay Connected</li>
        <li className='p-4 lg:p-0'>Education</li>
        <li className='p-4 lg:p-0'>Community</li>
        <li className='p-4 lg:p-0'>About Us</li>
        <button className='bg-zinc-950 text-white font-semibold py-2 px-4 rounded-md ml-4 lg:ml-0'>
          Sign in
        </button>
      </ul>
    </nav>
  );
}
