import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section lg:h-screen' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 justify-start items-center'>
            <div>
              <h4 className='text-[30px] uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 justify-start items-center'>
              <div>
                <h4 className='text-[30px] uppercase text-accent font-medium mb-2 tracking-wide'>Email:</h4>
                <h2 className='text-[45px] leading-none mb-12'>maxymgalenko@outlook.com</h2>
                <h4 className='text-[30px] uppercase text-accent font-medium mb-2 tracking-wide'>Phone:</h4>
                <h2 className='text-[45px] leading-none mb-12'>(514) 294-2667</h2>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;