import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Carousel from 'react-elastic-carousel';
import '../pages/style/TheBlog.scss';
import foto1 from '../../assets/OurBlog/285466202_318849797110988_8966860047102629197_n.png';
import foto2 from '../../assets/OurBlog/285862206_321568943500244_4407818059078940790_n.png';
import foto3 from '../../assets/OurBlog/287582472_147629547795131_315255445222436185_n.png';
import foto4 from '../../assets/OurBlog/1.png';
import foto5 from '../../assets/OurBlog/2.png';
import foto6 from '../../assets/OurBlog/3.png';
import foto7 from '../../assets/OurBlog/4.png';
import foto8 from '../../assets/OurBlog/5.png';
import foto9 from '../../assets/OurBlog/6.png';
import foto10 from '../../assets/OurBlog/7.png';
import foto11 from '../../assets/OurBlog/8.png';
import foto12 from '../../assets/OurBlog/9.png';

import TheBlogNav from './TheBlogNav';

import buttonLogo1 from '../../assets/Apply/Path 331.png';

const BlogPostsData = [
  {
    id: 1, //fixed
    image: foto1,
    dateKey: 'blogPosts.0.date',
    isoDate: "2022-07-18",
    titleKey: 'blogPosts.0.title',
    contentKey: 'blogPosts.0.content',
  },
  {
    id: 2,
    image: foto4, //fixed
    dateKey: 'blogPosts.1.date',
    isoDate: "2022-06-20",
    titleKey: 'blogPosts.1.title',
    contentKey: 'blogPosts.1.content',
  },
  {
    id: 3,
    image: foto6, //fixed
    dateKey: 'blogPosts.2.date',
    isoDate: "2022-05-01",
    titleKey: 'blogPosts.2.title',
    contentKey: 'blogPosts.2.content',
  },
  {
    id: 4, //fixed
    image: foto9,
    dateKey: 'blogPosts.0.date',
    isoDate: "2022-07-18",
    titleKey: 'blogPosts.0.title',
    contentKey: 'blogPosts.0.content',
  },
  {
    id: 5,
    image: foto2, //fixed
    dateKey: 'blogPosts.1.date',
    isoDate: "2022-06-20",
    titleKey: 'blogPosts.1.title',
    contentKey: 'blogPosts.1.content',
  },
  {
    id: 6,
    image: foto5, //fixed
    dateKey: 'blogPosts.2.date',
    isoDate: "2022-05-01",
    titleKey: 'blogPosts.2.title',
    contentKey: 'blogPosts.2.content',
  },
  {
    id: 7, //fixed
    image: foto7,
    dateKey: 'blogPosts.0.date',
    isoDate: "2022-07-18",
    titleKey: 'blogPosts.0.title',
    contentKey: 'blogPosts.0.content',
  },
  {
    id: 8, //fixed
    image: foto10,
    dateKey: 'blogPosts.1.date',
    isoDate: "2022-06-20",
    titleKey: 'blogPosts.1.title',
    contentKey: 'blogPosts.1.content',
  },
  {
    id: 9, //fixed
    image: foto3,
    dateKey: 'blogPosts.2.date',
    isoDate: "2022-05-01",
    titleKey: 'blogPosts.2.title',
    contentKey: 'blogPosts.2.content',
  },
  {
    id: 10, //not fixed
    image: foto12,
    dateKey: 'blogPosts.0.date',
    isoDate: "2022-07-18",
    titleKey: 'blogPosts.0.title',
    contentKey: 'blogPosts.0.content',
  },
  {
    id: 11, //fixed
    image: foto8,
    dateKey: 'blogPosts.1.date',
    isoDate: "2022-06-20",
    titleKey: 'blogPosts.1.title',
    contentKey: 'blogPosts.1.content',
  },
  {
    id: 12, //fixed
    image: foto11,
    dateKey: 'blogPosts.2.date',
    isoDate: "2022-05-01",
    titleKey: 'blogPosts.2.title',
    contentKey: 'blogPosts.2.content',
  },
  {
    id: 13, //not fixed
    image: foto12,
    dateKey: 'blogPosts.0.date',
    isoDate: "2022-07-18",
    titleKey: 'blogPosts.0.title',
    contentKey: 'blogPosts.0.content',
  },
  {
    id: 14, //fixed
    image: foto8,
    dateKey: 'blogPosts.1.date',
    isoDate: "2022-06-20",
    titleKey: 'blogPosts.1.title',
    contentKey: 'blogPosts.1.content',
  },
  {
    id: 15, //fixed
    image: foto11,
    dateKey: 'blogPosts.2.date',
    isoDate: "2022-05-01",
    titleKey: 'blogPosts.2.title',
    contentKey: 'blogPosts.2.content',
  },
  {
    id: 16, //not fixed
    image: foto12,
    dateKey: 'blogPosts.0.date',
    isoDate: "2022-07-18",
    titleKey: 'blogPosts.0.title',
    contentKey: 'blogPosts.0.content',
  },
  {
    id: 17, //fixed
    image: foto8,
    dateKey: 'blogPosts.1.date',
    isoDate: "2022-06-20",
    titleKey: 'blogPosts.1.title',
    contentKey: 'blogPosts.1.content',
  },
  {
    id: 18, //fixed
    image: foto11,
    dateKey: 'blogPosts.2.date',
    isoDate: "2022-05-01",
    titleKey: 'blogPosts.2.title',
    contentKey: 'blogPosts.2.content',
  }
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const PaginationNumbers = ({ totalSlides, activePage, onPageChange }) => {
  const maxVisiblePages = 2; // First two pages to show

  const firstPages = Array.from({ length: maxVisiblePages }, (_, index) => index + 1);

  return (
    <div className="pagination-numbers">
      {/* Show first pages: 1, 2 */}
      {firstPages.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`page-number ${activePage === pageNumber - 1 ? 'active' : ''}`}
          onClick={() => onPageChange(pageNumber - 1)}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};


// const PaginationNumbers = ({ totalSlides, activePage, onPageChange }) => {
//   const maxVisiblePages = 3; // Set maximum visible page numbers

//   // Calculate the first visible page based on the active page
//   const startPage = Math.max(
//     Math.min(activePage - Math.floor(maxVisiblePages / 2), totalSlides - maxVisiblePages),
//     0
//   );

//   // Get the visible page range
//   const visiblePages = Array.from(
//     { length: Math.min(totalSlides, maxVisiblePages) },
//     (_, index) => startPage + index + 1
//   );

//   return (
//     <div className="pagination-numbers">
//       {visiblePages.map((pageNumber) => (
//         <span
//           key={pageNumber}
//           className={`page-number ${activePage === pageNumber - 1 ? 'active' : ''}`} // Correct comparison
//           onClick={() => onPageChange(pageNumber - 1)} // Pass the zero-based index
//         >
//           {pageNumber}
//         </span>
//       ))}
//       {totalSlides > maxVisiblePages && <span>... {totalSlides}</span>} {/* Add total slides indicator */}
//     </div>
//   );
// };


// const PaginationNumbers = ({ totalSlides, activePage, onPageChange }) => {
//   const maxVisiblePages = 3; 
//   const totalPages = Math.min(totalSlides, maxVisiblePages); // Calculate total pages to display

//   const visiblePages = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
//   );

//   return (
//     <div className="pagination-numbers">
//       {visiblePages.map((pageNumber) => (
//         <span
//           key={pageNumber}
//           className={page-number ${activePage === pageNumber - 1 ? 'active' : ''}} // Correct comparison
//           onClick={() => onPageChange(pageNumber - 1)} // Pass the zero-based index
//         >
//           {pageNumber}
//         </span>
//       ))}
//     </div>
//   );
// };

const TheBlog = () => {
  const { t } = useTranslation();
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const carouselRef = useRef(null);
  const [groupedPosts, setGroupedPosts] = useState([]);

  useEffect(() => {
    const newGroupedPosts = [];
    const numberOfGroups = itemsPerPage / 3;

    for (let i = 0; i < filteredPosts.length; i += numberOfGroups) {
      newGroupedPosts.push(filteredPosts.slice(i, i + numberOfGroups));
    }
    setGroupedPosts(newGroupedPosts);
  }, [itemsPerPage, selectedDate]); // Recalculate when date changes

  const totalSlides = groupedPosts.length;

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActivePage((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActivePage((prev) => Math.min(prev + 1, totalSlides - 1));
    }
  };

  const handlePageChange = (index) => {
    setActivePage(index);
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
    }
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setDropdownVisible(false);
    setActivePage(0);
  };

  const filteredPosts = selectedDate
  ? BlogPostsData.filter(post => post.isoDate === selectedDate)
  : BlogPostsData;

  // Handle date change from the date input
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // The input provides the date in "YYYY-MM-DD" format
    setActivePage(0); // Reset to the first page after changing the date
  };

  return (
    <div className="the-blog">
      {/* the row above the carousel */}
      <div className="results-filter-row">
      <div className="left-section">
      <span>{t('ResultsFound', { count: filteredPosts.length })}</span>
      </div>
        <div className="right-section">
          <label htmlFor="date">{t('DateLabel')}</label>
          <div className="date-dropdown-container">
            <input
              type="date"
              id="date"
              className="date-input per-page-background"
              onChange={handleDateChange}
            />
            {/* <div
                className="dropdown-arroww"
                style={{ content: `url(${buttonLogo1})` }}
              /> */}
          </div>

          <label htmlFor="perPage">{t('PerPageLabel')}</label>
          <div className="per-page-dropdown">
            <input
              onClick={() => setDropdownVisible(!dropdownVisible)}
              type="text"
              id="perPage"
              className="per-page-input per-page-background"
              readOnly
              value={itemsPerPage}
            />
            <div
              className="dropdown-arrow"
              onClick={() => setDropdownVisible(!dropdownVisible)}
              style={{ content: `url(${buttonLogo1})` }}
            />
            {dropdownVisible && (
              <ul className="dropdown-list">
                 {[3, 6, 9, 12].map((value) => (
                  <li key={value} onClick={() => handleItemsPerPageChange(value)}>
                    {value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <TheBlogNav />

      <div className="the-carousel-container">
        <Carousel
          ref={carouselRef}
          breakPoints={breakPoints}
          pagination={false}
          onChange={(currentItem) => setActivePage(currentItem.index)}
          itemsToShow={1} 
        >
          {groupedPosts.map((group, index) => (
            <div key={index} className="the-blog-post-row">
              {group.map((post) => (
                <div key={post.id} className="the-blog-post-card">
                  <div className="the-blog-post-image-container">
                    <div
                      className="the-blog-post-image"
                      style={{ content: `url(${post.image})` }}
                    ></div>
                    <div className="the-image-overlay"></div>
                  </div>
                  <div className="the-blog-post-content">
                    <span className="the-blog-post-date">{t(post.dateKey)}</span>
                    <h3 className="the-blog-post-title">{t(post.titleKey)}</h3>
                    <p className="the-blog-post-text">{t(post.contentKey)}</p>
                    <div className="theBlogText">
                      <button>{t('ReadMoreButton')}</button>
                      <div
                        className="the-button-logo"
                        style={{ backgroundImage: `url(${buttonLogo1})` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="arrows-pagination-container">
          <div className="custom-prev-arrow" onClick={handlePrev} />
          <PaginationNumbers
            totalSlides={totalSlides}
            activePage={activePage}
            onPageChange={handlePageChange}
          />
          <div className="custom-next-arrow" onClick={handleNext} />
      </div>

    </div>
  );
};

export default TheBlog;
