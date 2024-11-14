import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import ModelsMenu from './Megamenu/ModelsMenu';
import AboutUsMenu from './Megamenu/AboutUsMenu';

const Nav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isAboutUsMenuOpen, setIsAboutUsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // track dark mode state

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleMegaMenuHover = (isOpen) => {
    setIsMegaMenuOpen(isOpen);
  };

  const handleAboutUsMenuHover = (isOpen) => {
    setIsAboutUsMenuOpen(isOpen);
  };

  const handleApplyNowClick = () => {
    navigate('/apply');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if on homepage
  const isHomepage = location.pathname === '/';

  // Fetch dark mode setting from localStorage
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setDarkMode(savedDarkMode);
  }, []);

  // Apply dark class only on the homepage and when dark mode is on
  const navbarClass = `${isFixed ? 'Navbar fixed' : 'Navbar'} ${isHomepage ? 'homepage-navbar' : ''} ${isHomepage && darkMode ? 'dark' : ''}`;

  return (
    <>
      <nav className={navbarClass}>
        <Link to="/" className="navbar-logo">
          <div alt="Model" className="Logo" />
          <p>MODELKOS</p>
        </Link>
        <div className="navbar-tabs">
          <Link to="/">{t('navbar.home')}</Link>
          <div className="dropdown">
            <Link to="/our-work">{t('navbar.ourWork')}</Link>
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleAboutUsMenuHover(true)}
            onMouseLeave={() => handleAboutUsMenuHover(false)}
          >
            <Link to="/about">{t('navbar.about')}</Link>
            {isAboutUsMenuOpen && (
              <div className="mega-menu">
                <AboutUsMenu />
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleMegaMenuHover(true)}
            onMouseLeave={() => handleMegaMenuHover(false)}
          >
            <Link to="/models">{t('navbar.models')}</Link>
            {isMegaMenuOpen && (
              <div className="mega-menu">
                <ModelsMenu />
              </div>
            )}
          </div>
          <div className="dropdown">
            <Link to="/academy">{t('navbar.academy')}</Link>
          </div>
          <Link to="/blog">{t('navbar.blog')}</Link>
        </div>
        <div className="navbar-buttons">
          <button className="apply-now" onClick={handleApplyNowClick}>
            {t('NavbarButton1')}
          </button>
          <button className="contact">{t('NavbarButton2')}</button>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {isSidebarOpen && <div className="backdrop" onClick={closeSidebar}></div>}
    </>
  );
};

export default Nav;
