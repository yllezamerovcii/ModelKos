import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../pages/style/AboutUs.scss';

const initialSlides = [
  {
    title: 'AboutUsHeader', // Use the translation key
    description: 'AboutUsText', // Use the translation key for translation
    logo: require('../../assets/AboutUs/text.png'),
    arrow: require('../../assets/AboutUs/Group 8.png'),
    images: [
      {
        src: require('../../assets/AboutUs/FirstImage.png'),
        name: 'DEA GASHI',
        role: 'AboutUsRole', // Use the translation key
        date: 'AboutUsDate'  // Use the translation key
      },
      {
        src: require('../../assets/AboutUs/SecondImage.png'),
        name: 'BLERTA BERISHA',
        role: 'AboutUsRole', // Use the translation key
        date: 'AboutUsDate'  // Use the translation key
      }
    ]
  },
  {
    title: 'AboutUsHeader', // Use the translation key
    description: 'AboutUsText', // Use the translation key for translation
    logo: require('../../assets/AboutUs/text.png'),
    arrow: require('../../assets/AboutUs/Group 8.png'),
    images: [
      {
        src: require('../../assets/AboutUs/FirstImage.png'),
        name: 'DEA GASHIiiii',
        role: 'AboutUsRole', // Use the translation key
        date: 'AboutUsDate'  // Use the translation key
      },
      {
        src: require('../../assets/AboutUs/SecondImage.png'),
        name: 'BLERTA BERISHA',
        role: 'AboutUsRole', // Use the translation key
        date: 'AboutUsDate'  // Use the translation key
      }
    ]
  }
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation(); // Initialize translation

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const { title, logo, arrow, images } = initialSlides[currentIndex];

  // Get the translated description
  const description = t('AboutUsText');

  return (
    <div className="carousel-containerr">
      <div className="carousel-slidee">
        <div className="text-contentt">
          <h1 className='TheFirstTitlee'>{t(title)}</h1> {/* Translate title */}
          <p className='TheTextt'>{description}</p>
        </div>
        <div className="right-contentt">
          <div 
            className="slide-logoo"
            style={{ content: `url(${logo})` }}
            aria-label="Logo" // Accessibility improvement
          ></div>
          <div 
            className="slide-arroww"
            style={{ content: `url(${arrow})` }}
            aria-label="Arrow" // Accessibility improvement
          ></div>
          <div className="images-roww">
            {images.map((image, index) => (
              <div key={index} className="image-itemm">
                <div 
                  className="slide-imagee"
                  style={{ content: `url(${image.src})` }}
                  aria-label={image.name} // Accessibility improvement
                ></div>
                <div className="image-infoo">
                  <p className="image-namee">{image.name}</p>
                  <p className="image-rolee">{t(image.role)}</p> {/* Translate role */}
                  <p className="image-datee">{t(image.date)}</p> {/* Translate date */}
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {initialSlides.map((_, index) => (
              <div
                key={index}
                className={`dott ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
