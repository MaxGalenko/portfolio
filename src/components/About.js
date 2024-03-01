import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView ] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto mb-20'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* image */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 {/*bg-about*/} bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I am a student and I study Computer Science in Vanier College.
            </h3>
            <p className='mb-6'>
              I am a student with 3 years of college experience in computer science and the world of programming. 
              I have successfully undertaken various projects during my three years of college, showcasing my ability to work both independently and collaboratively in a team.
              Some projects were completed individually, while others were accomplished through effective teamwork.
              I am currently applying my knowledge and skills in my internship at MR Control Systems.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-primary text=sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={7} duration={3} /> : null}
                </div>
                <div className='font-primary text=sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link to='contact' activeClass='active' smooth={true} spy={true}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <Link to='work' activeClass='active' smooth={true} spy={true}>
                <a href='#' className='text-gradient btn-link'>My Projects</a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
  
};

export default About;