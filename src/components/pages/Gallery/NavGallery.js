import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import './NavGallery.scss';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const NavGallery = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <Tabs>
      <nav className="navbar">
        <TabList className="tab-list">
          <Tab className="tab-item">{t('NavGalleryTab1')}</Tab> 
          <Tab className="tab-item">{t('NavGalleryTab2')}</Tab>
          <Tab className="tab-item">{t('NavGalleryTab3')}</Tab>
          <Tab className="tab-item">{t('NavGalleryTab4')}</Tab> 
          <Tab className="tab-item">{t('NavGalleryTab5')}</Tab> 
        </TabList>
      </nav>
    </Tabs>
  );
};

export default NavGallery;
