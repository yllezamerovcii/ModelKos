import React from 'react';
import '../pages/style/Talent.scss'; 
import '../../assets/Talent/talent1.png';
import '../../assets/Talent/talent2.png';
import { useTranslation } from 'react-i18next';

const Talent = () => {
  const { t } = useTranslation();
  return (
    <div className="talent-container">
      {/* Left section with one image */}
      <div className="leftOne">
        <div className='left-image1' />
      </div>
      
      {/* Right section with two paragraphs and an image */}
      <div className="rightOne">
      <p>
        <span>{t('itsSharpCast.line1')}</span>
        {t('itsSharpCast.line2')}
        <span>{t('itsSharpCast.line3')}</span>
      </p>
      <p>
        <span>{t('itsSharpCast.line4')}</span>
        {t('itsSharpCast.line5')}
        <span>{t('itsSharpCast.line6')}</span>
        <span className='lastSpan'>{t('itsSharpCast.line7')}</span>
      </p>
        <img className="right-image1" />
      </div>
    </div>
  );
}

export default Talent;
