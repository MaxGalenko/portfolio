import React, { lazy } from 'react';
// components
const Banner = lazy(() => import('./components/Banner'));
const Nav = lazy(() => import('./components/Nav'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Work = lazy(() => import('./components/Work'));
const DetailedWork = lazy(() => import('./components/DetailedWork'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <DetailedWork />
      <Contact />
    </div>
  );
};

export default App;