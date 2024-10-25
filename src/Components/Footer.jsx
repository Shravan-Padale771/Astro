import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center w-full justify-between max-md:mt-16  max-lg:flex-col mb-4  max-h-max mt-28'>
        <span className='flex justify-center items-center mx-2'>
            <img className='w-[180px]  h-auto' src="/images/Odyssey.png" alt="logo" />
        </span>

        <ul className={`flex items-center justify-center max-lg:mt-8 max-sm:flex-col gap-12 text-sm font-semibold  w-full bg-white  `}>
        <li className='lg:p-0'>Stay Connected</li>
        <li className='lg:p-0'>Education</li>
        <li className='lg:p-0'>Community</li>
        <li className='lg:p-0'>About Us</li>
        
      </ul>
      <ul className={`flex items-center min-w-fit justify-center max-lg:mt-5 max-sm:mt-5 gap-12 text-sm font-semibold  `}>
        <li className=' lg:p-0'>Privacy Policy</li>
        <li className=' lg:p-0'>Terms & Agreement</li>
        
        
      </ul>
      
    </div>
  )
}
