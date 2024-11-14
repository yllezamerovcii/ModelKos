import React from 'react';
import { useTranslation } from 'react-i18next';
import '../pages/style/Partnerships.scss';

const Partnerships = () => {
  const { t } = useTranslation();

  return (
    <div className="partnerships-container">
      <header className="partnerships-header">
        {t('PartnershipsHeader')} 
      </header>
      <div className="partnerships-content">
        <div className="partnerships-left">
          <div className='partnerships-logo'/>
          <h2 className="partnerships-subheader">{t('PartnershipsSubheader')}</h2> 
          <p className="partnerships-paragraph">
            {t('PartnershipsParagraph')} 
          </p>
          <button className="partnerships-button">{t('PartnershipsButton')}</button> 
        </div>
        <div className="partnerships-right">
          <div className="partnerships-image" />
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
