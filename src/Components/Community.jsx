import React from 'react'
import Footer from './Footer'


export default function Community() {
  return (
    <div className='min-h-fit flex flex-col max-w-[1310px] relative max-md:mx-0 max-md:p-0 p-4 mx-2 md:mx-[50px] lg:mx-[100px]'>

<div className='flex max-w-full min-h-max relative justify-center rounded-3xl items-center  shadow-zinc-900'>
            <img className='w-full max-h-max min-h-[350px] rounded-3xl object-cover object-left max-md:rounded-none' src="/images/community_planet.png" alt="Hero" />
            
            <div className="absolute w-full inset-0 flex flex-col justify-center px-24 max-md:px-8 py-10">
                <p className=' font-extrabold text-5xl text-white  max-md:text-4xl'>Join our community</p>

                <p className='max-w-[600px] text-white text-sm pt-2 font-medium '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accus ationem vel possimus quibusdam?</p>

                <div className='mt-10 gap-8 flex max-lg:flex-col'>
                    <input className='py-3 px-2 rounded-xl xl:w-[350px] lg:w-[350px] max-md:w-full ' type='email' name="email" placeholder='Email' autoComplete='Email'/>
                    <button className='bg-secondary text-white font-bold py-3 px-6 rounded-xl ' name="submit">Subscribe</button>
                </div>
            </div>
            
        </div>

    <Footer/>  
    </div>
  )
}
