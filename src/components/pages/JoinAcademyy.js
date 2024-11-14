import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../pages/style/JoinAcademyy.scss';
import Carousel from 'react-elastic-carousel';

const PaginationDots = ({ totalSlides, activePage, onPageChange }) => {
  return (
    <div className="pagination-dots1">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`dot1 ${activePage === index ? 'active' : ''}`}
          onClick={() => onPageChange(index)}
        ></span>
      ))}
    </div>
  );
};

const JoinAcademyy = () => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [activePage, setActivePage] = useState(0); // State to track active slide
  const carouselRef = useRef(null); // Reference to access the carousel

  const handlePrev = () => {
    carouselRef.current.slidePrev(); // Slide to the previous slide
  };

  const handleNext = () => {
    carouselRef.current.slideNext(); // Slide to the next slide
  };

  const handlePageChange = (index) => {
    carouselRef.current.goTo(index); // Go to the clicked dot’s slide
    setActivePage(index); // Update active dot
  };

  const handleChange = (currentItem) => {
    setActivePage(currentItem.index); // Sync with carousel when slides change
  };

  const totalSlides = 3; // Total number of slides

  return (
    <div className='mainContainerr'>
      <div className="join-academy-carousel">
        <Carousel 
          ref={carouselRef} 
          onChange={handleChange} // Listen to changes and update activePage
          showArrows={false}      // Use custom arrows, hide default
          pagination={false}
        >
          {/* Slide 1 */}
          <div className="slide">
            <div className="left-text">
              <h3>BE</h3>
              <h3>A</h3>
              <h3>MODEL</h3>
            </div>
            <div className="header">
              <div className="logo"/>
              <h2 className="title">{t('JoinAcademyTitle')}</h2> 
            </div>
            <div className="content">
              <div className="right-content">
                <p className="description">
                  {t('JoinAcademyParagraph')} 
                </p>
                <button className="cta-button">{t('JoinAcademyButton')}</button> 
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <p>Slide 2</p>
          </div>

          {/* Slide 3 */}
          <div className="slide">
            <p>Slide 3</p>
          </div>
        </Carousel>

        <PaginationDots 
          totalSlides={totalSlides}
          activePage={activePage}
          onPageChange={handlePageChange}
        />

        <div className="custom-prev-arrow1" onClick={handlePrev} />
        <div className="custom-next-arrow1" onClick={handleNext} />
      </div>
    </div>
  );
};

export default JoinAcademyy;
