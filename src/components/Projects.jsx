import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../assets/property.jpg';
import cryptoImg from '../assets/crypto.jpg';
import stockImg from '../assets/stock.jpg';
import twitchImg from '../assets/twitch.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1048px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi consectetur nobis laudantium obcaecati ab. Sed praesentium dolor in ducimus sapiente. Adipisci sunt consequuntur culpa eligendi voluptates? Consequuntur, atque voluptates.
      </p>
      
      {/* projects */}
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={cryptoImg} title='Crypto App'/>
        <ProjectItem img={propertyImg} title='Property App'/>
        <ProjectItem img={stockImg} title='Stock App'/>
        <ProjectItem img={twitchImg} title='Twitch App'/>
      </div>
    </div>
  )
}

export default Projects