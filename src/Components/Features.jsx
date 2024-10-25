import React from 'react'
import Feature_card from './Feature_card'

export default function Features() {
  return (
    <div className='min-h-screen max-md:h-[150vh]
    max-sm:h-[240vw] flex flex-col mt-6 max-sm:mb-60 relative max-w-[1310px]  p-4 mx-2 max-sm:mx-0 max-sm:p-0 md:mx-[50px] lg:mx-[100px]'>

<div className='flex max-w-full relative justify-center h-max rounded-3xl  items-center   shadow-zinc-900'>
            <img className='w-full max-h-[380px] min-h-[280px] rounded-3xl max-md: object-cover object-center max-sm:rounded-none ' src="/images/feature_planet.png" alt="Hero" />
            
            <div className="absolute w-full inset-0 flex items-center justify-center">
                <p className=' font-extrabold text-5xl  px-6 text-white  max-md:text-4xl'>Unveling the wonders of universe</p>
            </div>

            <div className="absolute bottom-[-250px] max-md:bottom-[-210px] left-0 h-full w-full gap-5 flex flex-col md:flex-row md:justify-center md:space-x-4 p-4">
                <Feature_card
                id={"01"}
                header={"Online free courses and tutorials"}
                content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vieniam, blanditiis explicabo, ex nesciunt esse illum dolore possimus."}/>

                <Feature_card
                id={"02"}
                header={"Online free courses and tutorials"}
                content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vieniam, blanditiis explicabo, ex nesciunt esse illum dolore possimus."}/>

                <Feature_card
                id={"03"}
                header={"Online free courses and tutorials"}
                content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vieniam, blanditiis explicabo, ex nesciunt esse illum dolore possimus."}/>

                
            </div>

        

            
            
        </div>

        
      
    </div>
  )
}
