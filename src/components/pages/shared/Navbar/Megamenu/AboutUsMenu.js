import React from 'react';
import './AboutUsMenu.scss';
import image1 from '../../../../../assets/MegaMenu/aboutUs1.png';
import image2 from '../../../../../assets/MegaMenu/aboutUs2.png';
import { useTranslation } from 'react-i18next';

const AboutUsMenu = () => {
  const { t } = useTranslation();
  const columnsData = t('columnsData', { returnObjects: true });

  return (
    <div className="about-us-menu">
      <div className="first-part">
        {columnsData.map((column, index) => (
          <div key={index} className="column">
            <h3>{column.header}</h3>
            {column.rows.map((row, rowIndex) => (
              <p key={rowIndex}>{row}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="second-part">
        <div className="image-row">
          <div className="about-us-image">
            <img src={image1} alt="About Us 1" />
            <div className="image-overlay">
                <p>MODELKOS</p>
                <p>2022</p>
            </div>
          </div>
          <div className="about-us-image">
            <img src={image2} alt="About Us 2" />
            <div className="image-overlay">
              <p>MODELKOS</p>
              <p>2022</p>
            </div>
          </div>
        </div>
        <button className="action-button">About us</button>
      </div>
    </div>
  );
};

export default AboutUsMenu;
