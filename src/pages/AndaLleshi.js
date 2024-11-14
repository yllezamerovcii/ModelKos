import React, { useState } from 'react';
import '../../src/components/pages/style/AndaLleshi.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import AllPartners from '../components/pages/AllPartners';
import Subscribe from '../components/pages/Subscribe';
import img1 from '../assets/AndaLleshi/032.png';
import img2 from '../assets/AndaLleshi/180.png';
import img3 from '../assets/AndaLleshi/181.png';
import img4 from '../assets/AndaLleshi/219.png';
import img5 from '../assets/AndaLleshi/222.png';
import img6 from '../assets/AndaLleshi/225.png';
import img7 from '../assets/AndaLleshi/227.png';
import img8 from '../assets/AndaLleshi/234.png';
import img9 from '../assets/AndaLleshi/236.png';
import img10 from '../assets/AndaLleshi/237.png';
import img11 from '../assets/AndaLleshi/242.png';
import img12 from '../assets/AndaLleshi/252.png';
import leftLogo from '../assets/AndaLleshi/left.png';
import rightLogo from '../assets/AndaLleshi/right.png';
import { useTranslation } from 'react-i18next';

const galleryItems = [
  { id: 1, name: 'Item 1', image: img1 },
  { id: 2, name: 'Item 2', image: img5 },
  { id: 3, name: 'Item 3', image: img9 },
  { id: 4, name: 'Item 4', image: img3 },
  { id: 5, name: 'Item 5', image: img2 },
  { id: 6, name: 'Item 6', image: img7 },
  { id: 7, name: 'Item 7', image: img11 },
  { id: 8, name: 'Item 8', image: img6 },
  { id: 9, name: 'Item 9', image: img4 },
  { id: 10, name: 'Item 10', image: img8 },
  { id: 11, name: 'Item 11', image: img12 },
  { id: 12, name: 'Item 12', image: img10 },
];

const AndaLleshi = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const renderArrow = ({ type, onClick }) => {
    const pointer = type === 'PREV' ? leftLogo : rightLogo;
    return (
      <button onClick={onClick} className={`arrow-button ${type === 'PREV' ? 'left-arrow' : 'right-arrow'}`}>
        <img src={pointer} alt={`${type} arrow`} />
      </button>
    );
  };

  return (
    <>
      <div className='theContainer'>
        <h1 className='headerRow'>ANDA LLESHI</h1>
        <div className='theRow'>
          <p>{t('ModelDetails.Height')}</p>
          <p>{t('ModelDetails.Bust')}</p>
          <p>{t('ModelDetails.Waist')}</p>
          <p>{t('ModelDetails.Hips')}</p>
          <p>{t('ModelDetails.Dress')}</p>
          <p>{t('ModelDetails.Shoe')}</p>
          <p>{t('ModelDetails.Hair')}</p>
          <p>{t('ModelDetails.Eyes')}</p>
        </div>

        <div className="social-iconss">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-iconn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-iconn" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="social-iconn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-iconn" />
          </a>
        </div>

        {/* Gallery */}
        <div className="galleryy">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="gallery-itemm">
              <div className="overlay"></div>
              <div
                className="gallery-item-imagee"
                style={{ content: `url(${item.image})` }}
              ></div>
              <div className="zoom-icon" onClick={() => openModal(index)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10V4h6M4 4l6 6M20 14v6h-6m6 0l-6-6" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Modal with Carousel */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>X</button>
              <Carousel
                initialActiveIndex={currentImageIndex}
                renderArrow={renderArrow}
                showArrows={true}
                pagination={false}
              >
                {galleryItems.map((item) => (
                  <div key={item.id} className="carousel-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}
      </div>

      <AllPartners />
      <Subscribe />
    </>
  );
};

export default AndaLleshi;
