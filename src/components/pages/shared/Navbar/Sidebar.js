import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Sidebar.scss'; 
import Logo from '../../../../assets/Nav/Subtraction 1.png';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import ThemeSwitcher from '../Footer/ThemeSwitcher';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(null);
  const { t } = useTranslation(); 

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab); 
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="header3">
          <Link to="/"className="logo-container3">
              <img src={Logo} alt="Logo" className="Logo3" />
              <p>MODELKOS</p>
          </Link>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        
        <Link to="/" className="menu-link">{t('Sidebar.home')}</Link>

        
        <Link 
            to="/work"
            className={`tab-btn ${activeTab === 'ourWork' ? 'active' : ''}`} 
            onClick={() => handleTabClick('ourWork')}
          >
            {t('Sidebar.ourWork.title')}
        </Link>
        {activeTab === 'ourWork' && (
          <div className="tab-content">
            <a href="/">{t('Sidebar.ourWork.productService')}</a>
            <a href="/">{t('Sidebar.ourWork.eCommerce')}</a>
            <a href="/">{t('Sidebar.ourWork.intranets')}</a>
            <a href="/">{t('Sidebar.ourWork.uiUxDesign')}</a>
            <a href="/">{t('Sidebar.ourWork.mobileAppsDesign')}</a>
            <a href="/">{t('Sidebar.ourWork.contentStrategy')}</a>
            <a href="/">{t('Sidebar.ourWork.seo')}</a>
            <a href="/">{t('Sidebar.ourWork.accessibilityServices')}</a>
          </div>
        )}

        {/* About Us Section */}
        <Link
            to="/about"
            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`} 
            onClick={() => handleTabClick('about')}
          >
            {t('Sidebar.aboutUs.title')}
        </Link>
        {activeTab === 'about' && (
          <div className="tab-content">
            <a href="/">{t('Sidebar.aboutUs.mobileApps')}</a>
            <a href="/">{t('Sidebar.aboutUs.latestWorks')}</a>
            <a href="/">{t('Sidebar.aboutUs.branding')}</a>
            <a href="/">{t('Sidebar.aboutUs.games')}</a>
            <a href="/">{t('Sidebar.aboutUs.design')}</a>
            <a href="/">{t('Sidebar.aboutUs.videos')}</a>
            <a href="/">{t('Sidebar.aboutUs.socialMedia')}</a>
            <a href="/">{t('Sidebar.aboutUs.entertainment')}</a>
          </div>
        )}

        {/* Models Link */}
        <Link to="/models" className="menu-link">{t('Sidebar.models')}</Link>

        {/* Academy Section */}
        <Link 
          to="/academy"
          className={`tab-btn ${activeTab === 'academy' ? 'active' : ''}`} 
          onClick={() => handleTabClick('academy')}
        >
          {t('Sidebar.academy.title')}
        </Link>
        {activeTab === 'academy' && (
          <div className="tab-content">
            <a href="/">{t('Sidebar.academy.aboutUs')}</a>
            <a href="/">{t('Sidebar.academy.ourTeam')}</a>
            <a href="/">{t('Sidebar.academy.clients')}</a>
            <a href="/">{t('Sidebar.academy.location')}</a>
            <a href="/">{t('Sidebar.academy.awards')}</a>
            <a href="/">{t('Sidebar.academy.culture')}</a>
            <a href="/">{t('Sidebar.academy.achievements')}</a>
            <a href="/">{t('Sidebar.academy.ourAcademy')}</a>
          </div>
        )}

        {/* Blog Link */}
        <Link to="/Blog" className="menu-link blog">{t('Sidebar.blog')}</Link>

        {/* Footer */}
        <div className="theFooter">
          <div className="sidebar-footerr">
            <Link to="/apply">{t('Sidebar.applyNow')}</Link>
            <button>{t('Sidebar.contacts')}</button>
          </div>
          <div className="side-footerr">
            <button>{t('Sidebar.support')}</button>
            <button>{t('Sidebar.sendFeedback')}</button>
            <button>{t('Sidebar.faqs')}</button>
            <button>{t('Sidebar.contactUs')}</button>
          </div>
          <div className="last-footer">
            <p>{t('Sidebar.footerText')}</p>
            <SelectLanguage />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
