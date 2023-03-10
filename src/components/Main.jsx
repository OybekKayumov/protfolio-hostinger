import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div id='main'>
      <img 
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src="https://images.unsplash.com/photo-1580436541340-36b8d0c60bae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Oybek Kayumov</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
              I'm a 
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', // Types 'One'
                  1000, // Waits 1s
                  'Coder...', // Deletes 'One' and types 'Two'
                  1500, // Waits 2s                 
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
              />
            </h2>
            {/* social icons */}
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <a 
                href="https://twitter.com/KayumovOybek"
                target='_blank'
              >
                <FaTwitter className='cursor-pointer' size={25} src=""/>
              </a>
              {/* <Link to="https://www.linkedin.com/in/oybek-kayumov/"> */}
              
              <a 
                href="https://www.linkedin.com/in/oybek-kayumov/" target='_blank'
              >
                <FaLinkedin className='cursor-pointer' size={25}/>
              </a>
              {/* </Link> */}
              <a 
                href="https://github.com/OybekKayumov"
                target='_blank'
              >
                <FaGithub className='cursor-pointer' size={25}/>
              </a>
              <a 
                href="https://medium.com/@oybek.kayumov"
                target='_blank'
              >
                <FaMedium className='cursor-pointer' size={25}/>
              </a>
              <a 
                href="https://angel.co/profile/"
                target='_blank'
              >
                <FaAngellist className='cursor-pointer' size={25}/>
              </a>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Main