import React from 'react'
import {SocialIcon} from 'react-social-icons';
const socialMediaCard = () => {
  return <div className='bg-gradient-to-b from-stone-800 to-stone-900 w-screen h-[50vh]'>
      <ul className='p-[11rem] text-white flex place-content-around'>
        <li><SocialIcon className='animate-bounce' url="https://www.facebook.com/createCreativeTT/" /></li>
        <li><SocialIcon className='animate-bounce' url="https://reddit.com/jaketrent" /></li>
        <li><SocialIcon className='animate-bounce' url="https://linkedin.com/jaketrent" /></li>
      </ul>
    </div>
  
}

export default socialMediaCard
