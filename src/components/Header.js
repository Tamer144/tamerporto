import React from 'react'
const Header = () => {

  return <div className='bg-gradient-to-b from-stone-900 to-stone-800 w-[100vw] h-[100vh]'>
        <div className='wall-background w-full h-full opacity-5 bg-cover'>
        </div>
        <h1 className='header-title text-5xl text-white opacity-100 absolute top-[45vh] left-[36vw] md:text-4xl md:left-[27vw]'>SoftWare Dev</h1>
        <h2 className='text-white absolute top-[55vh] left-[37vw] text-md bg-slate-600 h-[2rem] w-[7rem] md:left-[27vw] text-center hover:cursor-pointer'><a href='#contact'>Contact Us</a></h2>
    </div>
  
 
}

export default Header
