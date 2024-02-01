import React from 'react'
import QuadLogo from '../assets/QuadLogo.jpg'

const Header = () => {
  return (
    <header className='w-full h-20 bg bg-yellow-400 flex items-center justify-center gap-[10%]'>
      <img src={QuadLogo} className='h-14'/>
      <h1 className='text-3xl font-semibold'>React JS</h1>
    </header>
  )
}

export default Header