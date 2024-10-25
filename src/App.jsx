import React from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Brand from './Components/Brand'
import About from './Components/About'
import Features from './Components/Features'
import Community from './Components/Community'

export default function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation/>
      <Hero/>
      <Brand/>
      <About/>
      <Features/>
      <Community/>
      
      
      
    </div>
  )
}
