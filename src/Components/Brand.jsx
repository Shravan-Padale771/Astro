import React from 'react'

export default function Brand() {
  return (
    <div className='flex flex-wrap items-center justify-around h-min  gap-x-8  p-4  max-w-full bg-slate-100'>
        <div className="w-36 h-36 flex items-center justify-center">
        <img className='object-contain w-full h-full' src="/images/SpaceX-Logo.png"/>
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
        <img className='object-contain w-full h-full' src="/images/nasa_logo.png"/>
        </div>
        <div className="w-28 h-28 flex items-center justify-center">
        <img className='object-contain w-full h-full' src="/images/Boeing-Logo.png"/>
        </div>
        <div className="w-28 h-28 flex items-center justify-center">
        <img className='object-contain w-full h-full' src="/images/Astroscale-logo.png"/>
        </div>
      
    </div>
  )
}
