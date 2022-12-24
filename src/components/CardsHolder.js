import React from 'react'
import img from '../img/dark-gray.jpg'

const CardsHolder = () => {
  return <div className='relative lg:block bg-gradient-to-b from-stone-800 to-stone-900 w-screen h-[100vh]'>
    <div id='cards-holder' className='flex lg:block  place-content-around wide-cards-holder w-screen h-[60vh] absolute top-[16vh] p-10 lg:flex-col'>
        <div className='animate-pulse lg:w-full lg:h-[14rem] lg:flex-row lg:mb-3 p-5 opacity-80 bg-sky-50 w-[18rem] h-[35rem] rounded-lg flex flex-col'>
            <img className='lg:w-[40%] lg:h-full rounded-lg w-[100%] h-[50%]' src={img}></img>
            <div className='mt-5 lg:mt-0 lg:w-[55%] lg:h-full lg:ml-[5%] text-center p-5 rounded-lg bg-gradient-to-b from-stone-800 to-stone-900 w-full h-[50%]'>
                <h3 className='text-white text-xl'>Web Dev</h3>
                <p className='mt-10 lg:mt-6 lg:text-sm text-white md:text-[0.8rem]'>
                    Web development  programming and design  databases with varoius technologies .
                </p>
            </div>
        </div>
        <div className='animate-pulse lg:w-full lg:h-[14rem] lg:flex-row lg:mb-3 p-5 opacity-80 bg-sky-50 w-[18rem] h-[35rem] rounded-lg flex flex-col'>
            <img className='lg:w-[40%] lg:h-full rounded-lg w-[100%] h-[50%]' src={img}></img>
            <div className='mt-5 lg:mt-0 lg:w-[55%] lg:h-full lg:ml-[5%] text-center p-5 rounded-lg bg-gradient-to-b from-stone-800 to-stone-900 w-full h-[50%]'>
                <h3 className='text-white text-xl'>Web Dev</h3>
                <p className='mt-10 lg:mt-6 lg:text-sm text-white md:text-[0.8rem]'>
                    Web development  programming and design  databases with varoius technologies .
                </p>
            </div>
        </div>
        <div className='animate-pulse lg:w-full lg:h-[14rem] lg:flex-row lg:mb-3 p-5 opacity-80 bg-sky-50 w-[18rem] h-[35rem] rounded-lg flex flex-col'>
            <img className='lg:w-[40%] lg:h-full rounded-lg w-[100%] h-[50%]' src={img}></img>
            <div className='mt-5 lg:mt-0 lg:w-[55%] lg:h-full lg:ml-[5%] text-center p-5 rounded-lg bg-gradient-to-b from-stone-800 to-stone-900 w-full h-[50%]'>
                <h3 className='text-white text-xl'>Web Dev</h3>
                <p className='mt-10 lg:mt-6 lg:text-sm text-white md:text-[0.8rem]'>
                    Web development  programming and design  databases with varoius technologies .
                </p>
            </div>
        </div>
    </div>
    </div>
  
}

export default CardsHolder
