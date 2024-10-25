import React from 'react'
import Card from './Card'

export default function About() {
  return (
    <div className='min-h-screen flex max-md:flex-wrap gap-8 max-lg:gap-8 items-center justify-around max-lg:justify-evenly max-lg:flex-col mt-6 max-w-[1310px] p-4 mx-2 md:mx-[50px] lg:mx-[100px] '>

        <div className='flex w-full md:text-center lg:min-w-[400px]'>
            <p className='font-extrabold max-w-[600px] text-4xl my-5 max-md:text-2xl'>Lorem ipsum dologfr sit amet conse ctetur adipiv sicing elitg. lpe dit molestiae debitis plac dae quas odio?</p>


        </div>

        <div className='flex justify-center items-center max-w-full max-md:w-full max-md:flex-col '>
            <div>
                <Card 
                icon={"images/physics.png"}
                header={"Astronomy 101"}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunta veniam! Sequi accusamus libero facere excepturi voluptas commodi, asperi."}/>

                <Card icon={"images/telescope.png"}
                header={"Space Exploration"}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunta veniam! Sequi accusamus libero facere excepturi voluptas commodi, asperi."}/>
            </div>
            <div>
                <Card 
                icon={"images/clipboard.png"}
                header={"Latest Discoveries"}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunta veniam! Sequi accusamus libero facere excepturi voluptas commodi, asperi."}/>
                <Card 
                icon={"images/chart-pie.png"}
                header={"Space Technology"}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunta veniam! Sequi accusamus libero facere excepturi voluptas commodi, asperi."}/>
            </div>
        </div> 
    </div>
  )
}
