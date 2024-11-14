import React, { useState, useRef, useEffect } from 'react';
import { cardData } from '../Models/Data'; // Adjust the path as needed
import '../Models/Models.scss'; // Ensure your styles are imported
import Carousel from 'react-elastic-carousel';
import { useTranslation } from 'react-i18next';

const Models = () => {
  const { t } = useTranslation(); // Initialize translation

  const tabNames = [
    t('tabNames.all'),
    t('tabNames.prishtina'),
    t('tabNames.peja'),
    t('tabNames.ferizaji'),
    t('tabNames.mitrovica'),
    t('tabNames.gjakova'),
    t('tabNames.gjilani'),
    t('tabNames.prizreni'),
    t('tabNames.viewAll'),
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Ref for Carousel
  const [itemsToShow, setItemsToShow] = useState(1);

  // Dynamically calculate the number of items to show based on window width
  const calculateItemsToShow = () => {
    const width = window.innerWidth;
    if (width < 769) return 1;
    if (width >= 769 && width < 1025) return 2;
    if (width >= 1025 && width < 1441) return 3;
    return 4;
  };

  useEffect(() => {
    setItemsToShow(calculateItemsToShow());

    const handleResize = () => {
      setItemsToShow(calculateItemsToShow());
      console.log(`Window width: ${window.innerWidth}, itemsToShow: ${calculateItemsToShow()}`);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFilteredData = () => {
    if (activeTab === 1 || activeTab === tabNames.length - 1) {
      return cardData;
    }

    const location = tabNames[activeTab - 1];
    return cardData.filter(card => card.location === location);
  };

  const cardsToDisplay = getFilteredData();

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, Math.ceil(cardsToDisplay.length / itemsToShow) - 1);
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="models-container">
      <h1 className='modelsTitle'>{t('ModelsTitle')}</h1> {/* Access title translation */}
      <div className="tabs">
        {tabNames.map((tabName, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index + 1 ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(index + 1);
              setCurrentIndex(0); // Reset carousel to the first slide when tab changes
            }}
          >
            {tabName}
          </button>
        ))}
      </div>

      <div className="carousel-wrapperr">
        <button className="arroww arrow-leftt" onClick={handlePrev}>
          &#8592;
        </button>

        <Carousel
          ref={carouselRef}
          itemsToShow={itemsToShow} // Dynamically set itemsToShow based on window width
          pagination={false} // Disable default pagination
          showArrows={false}
          onChange={(currentItem, nextItem) => {
            setCurrentIndex(nextItem.index); // Update currentIndex based on next item
          }}
        >
          {cardsToDisplay.map(card => (
            <div className="carousel-item" key={card.id}>
              <div className="cardd">
                <div
                  className="card-image"
                  style={{ content: `url(${card.image})` }} // Set background image
                />
                <button className="card-button">{t('ViewDetailsButton')}</button> {/* Translate button */}
                <p className='cardTitle'>{t(card.titleKey)}</p> {/* Translate title */}
                <div className="card-info">
                  <div className="card-info-item">
                    <span>{card.name}</span>
                    <span className='cardPrice'>{t(card.priceKey)}</span> {/* Translate price */}
                  </div>
                  <div className="card-info-bottom">
                    <div className="card-info-item-location">
                      <div className="info-icon"/>
                      <span>{card.location}</span>
                    </div>
                    <div className="card-info-item-number">
                      <div src={card.numberLogo} alt="Number Icon" className="info-icon" />
                      <span>{card.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <button className="arroww arrow-rightt" onClick={handleNext}>
          &#8594;
        </button>
      </div>

      <div className="dots">
        {Array.from({ length: Math.ceil(cardsToDisplay.length / itemsToShow) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.goTo(index);
              }
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
