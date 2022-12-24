import React from 'react'
import img from '../img/dark-gray.jpg'

const CardsHolder2 = () => {
  return <div id='projects' className='flex items-center bg-gradient-to-b from-stone-900 to-stone-800 w-screen h-screen'>
      <div id='cards-holder2' className='flex place-content-around wide-cards-holder w-screen h-[60vh] top-[16vh] p-10 flex-col'>
        <div className='animate-pulse w-full h-[14rem] flex-row mb-3 opacity-80 bg-sky-50 w-[18rem] h-[35rem] rounded-lg flex'>
            <img className='w-[40%] h-full w-[100%] h-[50%]' src={img}></img>
            <div className='w-[60%] h-full text-center p-5  bg-gradient-to-b from-stone-800 to-stone-900 w-full h-[50%]'>
                <h3 className='text-white text-xl'>Web Dev</h3>
                <p className='mt-10 lg:mt-6 lg:text-sm text-white md:text-[0.8rem]'>
                    Web development  programming and design  databases with varoius technologies .
                </p>
            </div>
        </div>
        <div className='animate-pulse w-full h-[14rem] flex-row mb-3 opacity-80 bg-sky-50 w-[18rem] h-[35rem] rounded-lg flex'>
            <img className='w-[40%] h-full w-[100%] h-[50%]' src={img}></img>
            <div className='w-[60%] h-full text-center p-5  bg-gradient-to-b from-stone-800 to-stone-900 w-full h-[50%]'>
                <h3 className='text-white text-xl'>Web Dev</h3>
                <p className='mt-10 lg:mt-6 lg:text-sm text-white md:text-[0.8rem]'>
                    Web development  programming and design  databases with varoius technologies .
                </p>
            </div>
        </div>
        <div className='animate-pulse w-full h-[14rem] flex-row mb-3 opacity-80 bg-sky-50 w-[18rem] h-[35rem] rounded-lg flex'>
            <img className='w-[40%] h-full w-[100%] h-[50%]' src={img}></img>
            <div className='w-[60%] h-full text-center p-5  bg-gradient-to-b from-stone-800 to-stone-900 w-full h-[50%]'>
                <h3 className='text-white text-xl'>Web Dev</h3>
                <p className='mt-10 lg:mt-6 lg:text-sm text-white md:text-[0.8rem]'>
                    Web development  programming and design  databases with varoius technologies .
                </p>
            </div>
        </div>
    </div>
    </div>
  
}

export default CardsHolder2
