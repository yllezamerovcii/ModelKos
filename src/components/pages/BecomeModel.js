import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../pages/style/BecomeModel.scss';

const BecomeModel = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="become-model-container">
      <div className="left-image">
        <div className='left-Image'/>
      </div>
      <div className="center-content">
        <div className='mLogo'/>
        <div className="center-image" />
        <p>{t('BecomeModelParagraph')}</p>
      </div>
    </div>
  );
}

export default BecomeModel;

