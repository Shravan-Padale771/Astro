import React from 'react'

export default function Card(props) {
    const {icon, header, content} = props
  return (
    
        <div className='h-max p-2 max-w-[300px] max-md:max-w-[300px] max-lg:w-[700px] min-w-[200px] m-4 py-4 '>
            <img className='h-14 p-3 bg-secondary rounded-lg ' src={icon}/>

            <h4 className='font-bold pt-2 w-max'>{header}</h4>
            <p className='font-medium text-sm pt-1'>{content}</p>
        </div>
  )
}
