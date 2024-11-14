import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../pages/style/WhatPeopleSay.scss';
import leftA from '../../assets/WhatPeopleSay/arrow-left.png';
import rightA from '../../assets/WhatPeopleSay/arrow-right.png';

const PaginationDots = ({ pages, activePage, onPageChange }) => {
  return (
    <div className="theDotss">
      {pages.map((_, index) => (
        <span
          key={index}
          className={`theDott ${activePage === index ? 'active' : ''}`}
          onClick={() => onPageChange(index)}
        ></span>
      ))}
    </div>
  );
};

const WhatPeopleSay = () => {
  const { t } = useTranslation(); // Use the translation hook
  const carouselRef = useRef(null);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
  ];

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const renderPagination = ({ pages, activePage, onClick }) => {
    return (
      <PaginationDots
        pages={pages}
        activePage={activePage}
        onPageChange={onClick}
      />
    );
  };

  return (
    <div className='TheMainOne'>
      <h1 className='theHeader1'>{t('WhatPeopleSayHeader')}</h1>
      <div className="what-people-say">
        <div className="theText-overlay">
          <div className="heading-wrapper">
            <p>{t('WhatPeopleSayParagraph')} <span className='lastWord'>{t('WhatPeopleSaySpan')}</span></p>
          </div>
        </div>
        <div className="carousel-boxx">
          <Carousel
            ref={carouselRef}
            breakPoints={breakPoints}
            showArrows={false}
            renderPagination={renderPagination}
          >
            <div className="slide-content">
              <div className="slide-top"></div>
              <div className="slide-header">
                <p>{t('WhatPeopleSaySlideHeader')}</p>
              </div>
              <div className="slide-text">
                <p>{t('WhatPeopleSaySlideParagraph')}</p>
              </div>
              <div className="slide-bottom">
                <div className="left-content">
                  <p>XHENSILA HALIMI</p>
                  <p>{t('WhatPeopleSayLeftContentP')}</p>
                  <p className="rating-container">
                    <span className="rating-score">{t('WhatPeopleSayLeftContentSpan')}</span>
                    <span className="rating-stars">
                      <span className="star filled"></span>
                      <span className="star filled"></span>
                      <span className="star filled"></span>
                      <span className="star filled"></span>
                      <span className="star"></span>
                    </span>
                    <span className="rating-score">(4.0)</span>
                  </p>
                </div>
                <div className="right-content">
                  <div className='fotoo1'/>
                </div>
              </div>
              <div className="background-imagee">
                <div className='background-imageeE'/>
              </div>
            </div>

            {/* Other slides */}
            <div className="slide-content">
              <div className="slide-header">
                <p>{t('WhatPeopleSaySlideHeader')}</p>
              </div>
              <div className="slide-text">
                <p>{t('WhatPeopleSaySlideParagraph')}</p>
              </div>
              <div className="slide-bottom">
                <div className="left-content">
                  <p>XHENSILA HALIMI</p>
                  <p>{t('WhatPeopleSayLeftContentP')}</p>
                  <p className="rating-container">
                    <span className="rating-score">{t('WhatPeopleSayLeftContentSpan')}</span>
                    <span className="rating-stars">
                      <span className="star filled"></span>
                      <span className="star filled"></span>
                      <span className="star filled"></span>
                      <span className="star filled"></span>
                      <span className="star"></span>
                    </span>
                    <span className="rating-score">(4.0)</span>
                  </p>
                </div>
                <div className="right-content">
                  <div className='fotoo1'/>
                </div>
              </div>
              <div className="background-imagee">
                <div className='background-imageeE'/>
              </div>
            </div>

            {/* Add more slides as needed */}
          </Carousel>
        </div>
        <div className="Carousel-Arrows">
          <img 
            src={leftA} 
            alt="Previous" 
            className="Arrow Arrow-left" 
            onClick={handlePrev} // Attach handler to go to previous slide
          />
          <img 
            src={rightA} 
            alt="Next" 
            className="Arrow Arrow-right" 
            onClick={handleNext} // Attach handler to go to next slide
          />
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
