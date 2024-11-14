import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import { useTranslation } from 'react-i18next'; 
import '../pages/style/TheBlogNav.scss'

const TheBlogNav = () => {
    const { t } = useTranslation(); 

    return (
      <Tabs>
        <nav className="BlogNavbar">
          <TabList className="tab-list">
            <Tab className="tab-item">{t('BlogGalleryTab1')}</Tab> 
            <Tab className="tab-item">{t('BlogGalleryTab2')}</Tab>
            <Tab className="tab-item">{t('BlogGalleryTab3')}</Tab>
            <Tab className="tab-item">{t('BlogGalleryTab4')}</Tab> 
            <Tab className="tab-item">{t('BlogGalleryTab5')}</Tab> 
            <Tab className="tab-item">{t('BlogGalleryTab6')}</Tab> 
          </TabList>
        </nav>
      </Tabs>
    );
}

export default TheBlogNav
