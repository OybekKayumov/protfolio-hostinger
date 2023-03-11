import React from 'react';
import FooterContainer from './FooterContainer';
import SocialIcons from './SocialIcons';
import { Icons } from './menus';

const Footer = () => {
  return (
    // <footer className='bg-gray-900 text-white'>
    <footer className='m-auto md:pl-20 p-4 py-16 bg-gray-900 text-white'>
      <div className='md:flex md:items-center md:justify-between sm:px-12 bg-[#ffffff19] py-7'>
        <h1 
          className='lg-text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'
        >
          <span className='text-teal-400'>Ready</span> to get started? Talk to us today
          </h1>

          <div>
            <input 
              type="text" name="" id="" placeholder='Enter Your ph.no'
              className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none'
            />
            <button
              className='bg-teal-400 hover::bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full mt-3'
            >
              Request Code
            </button>
          </div>
      </div>
      <FooterContainer />

      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-white-400 text-sm pb-8'        
      >
        <span>© 2023. Oybek Kayumov. All rights reserved.</span>
        <span> Terms. Privacy Policy.</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  )
}

export default Footer