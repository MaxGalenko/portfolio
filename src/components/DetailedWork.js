import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/pathlor-tech.PNG';
import Img2 from '../assets/pathlor-tech2.PNG';
import Img3 from '../assets/pathlor-tech3.PNG';
import Img4 from '../assets/stellar-parking.PNG';
import Img5 from '../assets/stellar-parking2.PNG';
import Img6 from '../assets/stellar-parking3.PNG';
import Img7 from '../assets/launches-api.PNG';
import Img8 from '../assets/launches-api2.PNG';
import Img9 from '../assets/my-portfolio.png';
import Img10 from '../assets/my-portfolio2.png';
import Img11 from '../assets/my-portfolio3.png';
import Img12 from '../assets/bite-buddy.PNG';
import Img13 from '../assets/bite-buddy2.PNG';
import Img14 from '../assets/digital-nightmare.png';
import Img15 from '../assets/digital-nightmare2.png';
import Img16 from '../assets/digital-nightmare3.png';
import Img17 from '../assets/digital-nightmare4.png';
import Img18 from '../assets/smart-home.png';

const DetailedWork = () => {
  return (
    <section className='detail-section' id='detailed-work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='relative overflow-hidden border-2 border-white/50 rounded-x1' id='pathlor-tech'>
                {/* title */}
                <h2 className='h2 text-accent ml-4 mt-2'>Pathlor Tech</h2>
                {/* subtitle */}
                <h3 className='h3 ml-4'>Technologies used: HTML, CSS, MySQL, PHP, Bootstrap</h3>
                {/* description */}
                <p className='ml-4 mr-4'>
                  This was a project for the E-Commerce course. The intended purpose behind the project was to satisfy the client's needs and to bring a user-friendly e-commerce website to sell Custom Computers and Laptops.
                  The goal was for the client to be able to use the website efficiently without having any prior knowledge or experience in programming.
                  We created a website based on the MVC framework that uses HTML, CSS and Bootstrap to display all the information on the screen and PHP for any data manipulation or calculation that was done in the background.
                  Working on this project helped me deepen my front-end knowledge of HTML and CSS as well as learn a new language that being PHP for back-end development.
                  During this project, I learned how to work efficiently within a team comprised of 3 people.
                  Although, there was some communication problems, we ended up working well together as a team to complete the project to the best of our abilities.
                </p>
                {/* images */}
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img1} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img2} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img3} alt=''></img>
                {/* credits */}
                <p className='font-thin mt-10 ml-4'>
                  Credits: Ali Raza, Mert Kairstan Salvador
                </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='relative overflow-hidden border-2 border-white/50 rounded-x1' id='stellar-parking'>
                {/* title */}
                <h2 className='h2 text-accent ml-4 mt-2'>Stellar Parking</h2>
                {/* subtitle */}
                <h3 className='h3 ml-4'>Technologies used: .NET, C#, MySQL</h3>
                {/* description */}
                <p className='ml-4 mr-4'>
                  This was a project for the Application Development course. The intended purpose behind the project was to build a user-friendly and straightforward parking pay application.
                  The goal was for the user to be able to create an account to use that has their saved information. With that account they'd be able to pay for parking in the city.
                  I started by designing the UI before writing the back-end processes with C#.
                  Working on this project taught me how to use C#. I worked alone on this project, which taught me how to efficiently make use of my time and to use outside help whenever I would get stuck.
                </p>
                {/* images */}
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img4} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img5} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img6} alt=''></img>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='relative overflow-hidden border-2 border-white/50 rounded-x1' id='launches-api'>
                {/* title */}
                <h2 className='h2 text-accent ml-4 mt-2'>Launches API</h2>
                {/* subtitle */}
                <h3 className='h3 ml-4'>Technologies used: PHP, MySQL</h3>
                {/* description */}
                <p className='ml-4 mr-4'>
                  This was a project for the Web Services course.
                  The intended purpose behind the project was to create an API that contains information about space launches for various space companies including the likes of SpaceX and Nasa.
                  The users would be able to make API calls and have their outputs filtered, sorted and paginated.
                  We would start with fetching entire categories with an API call, then moving on to filtering, sorting, JWT Authentication, Logging errors/activity and finishing off with exception handling.
                  Working on this project helped me deepen my PHP knowledge. Working in a team of 4 helped me trust my teammates more and to distribute the workload more evenly.
                </p>
                {/* images */}
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img7} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img8} alt=''></img>
                {/* credits */}
                <p className='font-thin mt-10 ml-4'>
                  Credits: Ali Raza, Xedrich Abary, Jacob Lau
                </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='relative overflow-hidden border-2 border-white/50 rounded-x1' id='my-portfolio'>
                {/* title */}
                <h2 className='h2 text-accent ml-4 mt-2'>My Portfolio</h2>
                {/* subtitle */}
                <h3 className='h3 ml-4'>Technologies used: HTML, React, Tailwind CSS</h3>
                {/* description */}
                <p className='ml-4 mr-4'>
                  This was a personal project for my university application. The intended purpose behind this project was to build a portfolio for my university application and to learn a new JavaScript library and a CSS framework.
                  I started this project by following a tutorial on YouTube Which I used to build the look and feel of the website.
                  After I finished the tutorial, I modified and added my own components to fit my needs for this portfolio.
                  Working on this project helped me learn the basics of the React library and the Tailwind CSS framework.
                </p>
                {/* images */}
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img9} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img10} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img11} alt=''></img>
                {/* credits */}
                <p className='font-thin mt-10 ml-4'>
                  Credit: Cristian Mihai on YouTube
                </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='relative overflow-hidden border-2 border-white/50 rounded-x1' id='bite-buddy'>
                {/* title */}
                <h2 className='h2 text-accent ml-4 mt-2'>Bite Buddy</h2>
                {/* subtitle */}
                <h3 className='h3 ml-4'>Technologies used: Dart, Firebase</h3>
                {/* description */}
                <p className='ml-4 mr-4'>
                  This was a project for the Application Development course.
                  The intended purpose behind the project was to create an interactive menu application for a restaurant where you would be able to order and pay all without leaving the app.
                  We started by creating the 3 different users and connecting the firebase database. Each user would only be able to access their respective pages where they can do what their role inquires.
                  The three users are the customer, admin and the cook. Customers can order and pay for food, Admins can create new admin and cook accounts, and cooks can receive and distribute orders.
                  Working on this project helped learn a new language being dart, concepts behind mobile applications and a new database being firebase.
                  Being in a team of 3 was very convenient since we had 3 different types of users which meant that dividing the work between 3 people wasn't an issue and everyone could work asynchronously.
                </p>
                {/* images */}
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img12} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img13} alt=''></img>
                {/* credits */}
                <p className='font-thin mt-10 ml-4'>
                  Credits: Hayk Petrosyan, Alexandra Vovc
                </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='relative overflow-hidden border-2 border-white/50 rounded-x1' id='digital-nightmare'>
                {/* title */}
                <h2 className='h2 text-accent ml-4 mt-2'>Digital Nightmare</h2>
                {/* subtitle */}
                <h3 className='h3 ml-4'>Technologies used: C#, Unity</h3>
                {/* description */}
                <p className='ml-4 mr-4'>
                  This was a project for the Game Programming course. The intended purpose behind the project was to create a 3D video game that had a minimum of 5 minutes of gameplay.
                  We have decided to create a horror game where the objective is to escape a school from a monster. After writing the Game Design Document, we split the tasks between us.
                  I was responsible with the tutorial level and level design. I found free assets that fit the same theme and put them into our map. I coded the logic behind opening and closing the doors using C#.
                  Working on this project taught me how to find free assets and fix issues with colliders when designing a level.
                </p>
                {/* images */}
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img14} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img15} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img16} alt=''></img>
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img17} alt=''></img>
                {/* credits */}
                <p className='font-thin mt-10 ml-4'>
                  Credits: Ali Raza, Roberto Jr. Cannucci, Farouk Assoum, Imran Maslianov
                </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='relative overflow-hidden border-2 border-white/50 rounded-x1' id='iot-smart-home'>
                {/* title */}
                <h2 className='h2 text-accent ml-4 mt-2'>IoT Smart Home</h2>
                {/* subtitle */}
                <h3 className='h3 ml-4'>Technologies used: HTML, CSS, Python, Dash, Bootstrap, MQTT, MySQL, Arduino</h3>
                {/* description */}
                <p className='ml-4 mr-4'>
                  This was a project for the IoT course. The intended purpose behind the project was to create a Smart Home using IoT devices.
                  We had 4 phases during this project. At the beginning of each phase, we would divide the tasks as evenly as possible.
                  The first phase included opening and closing an LED using a web page. During this phase, I had to wire and connect the LED to the raspberry pi.
                  The second phase included connecting a DHT11 to display temperature and humidity on the dashboard and send an email if it reached a certain threshold. If the user answers with yes it would turn on the fan.
                  During this phase, I wrote the code to read the DHT11 and to send an email when the threshold gets reached.
                  The third phase included reading a photoresistor and when the luminosity goes under a certain level, it would turn on the LED automatically and send an email notifying of this occurrence.
                  During this phase, I wrote the code to send the email and fixed an issue with the reading of the luminosity level.
                  The forth phase included reading an RFID tag that contains information and preferences of a user. During this phase, I created the database with the users and their preferences.
                  Working on this project taught me Python, wiring different IoT devices and brokers like MQTT.
                </p>
                {/* images */}
                <img className='hover:scale-105 transition-all duration-500 mt-10 mb-10 border-t-2 border-b-2 border-white/50' src={Img18} alt=''></img>
                {/* credits */}
                <p className='font-thin mt-10 ml-4'>
                  Credits: Christopher Benson, Nicole Bautista
                </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedWork;