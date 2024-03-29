import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text=[110px]'>
                Maxym <span>Galenko</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                    'Student',
                    2000,
                    'Developer',
                    2000,
                  ]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />
            </motion.div>
            <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg max-auto lg:mx-0'>
              I am a hardworking and results-driven individual, committed to pushing boundaries and achieving excellence in every task.
              With a relentless curiosity, I embrace challenges and continuously seek opportunities to expand my knowledge.
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact' activeClass='active' smooth={true} spy={true}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <Link to='work' activeClass='active' smooth={true} spy={true}>
                <a href='#' className='text-gradient btn-link'>My Projects</a>
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.linkedin.com/in/maxym-galenko-9632a9264/'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/MaxGalenko'>
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          {/*<motion.div
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt=''></img>
                </motion.div>*/}
        </div>
      </div>
    </section>
  );
};

export default Banner;