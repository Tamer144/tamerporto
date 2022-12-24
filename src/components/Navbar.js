import React from 'react'
import {MenuIcon , XIcon} from '@heroicons/react/outline'
const Navbar = () => {
    const openTheMobileMenu = ()=>{
             document.getElementById('mobileMenu').classList.replace('close-menu' , 'open-menu')

    }
    const closeTheMobileMenu =()=>{
        document.getElementById('mobileMenu').classList.replace('open-menu' , 'close-menu')

    }
  return (
      <div className='z-10 fixed bg-stone-900 h-[80px] w-screen'>
        <div className='flex justify-between text-white'>
            <div>
                <a href='/' className='flex mx-7'>
                    <div className='logo my-7 w-[55px] h-[55px]'></div>
                    <h1 className='my-7 font-bold text-3xl sm:text-2xl sm:ml-2'>Tamer Fakhoury</h1>
                </a>
            </div>
            <ul className='flex px-7 py-6 md:hidden text-md'>
                <li className='px-5 hover:text-neutral-400'><a href='/'>Home</a></li>
                <li className='px-5 hover:text-neutral-400'><a href='/about'>About</a></li>
                <li className='px-5 hover:text-neutral-400'><a href='#projects'>Projects</a></li>
                <li className='px-5 hover:text-neutral-400'><a href='#contact'>Contact</a></li>
            </ul>
            <MenuIcon onClick={openTheMobileMenu} className='w-7 mx-6 mb-6 text-white hidden hover:cursor-pointer md:flex '/>
        </div>
        <ul id='mobileMenu' className='absolute close-menu w-[99.9vw] h-[87.3vh] z-10 bg-stone-900 flex-col space-y-20 text-white justify-center items-center text-3xl'>
            <XIcon onClick={closeTheMobileMenu} className='w-7 absolute right-[5%] top-[5%] text-white hover:cursor-pointer '/>

                <li className='px-5 hover:text-neutral-400'><a href='/'>Home</a></li>
                <li className='px-5 hover:text-neutral-400'><a href='/about'>About</a></li>
                <li className='px-5 hover:text-neutral-400'><a href='#projects'>Projects</a></li>
                <li className='px-5 hover:text-neutral-400'><a href='#contact'>Contact</a></li>
            </ul>
      </div>
  )
}

export default Navbar
