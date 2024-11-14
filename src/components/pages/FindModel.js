import React, { useState } from 'react';
import './style/FindModel.scss';

// Import the useTranslation hook
import { useTranslation } from 'react-i18next';

const FindModel = () => {
  const [isFemaleDropdownOpen, setIsFemaleDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  
  // Get the t function from useTranslation
  const { t } = useTranslation();

  return (
    <div className='container1'>
      <div className="left">
        <div className="FirstCircle-container">
          <div className="FirstCircle" />
        </div>
        <div className='leftt'>
          <p className='TheTitle'>{t('FindModelText1')}</p>
          <p className='TheTitle2'>{t('FindModelText2')}</p>
          <div className="dropdown-container">
            <div className="dropdown">
              <button 
                className='FemaleModels' 
                onClick={() => setIsFemaleDropdownOpen(!isFemaleDropdownOpen)}
              >
                <div className='PathIcon' />
                {t('FindModelButton1')}
                <div className='arrow-icon' />
              </button>  
              <div className="dropdown-content"></div>
            </div>
            <div className="dropdown">
              <button 
                className='FindLocation'
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              >
                <div className='LocationIcon' />
                {t('FindModelButton2')}
                <div className='arrow-icon' />
              </button>  
              <div className="dropdown-content"></div>
            </div>
            <button className='FindModel'>{t('FindModelButton3')}</button>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='circle-container'>
          <div className='circle' />
          <div className='WhiteArrow' />
        </div>
        <div className='first-image' />
        <div className='second-image' />
      </div>
    </div>
  );
};

export default FindModel;
