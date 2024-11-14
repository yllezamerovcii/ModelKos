import React, { useState, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import './ModelsMenu.scss';
import leftA from '../../../../../assets/MegaMenu/left.png';
import rightA from '../../../../../assets/MegaMenu/right.png';
import foto1 from '../../../../../assets/MegaMenu/1.png';
import foto2 from '../../../../../assets/MegaMenu/2.png';
import foto3 from '../../../../../assets/MegaMenu/3.png';
import foto4 from '../../../../../assets/MegaMenu/4.png';
import foto5 from '../../../../../assets/MegaMenu/5.png';
import foto6 from '../../../../../assets/MegaMenu/6.png';
import foto7 from '../../../../../assets/MegaMenu/7.png';
import foto8 from '../../../../../assets/MegaMenu/8.png';

const ModelsMenu = () => {
  
  const modelsColumnsData = [
    { header: 'CITY', rows: ['Prishtina', 'Peja', 'Prizren', 'Gjakove', 'Gjilan', 'Ferizaj', 'Mitrovice'] },
    { header: 'FEMALE', rows: ['Main', 'Direct', 'B Plus'] },
    { header: 'MALE', rows: ['Main', 'Direct', 'Big & Tall'] },
    { header: 'KIDS', rows: ['Babies', 'Todlers', 'Preschool', 'Gradeschooler', 'Teen'] },
    { header: 'ELDERLY', rows: ['Old Female', 'Old Male'] },
  ];

  const carouselItems = [
    { id: 1, image: foto1, header: 'BLINA BEKA', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
    { id: 2, image: foto2, header: 'ALORA GOJANI', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
    { id: 3, image: foto3, header: 'ANDA LLESHI', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
    { id: 4, image: foto4, header: 'DRIADA LAKNA', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
    { id: 5, image: foto5, header: 'KLEA GASHI', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
    { id: 6, image: foto6, header: 'ARTA KALLUDRA', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
    { id: 7, image: foto7, header: 'ANILA XHAFERI', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
    { id: 8, image: foto8, header: 'ALBINA MYRTEZAJ', text1: 'Model Photography Artist', text2: '19 MAY 2022' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1)); 
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setCurrentIndex((prevIndex) => Math.min(totalDots - 1, prevIndex + 1)); 
    }
  };

  const handleDotClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index * 2); 
    }
    setCurrentIndex(index);
  };

  const handleOnChange = (currentItem) => {
    const index = Math.floor(currentItem.index / 2);
    setCurrentIndex(index);
  };

  const totalDots = Math.ceil(carouselItems.length / 2); 

  return (
    <div className="models-menu">
      <div className="left-part">
        {modelsColumnsData.map((column, index) => (
          <div key={index} className="column">
            <h3>{column.header}</h3>
            {column.rows.map((row, rowIndex) => (
              <p key={rowIndex}>{row}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="right-part">
        <div className="header-row">
          <h2 className="header-title">Models</h2>
          <button className="action-button">View All &gt;</button>
        </div>

        <Carousel
          className="theCarousel"
          ref={carouselRef}
          itemsToShow={2}
          itemsToScroll={2} // Move 2 items at a time
          pagination={false}
          showArrows={false}
          itemPadding={[0, 10]}
          onChange={handleOnChange} // Update dots on slide change
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="carousel-item">
              <div style={{ content: `url(${item.image})` }} alt={item.header} className="carousel-image" />
              <h3 className="imageHeader">{item.header}</h3>
              <p className="imageRole">{item.text1}</p>
              <p className="imageDate">{item.text2}</p>
            </div>
          ))}
        </Carousel>

        <div className="Carousel-Arrowsm">
          <img
            src={leftA}
            alt="Previous"
            className="Arrowm Arrow-leftm"
            onClick={handlePrev}
          />
          <img
            src={rightA}
            alt="Next"
            className="Arrowm Arrow-rightm"
            onClick={handleNext}
          />
        </div>

        <div className="the-carousel-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <div
              key={index}
              className={`the-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelsMenu;
