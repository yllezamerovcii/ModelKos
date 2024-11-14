import React from 'react';
import './Footer.scss';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import { useTranslation } from 'react-i18next';
import { FooterData } from './Data'; // Ensure this is the correct path to Data.js
import Foto from '../../../../assets/Footer/MODELkos - Instagram - agency - modeling - - photography-.png';
import Foto1 from '../../../../assets/Footer/Subtraction 4.png';
import ThemeSwitcher from './ThemeSwitcher';

const Footer = ({ setLanguage, language }) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      {/* First row: Text, Logo, Text */}
      <div className="footer-top">
        <p>{t('FooterData.topText1')}</p>
        <div className='footer-logo' style={{ content: `url(${Foto})` }}></div>  
        <div className='footer-logo1' style={{ content: `url(${Foto1})` }}></div>
        <p>{t('FooterData.topText2')}</p>
      </div>

      {/* Second row */}
      <div className="footer-bottom">
        {/* Left side: 4 columns with a header and paragraphs */}
        <div className="footer-left">
          {t('FooterData.leftColumns', { returnObjects: true }).map((column, index) => (
            <div key={index} className="footer-column">
              <h3>{column.header}</h3>
              {column.paragraphs.map((text, i) => (
                <p key={i}>{t(`FooterData.leftColumns.${index}.paragraphs.${i}`)}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="footer-right">
          <div className="footer-right-row">
            {t('FooterData.rightColumns1', { returnObjects: true }).map((column, index) => (
              <div key={index} className="footer-column">
                <h3 className='theHeader'>{t(`FooterData.rightColumns1.${index}.header`)}</h3>
                {column.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Last row: 6 columns */}
      <div className="footer-last-row">
        <div className="footer-last-column first-column">
          <div className="logo-container">
            <div className="logo-text">
              <div className="footer-logo-bg" style={{ content: `url(${FooterData.lastRow[0].src})` }} alt="Footer logo"></div>
              <p className='modelkosText'>{t('FooterData.lastRow.logo')}</p>
            </div>
            <p className='theSecondText'>{t('FooterData.lastRow.logoText')}</p>
          </div>
        </div>

        <div className="footer-last-column second-column">
          {t('FooterData.lastRow.paragraphs', { returnObjects: true }).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="footer-last-column last-column">
          <div className="footer-last-row-inner">
            <div className="social-icon">
              {/* Render the icons directly from FooterData */}
              {FooterData.lastRow[3].icons.map((icon, index) => (
                <div key={index}>{icon}</div>
              ))}
            </div>
            <div className='numberFooter'>
              <p>{t('FooterData.lastRow.number')}</p>
            </div>
            <SelectLanguage
              setLanguage={setLanguage}
              language={language}
            />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
