import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useTranslation } from 'react-i18next';
import '../pages/style/Benefits.scss';

// PaginationDots Component
const PaginationDots = ({ totalSlides, activePage, onPageChange }) => {
  return (
    <div className="pagination-dotss">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`dot ${activePage === index ? 'active' : ''}`}
          onClick={() => onPageChange(index)}
        ></span>
      ))}
    </div>
  );
};

const Benefits = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [itemsToShow, setItemsToShow] = useState(4); // Default to 4 slides
  const [activePage, setActivePage] = useState(0); // State to track active page
  const [carouselRef, setCarouselRef] = useState(null); // Ref for the carousel
  
  // Translate card data
  const cardData = [
    { id: 1, text: t('benefits.0.text') },
    { id: 2, text: t('benefits.0.text') },
    { id: 3, text: t('benefits.1.text') },
    { id: 4, text: t('benefits.2.text') },
    { id: 5, text: t('benefits.0.text') },
    { id: 6, text: t('benefits.1.text') },
    { id: 7, text: t('benefits.2.text') },
    { id: 8, text: t('benefits.3.text') }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(cardData.length / itemsToShow); 

  // Update itemsToShow based on screen width
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);
      } else if (window.innerWidth <= 1440) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow(); // Initial check
    window.addEventListener('resize', updateItemsToShow); // Update on resize

    return () => window.removeEventListener('resize', updateItemsToShow); // Cleanup listener
  }, []); 

  // Handle page change via pagination dots
  const handlePageChange = (pageIndex) => {
    setActivePage(pageIndex);
    if (carouselRef) {
      carouselRef.goTo(pageIndex); // Navigate to the correct page
    }
  };

  // Define arrow handlers
  const handlePrev = () => {
    if (carouselRef) {
      carouselRef.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef) {
      carouselRef.slideNext();
    }
  };

  return (
    <div className="benefits">
      <p className="benefitsHeader">{t('BenefitsHeader')}</p> {/* Use translated header */}
      <Carousel
        itemsToShow={itemsToShow}
        pagination={false} // Disable default pagination
        onChange={({ index }) => setActivePage(index)} // Update active page on slide change
        ref={(el) => setCarouselRef(el)} // Set ref for the carousel
        renderArrow={({ type, onClick }) => (
          <>
            <div className="custom-prev-arroww1" onClick={handlePrev} />
            <div className="custom-next-arroww1" onClick={handleNext} />
          </>
        )}
      >
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className="Card-wrapperr"
          >
            <div className="Cardd">
              <p className="cardTextt">{card.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
      
      <PaginationDots 
        totalSlides={totalPages} // Pass total slides to pagination component
        activePage={activePage} 
        onPageChange={handlePageChange} 
      />
      
      <button className="SeeAllButton">{t('BenefitsButton')}</button>
    </div>
  );
};

export default Benefits;
