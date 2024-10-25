import React from 'react'

export default function Feature_card(props) {
    const {id, content, header} = props
  return (
    
    <div className="bg-white py-10 px-6 h-fit max-h-[375px] min-w-[200px]   md:w-1/3 shadow-lg rounded-3xl mb-4 md:mb-0 mx-auto  md:mx-0">
      <h2 className='xl:text-5xl lg:text-3xl md:text-4xl sm:text-4xl max-sm:text-4xl font-extrabold text-secondary rounded-lg '> {id}. </h2>

      <h4 className='font-bold xl:text-lg max-md:text-md sm:text-md max-w-full pt-4 max-sm:pt-3'>{header}</h4>
      <p className='xl:font-medium max-md:font-normal lx:text-base max-md:text-sm pt-6 sm:text-sm max-sm:pt-4 object-contain'>{content}</p>
    </div>
    
  )
}
