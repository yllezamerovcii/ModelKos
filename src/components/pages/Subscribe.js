import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../pages/style/Subscribe.scss';
import logo from '../../assets/Subscribe/8-Email.png';

const Subscribe = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <>
      <h2 className="subscribe-header">{t('SubscribeHeader')}</h2> {/* Use translation */}
      <div className="subscribe-container">
        <p className="subscribe-paragraph">{t('SubscribeParagraph')}</p> {/* Use translation */}
        
        <div className="subscribe-row">
          <div className="subscribe-input-container">
          <div className="email-logo" style={{ content: `url(${logo})` }} alt="emailLogo"></div>
            <input type="text" className="subscribe-input" placeholder={t('TypeMailHere')} />
          </div>
          <button className="subscribe-button">{t('SubscribeButton')}</button> {/* Use translation */}
        </div>
      </div>
    </>
  );
};

export default Subscribe;
