import React from 'react';
import '../pages/style/BlogBanner.scss'; 
import search from '../../assets/OurBlog/search.png';
import { useTranslation } from 'react-i18next';

const BlogBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="blog-banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className='BlogBannerH'>{t('blogBannerHeader')}</h1>
        <div className="search-bar">
          <img src={search} className="search-icon" alt="Search" />
          <input
            type="text"
            className="search-input"
            placeholder={t('blogBannerInput')}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;


