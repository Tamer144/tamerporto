import React from 'react'

const Contact = () => {
  return <div id='contact' className='flex flex-col justify-center items-center bg-gradient-to-b from-stone-800 to-stone-900 w-screen h-[70vh]'>
  <h1 className='text-white text-3xl'>Contact</h1>
  <div className='flex md:w-[70vw] place-content-around wide-cards-holder w-[40vw] h-[60vh] top-[16vh] p-10 flex-col'>
    <form className='flex flex-col'>
      <label for="fname" className='mt-5 text-white'>First Name</label>
      <input type='text' id='fname' className='rounded-md p-2'/>
      <label for='lname' className='mt-5 text-white'>Last Name</label>
      <input type='text' id='lname' className='rounded-md p-2'/>
      <label for='message' className='mt-5 text-white'>Message</label>
      <textarea id='message' className='rounded-md h-[20vh] p-2'/>
    </form>
  </div>
</div>
}

export default Contact

