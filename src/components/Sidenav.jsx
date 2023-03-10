import React, { useState} from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrBlog, GrProjects} from 'react-icons/gr'


const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log('state changed');
  }

  return (
    <div>
      <AiOutlineMenu 
        className='absolute top-4 right-4 z-[99] md:hidden' 
        onClick={handleNav}
      />

      {/* nav */}
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center z-20'>
            <a 
              onClick={handleNav}
              href="#main" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <AiOutlineHome size={20}/>
              <span className='pl-4' >Home</span>
            </a>
            <a
              onClick={handleNav} 
              href="#work" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <GrProjects size={20}/>
              <span className='pl-4' >Work</span>
            </a>
            <a 
              onClick={handleNav}
              href="#projects" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <AiOutlineProject size={20}/>
              <span className='pl-4' >Projects</span>
            </a>
            <a 
              onClick={handleNav}
              href="#blog" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrBlog size={20}/>
              <span className='pl-4' >Blog</span>
            </a>
            <a 
              onClick={handleNav}
              href="/main" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <BsPerson size={20}/>
              <span className='pl-4' >Resume</span>
            </a>
            <a 
              onClick={handleNav}
              href="#contact" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <AiOutlineMail size={20}/>
              <span className='pl-4' >Contact</span>
            </a>
          </div>
        )
        : (
          // if nav not true
          ''
        )
      }

      {/* full screen */}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineHome size={25} />
          </a>
          <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <GrProjects size={25} />
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineProject size={25} />
          </a>
          <a href="#blog" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <GrBlog size={25} />
          </a>
          <a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsPerson size={25} />
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav