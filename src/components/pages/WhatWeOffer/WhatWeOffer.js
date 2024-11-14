import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import '../WhatWeOffer/WhatWeOffer.scss'; 
import foto1 from '../../../assets/What we offer/498953_dress_clothes_bride_wedding_clothing_icon.png';
import foto2 from '../../../assets/What we offer/camera.png';
import foto3 from '../../../assets/What we offer/9040369_gender_ambiguous_icon.png';
import foto4 from '../../../assets/What we offer/4747498_instagram_social media_icon.png';
import foto5 from '../../../assets/What we offer/jobs.png';
import foto6 from '../../../assets/What we offer/management.png';
import foto7 from '../../../assets/What we offer/brand.png';
import foto8 from '../../../assets/What we offer/collab.png';
import buttonLogo from '../../../assets/What we offer/arrow-left-black.png';
import buttonLogo1 from '../../../assets/What we offer/arrow-white.png';

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

const WhatWeOffer = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [itemsToShow, setItemsToShow] = useState(4); // Default to 4 slides
  const [activePage, setActivePage] = useState(0); // State to track active page
  const [carouselRef, setCarouselRef] = useState(null); // Ref for the carousel
  const [hoveredCardId, setHoveredCardId] = useState(null); // Track the hovered card ID
  
  // Translate card data
  const cardData = [
    { 
      id: 1, 
      img: foto1,
      title: t('services.0.title'), 
      text: t('services.0.text'), 
      button: t('services.0.button'), 
      buttonLogo: buttonLogo 
    },
    { 
      id: 2, 
      img: foto2, 
      title: t('services.1.title'), 
      text: t('services.1.text'), 
      button: t('services.1.button'), 
      buttonLogo: buttonLogo  
    },
    { 
      id: 3, 
      img: foto3,
      title: t('services.2.title'), 
      text: t('services.2.text'), 
      button: t('services.2.button'), 
      buttonLogo: buttonLogo  
    },
    { 
      id: 4, 
      img: foto4,
      title: t('services.3.title'), 
      text: t('services.3.text'), 
      button: t('services.3.button'), 
      buttonLogo: buttonLogo  
    },
    { 
      id: 5, 
      img: foto5,
      title: t('services.4.title'), 
      text: t('services.4.text'), 
      button: t('services.4.button'), 
      buttonLogo: buttonLogo 
    },
    { 
      id: 6, 
      img: foto6, 
      title: t('services.5.title'), 
      text: t('services.5.text'), 
      button: t('services.5.button'), 
      buttonLogo: buttonLogo  
    },
    { 
      id: 7, 
      img: foto7,
      title: t('services.6.title'), 
      text: t('services.6.text'), 
      button: t('services.6.button'), 
      buttonLogo: buttonLogo 
    },
    { 
      id: 8, 
      img: foto8, 
      title: t('services.7.title'), 
      text: t('services.7.text'), 
      button: t('services.7.button'), 
      buttonLogo: buttonLogo  
    }
  ];

  const totalPages = Math.ceil(cardData.length / itemsToShow); // Calculate total slides/pages

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

  // Handle page change
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
    <div className="what-we-offer">
      <p className="WhatWeOffer">{t('WhatWeOfferHeader')}</p> {/* Use translated header */}
      <Carousel
        itemsToShow={itemsToShow}
        pagination={false} // Disable default pagination
        onChange={({ index }) => setActivePage(index)} // Update active page on change
        ref={(el) => setCarouselRef(el)} // Set ref for the carousel
        renderArrow={({ type, onClick }) => (
          <>
            <div className="custom-prev-arroww" onClick={handlePrev} />
            <div className="custom-next-arroww" onClick={handleNext} />
          </>
        )}
      >
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className="Card-wrapper"
            onMouseEnter={() => setHoveredCardId(card.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <div className="Card">
              <h2 className="theTitle">{card.title}</h2>
              <div 
                className="image-containerRr" 
                style={{ content: `url(${card.img})`}} 
                alt={card.title}
              />
              <h3 className="cardTitle">{card.title}</h3>
              <p className="cardText">{card.text}</p>
              <div className="buttons-container">
                {card.button && <button>{card.button}</button>}
                {card.buttonLogo && (
                  <img 
                    className="ButtonLogo" 
                    src={hoveredCardId === card.id ? buttonLogo1 : card.buttonLogo} 
                    alt="Button logo" 
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <PaginationDots 
        totalSlides={totalPages} // Pass total slides to pagination component
        activePage={activePage} 
        onPageChange={handlePageChange} 
      />
      <button className="SeeAllButton">{t('WhatWeOfferButton')}</button>
    </div>
  );
};

export default WhatWeOffer;
