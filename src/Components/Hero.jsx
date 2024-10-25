import React, { useEffect, useState } from 'react'

export default function Hero() {

        const [totalSeconds, setTotalSeconds] = useState(0); // Initialize state to track total seconds
      
        useEffect(() => {
          const interval = setInterval(() => {
            setTotalSeconds(prev => prev + 1); // Increment total seconds every second
          }, 1000);
      
          // Cleanup the interval on component unmount
          return () => clearInterval(interval);
        }, []);
      
        // Format total seconds into "DD:HH:MM:SS"
        const formatTime = (totalSeconds) => {
          const days = Math.floor(totalSeconds / (60 * 60 * 24));
          const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
          const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
          const seconds = totalSeconds % 60;
      
          return (`${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
        };


  return (
    <div className='min-h-screen flex flex-col mt-6 max-w-[1310px] max-sm:mx-0 max-sm:p-0 p-4 mx-2 md:mx-[50px] lg:mx-[100px]'>
        <div className='flex max-w-full relative justify-center rounded-3xl items-center  shadow-zinc-900'>
            <img className='w-full max-h-[320px] min-h-[280px] max-sm:rounded-none rounded-3xl object-cover ' src="/images/hero_planet.png" alt="Hero" />
            
            <p className=' font-extrabold text-5xl absolute inset-0 flex px-6 py-8 max-w-[380px] max-sm:max-w-full text-white max-md:bg-zinc-900 max-md:bg-opacity-30 max-sm:rounded-none rounded-3xl max-md:text-4xl max-sm:text-4xl'>Unveling the wonders of universe</p>

            <img id="astro" className='flex max-md:z-[-10] max-md:bottom-[-52vh] max-md:left-[-15%] max-w-[430px]  max-lg:w-[200px] h-auto absolute right-0  bottom-[-60px]' src="/images/astro.png" alt="Hero" />
            
        </div>
        
        <div className='flex items-center justify-between max-md:flex-col'>
            <p className='max-w-[530px] max-lg:w-full text-sm mt-6 font-medium md:text-base  max-md:backdrop-blur-sm p-2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur inventore et vero repellat iusto, autem ex voluptatem quidea enim atque molestias expedita architecto doloribus sed. Doloremque a officiis corrupti non laboriosam.</p>

            <div className='flex flex-col max-md:mt-12 mt-20 w-[300px] rounded-lg h-fit p-4 bg-zinc-900'>
                <h4 className='flex items-center text-white font-semibold text-sm gap-1'>
                    <img className='h-7 bg-secondary rounded-lg p-1' src="/images/astro.png" alt="Hero" />
                    <p>Time up in Space </p>
                </h4>
                <p className='text-white text-lg pt-3 text-center font-semibold'>{formatTime(totalSeconds)}</p>
            </div>
        </div>
        <div className='flex max-md:justify-center max-md:mt-10 '>
            <button className='bg-zinc-900 text-white font-semibold py-3 px-6 rounded-md '>Explore</button>
            
        </div>
      
    </div>
  )
}
