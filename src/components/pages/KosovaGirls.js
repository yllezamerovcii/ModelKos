import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../pages/style/KosovaGirls.scss';

const KosovaGirls = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div className="kosova-girls-container">
      <div className="kosova-girls-left">
        <div className="kosova-girls-box fashion">
          <span className="kosova-girls-text">{t('KosovaGirlsFashion')}</span>
          <div className="kosova-girls-logo" alt="Arrow"></div>
        </div>
        <div className="kosova-girls-box hairstyling">
          <span className="kosova-girls-text">{t('KosovaGirlsHairStyling')}</span>
          <div className="kosova-girls-logo" alt="Arrow"></div>
        </div>
        <div className="kosova-girls-box photography">
          <span className="kosova-girls-text">{t('KosovaGirlsPhotography')}</span>
          <div className="kosova-girls-logo" alt="Arrow"></div>
        </div>
        <div className="kosova-girls-box acting">
          <span className="kosova-girls-text">{t('KosovaGirlsActing')}</span>
          <div className="kosova-girls-logo" alt="Arrow"></div>
        </div>
      </div>
      <div className="kosova-girls-right">
        <div className="kosova-girls-content">
          <div className="kosova-girls-logoo" alt="Kosova Girls Logo"></div>
          <h2 className="kosova-girls-subheader">{t('KosovaGirlsSubheader')}</h2>
          <p className="kosova-girls-paragraph">
            {t('KosovaGirlsParagraph')}
          </p>
          <button className="kosova-girls-button">{t('KosovaGirlsButton')}</button>
        </div>
      </div>
    </div>
  );
};

export default KosovaGirls;
