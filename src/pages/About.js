import React from 'react';
import AboutUs from '../components/pages/AboutUs';
import Partnerships from '../components/pages/Partnerships';
import KosovaGirls from '../components/pages/KosovaGirls';
import WhatPeopleSay from '../components/pages/WhatPeopleSay';
import OurBlog from '../components/pages/Our-Blog/OurBlog';
import JoinAcademyy from '../components/pages/JoinAcademyy';
import AllPartners from '../components/pages/AllPartners';
import Subscribe from '../components/pages/Subscribe';
import History from '../components/pages/History';
import Benefits from '../components/pages/Benefits';
import Talent from '../components/pages/Talent';

const About = () => {
  return (
    <>
        <AboutUs/>
        <History />
        <Benefits />
        <Talent />
        <Partnerships />
        <KosovaGirls />
        <WhatPeopleSay />
        <OurBlog />
        <JoinAcademyy />
        <AllPartners />
        <Subscribe />
    </>
  )
}

export default About
