import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import img from '../../assets/AllPartners/NoPath - Copy (308).png';
import img2 from '../../assets/AllPartners/NoPath - Copy (309).png';
import img3 from '../../assets/AllPartners/NoPath - Copy (310).png';
import img4 from '../../assets/AllPartners/NoPath - Copy (311).png';
import img5 from '../../assets/AllPartners/NoPath - Copy (312).png';
import img6 from '../../assets/AllPartners/Group 43.png';
import img7 from '../../assets/AllPartners/Group 13147.png';
import '../pages/style/AllPartners.scss';

const images = [img, img2, img3, img4, img5, img6, img7];

const AllPartners = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className="all-partners-container">
      <h1 className="all-partners-title">{t('AllPartnersTitle')}</h1> {/* Use the translation key */}
      <div className="all-partners-marquee">
        <div className="all-partners-images">
          {images.map((image, index) => (
            <div
              key={index}
              className="all-partners-image"
              style={{ content: `url(${image})` }}
              aria-label={`Partner ${index + 1}`} // Accessibility improvement
            ></div>
          ))}
          {images.map((image, index) => (
            <div
              key={index + images.length}
              className="all-partners-image"
              style={{ content: `url(${image})` }}
              aria-label={`Partner ${index + 1}`} // Accessibility improvement
            ></div>
          ))}
        </div>
      </div>
      <button className="all-partners-button">{t('AllPartnersButton')}</button> {/* Use the translation key */}
    </div>
  );
};

export default AllPartners;


