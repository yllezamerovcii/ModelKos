import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Carousel from 'react-elastic-carousel';
import './style/DayOfModeling.scss'; // Ensure this path is correct
import circle from '../../assets/Footer/MODELkos - Instagram - agency - modeling - - photography-.png';
import arrow from '../../assets/theArrow.png';
import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/right.png';

const DayOfModeling = () => {
  const carouselRef = useRef(null);
  const { t } = useTranslation(); // Initialize translation

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  return (
    <div className="carousel-containerrr">
      <Carousel 
        className='theCarouselll'
        ref={carouselRef}
        pagination={true}
        infinite={true}
        itemsToShow={1} // Show one item at a time
        showArrows={false} 
        renderPagination={({ pages, activePage, onClick }) => (
          <div className="pagination-container">
              {pages.map((page) => (
                  <div
                      key={page}
                      onClick={() => onClick(page)}
                      className={`pagination-dot ${page === activePage ? 'active' : 'inactive'}`}
                  />
              ))}
          </div>
      )}>
        <div className="slide-with-text">
          <div className="background-container">
            <div className='teksti'>
              <div className='firstt'>
                <p>{t('DayOfModelingTextFirst')}</p> {/* Translation key for the first text */}
              </div>
              <div className='secondt'>
                <p>{t('DayOfModelingTextSecond')}</p> {/* Translation key for the second text */}
              </div>
            </div>
            <div className="images-containerr">
              <div className="imagee-div first-imagee" />
              <div className="imagee-div second-imagee" />
              <div className="circlee" />
              <div className="arrowW" />
            </div>
            <div className="Text-Overlay">
              <div className='textt'>
                <div className='firstT'>
                  <p>{t('DayOfModelingOverlayText1')}</p> {/* Translation key for overlay text 1 */}
                </div>
                <div className='secondT'>
                  <p>{t('DayOfModelingOverlayText2')}</p> {/* Translation key for overlay text 2 */}
                </div>
                <div className='thirdT'>
                  <p>{t('DayOfModelingOverlayText3')}</p> {/* Translation key for overlay text 3 */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='slides'>
          <div className="image-div slide2" />
        </div>
        <div>
          <div className="image-div slide3" />
        </div>
      </Carousel>

      <div
          className="custom-prev-arrow"
          onClick={handlePrev}
          style={{ backgroundImage: `url(${leftArrow})` }} // Add your custom left arrow image
      />
      <div
          className="custom-next-arrow"
          onClick={handleNext}
          style={{ backgroundImage: `url(${rightArrow})` }} // Add your custom right arrow image
      />
    </div>
  );
};

export default DayOfModeling;
