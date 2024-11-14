import React from 'react';
import Navbar from '../components/pages/shared/Navbar/Navbar';
import FindModel from '../components/pages/FindModel';
import AboutUs from '../components/pages/AboutUs';
import DayOfModeling from '../components/pages/DayOfModeling';
import Gallery from '../components/pages/Gallery/Gallery';
import BeingClassy from '../components/pages/BeingClassy';
import ModelMarketing from '../components/pages/ModelMarketing';
import Models from '../components/pages/Models/Models';
import WhatWeOffer from '../components/pages/WhatWeOffer/WhatWeOffer';
import BecomeModel from '../components/pages/BecomeModel';
import Partnerships from '../components/pages/Partnerships';
import KosovaGirls from '../components/pages/KosovaGirls';
import WhatPeopleSay from '../components/pages/WhatPeopleSay';
import OurBlog from '../components/pages/Our-Blog/OurBlog';
import JoinAcademyy from '../components/pages/JoinAcademyy'; 
import AllPartners from '../components/pages/AllPartners'; 
import Subscribe from '../components/pages/Subscribe'; 

function Home() {
    return (
      <>
        <Navbar />
        <FindModel />
        <AboutUs />
        <DayOfModeling />
        <Gallery />
        <BeingClassy />
        <ModelMarketing />
        <Models />
        <WhatWeOffer />
        <BecomeModel />
        <WhatPeopleSay />
        <Partnerships />
        <KosovaGirls />
        <OurBlog />
        <JoinAcademyy />
        <AllPartners />
        <Subscribe />
      </>
    );
}

export default Home;

  