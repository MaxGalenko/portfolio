import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import Img1 from '../assets/launches-api.PNG';
import Img2 from '../assets/my-portfolio.png';
import Img3 from '../assets/digital-nightmare2.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <h2 className='h2 leading-tight text-accent mt-20 mb-36'>
                My Latest <br />
                Work.
            </h2>
            {/* image */}
            <Link to='bite-buddy' activeClass='active' smooth={true} spy={true}>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1 mt-3'>
                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  {/* image */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''></img>
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>Back-End Development</span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Launches API</span>
                  </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mt-2'>
              {/* image */}
              <Link to='my-portfolio' activeClass='active' smooth={true} spy={true}>
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    {/* image */}
                    <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''></img>
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                      <span className='text-gradient'>Full-Stack Web Development</span>
                    </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white'>My Portfolio</span>
                    </div>
                </div>
              </Link>
              {/* image */}
              <Link to='digital-nightmare' activeClass='active' smooth={true} spy={true}>
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    {/* image */}
                    <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''></img>
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                      <span className='text-gradient'>Game Development</span>
                    </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white'>Digital Nightmare</span>
                    </div>
                </div>
              </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;