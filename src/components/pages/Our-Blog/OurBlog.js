import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Carousel from 'react-elastic-carousel';
import './OurBlog.scss';
import foto1 from '../../../assets/OurBlog/285466202_318849797110988_8966860047102629197_n.png';
import foto2 from '../../../assets/OurBlog/285862206_321568943500244_4407818059078940790_n.png';
import foto3 from '../../../assets/OurBlog/287582472_147629547795131_315255445222436185_n.png';
import foto4 from '../../../assets/OurBlog/10.png';
import foto5 from '../../../assets/OurBlog/11.png';
import foto6 from '../../../assets/OurBlog/12.png';
import foto7 from '../../../assets/OurBlog/13.png';
import foto8 from '../../../assets/OurBlog/14.png';
import foto9 from '../../../assets/OurBlog/15.png';
import buttonLogo1 from '../../../assets/What we offer/arrow-left-black.png';

const BlogPostsData = [
  {
    id: 1,
    image: foto1,
    dateKey: 'blogPosts.0.date',
    titleKey: 'blogPosts.0.title',
    contentKey: 'blogPosts.0.content',
  },
  {
    id: 2,
    image: foto2,
    dateKey: 'blogPosts.1.date',
    titleKey: 'blogPosts.1.title',
    contentKey: 'blogPosts.1.content',
  },
  {
    id: 3,
    image: foto3,
    dateKey: 'blogPosts.2.date',
    titleKey: 'blogPosts.2.title',
    contentKey: 'blogPosts.2.content',
  },
  {
    id: 4,
    image: foto4,
    dateKey: 'blogPosts.3.date', // Use translation keys
    titleKey: 'blogPosts.3.title',
    contentKey: 'blogPosts.3.content',
  },
  {
    id: 5,
    image: foto5,
    dateKey: 'blogPosts.4.date',
    titleKey: 'blogPosts.4.title',
    contentKey: 'blogPosts.4.content',
  },
  {
    id: 6,
    image: foto6,
    dateKey: 'blogPosts.5.date',
    titleKey: 'blogPosts.5.title',
    contentKey: 'blogPosts.5.content',
  },
  {
    id: 7,
    image: foto7,
    dateKey: 'blogPosts.6.date', // Use translation keys
    titleKey: 'blogPosts.6.title',
    contentKey: 'blogPosts.6.content',
  },
  {
    id: 8,
    image: foto8,
    dateKey: 'blogPosts.7.date',
    titleKey: 'blogPosts.7.title',
    contentKey: 'blogPosts.7.content',
  },
  {
    id: 9,
    image: foto9,
    dateKey: 'blogPosts.8.date',
    titleKey: 'blogPosts.8.title',
    contentKey: 'blogPosts.8.content',
  }
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const PaginationDots = ({ totalSlides, activePage, onPageChange }) => {
  return (
    <div className="pagination-dots5">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`dot5 ${activePage === index ? 'active' : ''}`}
          onClick={() => onPageChange(index)}
        ></span>
      ))}
    </div>
  );
};

const OurBlog = () => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [activePage, setActivePage] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActivePage(carouselRef.current.state.activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActivePage(carouselRef.current.state.activeIndex + 1);
    }
  };

  const handlePageChange = (index) => {
    setActivePage(index);
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
    }
  };

  const totalSlides = Math.ceil(BlogPostsData.length / 3);

  return (
    <div className="our-blog">
      <h1 className="our-blog-header">{t('OurBlogHeader')}</h1>
      <div className="carousel-container">
        <Carousel
          ref={carouselRef}
          breakPoints={breakPoints}
          pagination={false}
          onChange={index => setActivePage(index)}
          itemsToShow={1}
        >
          {BlogPostsData.map((post) => (
            <div key={post.id} className="blog-post-card">
              <div className="blog-post-image-container">
              <div
                  className="blog-post-image"
                  style={{ content: `url(${post.image})` }}
                ></div>
                <div className="image-overlay"></div>
              </div>
              <div className="blog-post-content">
                <span className="blog-post-date">{t(post.dateKey)}</span>
                <h3 className="blog-post-title">{t(post.titleKey)}</h3>
                <p className="blog-post-text">{t(post.contentKey)}</p>
                <div className='OurBlogText'>
                  <button>{t('ReadMoreButton')}</button> {/* Use translation key for button */}
                  <div 
                    className="button-logo" 
                    style={{ content: `url(${buttonLogo1})` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="custom-prev-arrow" onClick={handlePrev} />
        <div className="custom-next-arrow" onClick={handleNext} />
      </div>
      <PaginationDots
        totalSlides={totalSlides}
        activePage={activePage}
        onPageChange={handlePageChange}
      />
      <div className='ReadAllButtonContainer'>
        <button className="read-all-button">{t('ReadAllButton')}</button> 
      </div>
    </div>
  );
};

export default OurBlog;
