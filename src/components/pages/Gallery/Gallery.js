import React from 'react';
import './Gallery.scss';
import NavGallery from './NavGallery';
import FirstImg from '../../../assets/Gallery/First.png';
import SecondImg from '../../../assets/Gallery/Second.png';
import ThirdImg from '../../../assets/Gallery/Third.png';
import FourthImg from '../../../assets/Gallery/Fourth.png';
import FifthImg from '../../../assets/Gallery/Fifth.png';
import SixthImg from '../../../assets/Gallery/Sixth.png';
import SeventhImg from '../../../assets/Gallery/Seventh.png';
import EighthImg from '../../../assets/Gallery/Eighth.png';
import NinthImg from '../../../assets/Gallery/Ninth.png';
import TenthImg from '../../../assets/Gallery/Tenth.png';
import EleventhImg from '../../../assets/Gallery/Eleventh.png';
import Logo from '../../../assets/Gallery/Group 8.png';
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; 
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const { t } = useTranslation(); 
    const navigate = useNavigate();

    let data = [
        { id: 1, imgSrc: FirstImg, title: 'Anda Lleshi', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown', redirectTo: '/AndaLleshi' },
        { id: 2, imgSrc: FifthImg, title: 'Driada Lakna', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 3, imgSrc: NinthImg, title: 'Klea Gashi', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 4, imgSrc: SecondImg, title: 'Arta Kalludra', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 5, imgSrc: SixthImg, title: 'Anila Xhaferi', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 6, imgSrc: TenthImg, title: 'Alejna Myrtezaj', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 7, imgSrc: ThirdImg, title: 'Drenusha Qaza', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 8, imgSrc: SeventhImg, title: 'Klesta Trifoni', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 9, imgSrc: FourthImg, title: 'Blerta Salihu', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 10, imgSrc: EighthImg, title: 'Linda Sadriu', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
        { id: 11, imgSrc: EleventhImg, title: 'Melinda Ademi', info1: 'Height 5.9', info2: 'Bust 34 A', info3: 'Waist 24', info4: 'Hips 34', info5: 'Dress 2 US', info6: 'Shoe 8 US', info7: 'Hair Dark Blonde', info8: 'Eyes Brown' },
    ];

    // Position where you want to insert the Box (e.g., after the 5th item)
    const boxPosition = 8;

    // Create a new array with Box inserted at the specified position
    const galleryItems = [
        ...data.slice(0, boxPosition),
        { id: 'box', imgSrc: Logo, isBox: true }, // Add a special item for Box
        ...data.slice(boxPosition)
    ];

    const handleImageClick = (redirectTo) => {
        if (redirectTo) {
            navigate(redirectTo);
        }
    };

    return (
        <div className='galleryContainer'>
            <p className="title1">{t('GalleryHeader')}</p> {/* Translated header */}
            <NavGallery />
            <div className="gallery">
                {galleryItems.map((item, index) => (
                    item.isBox ? (
                        <div className="Box" key={index}>
                            <p className="FirstP">{t('GalleryFirsP')}</p> {/* Translated first paragraph */}
                            <p className="SecondP">
                                {t('GallerySecondP')} {/* Translated second paragraph */}
                            </p>
                            <div className="LogoImage" style={{ content: `url(${Logo})` }} /> 
                        </div>
                    ) : (
                        <div 
                            className="gallery-item" 
                            key={index} 
                            onClick={() => handleImageClick(item.redirectTo)} 
                            style={{ cursor: item.redirectTo ? 'pointer' : 'default' }} >
                            <div className="gallery-item-image" style={{ content: `url(${item.imgSrc})` }} /> 
                            <div className="overlay">
                                <h3 className="overlay-title">{item.title}</h3>
                                <p>{item.info1}</p>
                                <p>{item.info2}</p>
                                <p>{item.info3}</p>
                                <p>{item.info4}</p>
                                <p>{item.info5}</p>
                                <p>{item.info6}</p>
                                <p>{item.info7}</p>
                                <p>{item.info8}</p>
                                <div className="social-icons">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF className="social-icon" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="social-icon" />
                                    </a>
                                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                        <FaTiktok className="social-icon" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                ))}
                <button className="AllButton">{t('FindModelButton3')}</button> {/* Example of a translated button */}
            </div>
        </div>
    );
};

export default Gallery;
