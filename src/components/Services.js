import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
const services = [
  {
    name: 'Full-Stack Web Development',
    description: 'Expertise in designing and developing dynamic and responsive websites. Proficient use of front-end technologies such as HTML, CSS, JavaScript and React' +
    ' as well as back-end technologies such as PHP.',
    link: 'Learn more'
  },
  {
    name: 'Mobile App Development',
    description: 'Skill in developing mobile applications for iOS and android. Familiarity with cross-platform development frameworks such as Flutter.',
    link: 'Learn more'
  },
  {
    name: 'Game Development',
    description: 'Knowledge of game development concepts and Unity engine. Experience in 3D level design. Skills in scripting languages such as C# for game logic.',
    link: 'Learn more'
  },
  {
    name: 'IoT System Development',
    description: 'Expertise in building IoT systems, including sensors, LED, RFID and data processing. Familiarity with communication protocols such as MQTT.',
    link: 'Learn more'
  },
  {
    name: 'Database Management',
    description: 'Experience in designing and managing databases using MySQL. Knowledge of integrating databases into various fields.',
    link: 'Learn more'
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I am a student</h3>
            <Link to='work' activeClass='active' smooth={true} spy={true}>
              <button className='btn btn-lg'>See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-auto mx-[38px] mb-2 flex' key={index}>
                    <div className='max-w-[410px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{ name }</h4>
                      <p className='font-secondary leading-tight'>{ description }</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <Link to='work' activeClass='active' smooth={true} spy={true}>
                        <a href='#' className='text-gradient text-sm'>{ link }</a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;