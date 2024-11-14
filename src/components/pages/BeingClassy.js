import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../pages/style/BeingClassy.scss';

const BeingClassy = () => {
  const { t } = useTranslation(); // Destructure the t function from useTranslation

  return (
    <div className='main1'>
      <div className='logo1'>
        <div className='Logo1' /> 
      </div>
      <div className='text1'>
        <div className='firstText1'>
          <p>{t('BeingClassyFirstText1')}</p> {/* Use t to get the translated text */}
        </div>
        <div className='secondText1'>
          <p>{t('BeingClassySecondText1')}</p> {/* Use t to get the translated text */}
        </div>
      </div>
      <div className='foto1'/> 
    </div>
  );
}

export default BeingClassy;
