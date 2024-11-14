import React, { useState, useRef } from 'react';
import image1 from '../../assets/Apply/foto2.png';
import image2 from '../../assets/Apply/foto1.png';
import '../pages/style/ApplyNow.scss';
import buttonLogo1 from '../../assets/Apply/Path 331.png';
import { useTranslation } from 'react-i18next';

const ApplyNow = () => {
  const { t } = useTranslation();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setDropdownVisible(false);
  };

    // State for height input
    const [height, setHeight] = useState('');
    const [selectedUnitHeight, setSelectedUnitHeight] = useState('CM');
    const [isDropdownVisibleHeight, setDropdownVisibleHeight] = useState(false);
  
    // State for bust input
    const [bust, setBust] = useState('');
    const [selectedUnitBust, setSelectedUnitBust] = useState('CM');
    const [isDropdownVisibleBust, setDropdownVisibleBust] = useState(false);
  
    // State for clip input
    const [clip, setClip] = useState('');
    const [selectedUnitClip, setSelectedUnitClip] = useState('CM');
    const [isDropdownVisibleClip, setDropdownVisibleClip] = useState(false);

    // State for hips input
    const [hips, setHips] = useState('');
    const [selectedUnitHips, setSelectedUnitHips] = useState('CM');
    const [isDropdownVisibleHips, setDropdownVisibleHips] = useState(false);

    // State for waist input
    const [waist, setWaist] = useState('');
    const [selectedUnitWaist, setSelectedUnitWaist] = useState('CM');
    const [isDropdownVisibleWaist, setDropdownVisibleWaist] = useState(false);

    // State for shoe input
    const [shoe, setShoe] = useState('');
    const [selectedUnitShoe, setSelectedUnitShoe] = useState('CM');
    const [isDropdownVisibleShoe, setDropdownVisibleShoe] = useState(false);
  
    // Common handler for unit selection
    const handleUnitSelect = (unit, type) => {
      if (type === 'height') {
        setSelectedUnitHeight(unit);
        setDropdownVisibleHeight(false);
      } else if (type === 'bust') {
        setSelectedUnitBust(unit);
        setDropdownVisibleBust(false);
      } else if (type === 'clip') {
        setSelectedUnitClip(unit);
        setDropdownVisibleClip(false);
      }
      else if (type === 'hips') {
        setSelectedUnitHips(unit);
        setDropdownVisibleHips(false);
      }
      else if (type === 'waist') {
        setSelectedUnitWaist(unit);
        setDropdownVisibleWaist(false);
      }
      else if (type === 'shoe') {
        setSelectedUnitShoe(unit);
        setDropdownVisibleShoe(false);
      }
    };

  return (
    <div className="apply-container">
      <div className='firstApply'>
        <div className="apply-left">
          <h1>{t('ApplyHeader1')}</h1>
          <h1>{t('ApplyHeader2')}</h1>
          <p className='firstP'>{t('ApplyText1')}</p>
          <p>{t('ApplyText2')}</p>
        </div>
        <div className="apply-right">
          <img src={image1} alt="First" className="apply-image1" />
          <img src={image2} alt="Second" className="apply-image2" />
        </div>
      </div>
      <div className='secondApply'>
        <div className="column">
          <h2>{t('ContactInformation.Header')}</h2>
          <div className="label-input">
            <label>{t('ContactInformation.FullNameLabel')}</label>
            <input type="text" placeholder={t('ContactInformation.FullNamePlaceholder')} />
          </div>
          <div className="label-input">
            <label>{t('ContactInformation.AddressLabel')}</label>
            <input type="text" placeholder={t('ContactInformation.AddressPlaceholder')} />
          </div>
          <div className="label-input">
            <label>{t('ContactInformation.EmailLabel')}</label>
            <input type="text" placeholder={t('ContactInformation.EmailPlaceholder')} />
          </div>
          <div className="label-input">
            <label>{t('ContactInformation.ContactNumberLabel')}</label>
            <input type="text" placeholder={t('ContactInformation.ContactNumberPlaceholder')} />
          </div>
          <div className="label-input">
            <label>{t('ContactInformation.MessageLabel')}</label>
            <input type="text" placeholder={t('ContactInformation.MessagePlaceholder')} className='messageInput' />
          </div>
        </div>

        {/* kolona e dyte */}
        <div className="column second">
        <h2>{t('Measurements.Header')}</h2>
          
          <div className="label-input">
          <label>{t('Measurements.GenderLabel')}</label>
            <input
              type="text"
              placeholder={t('Measurements.GenderPlaceholder')}
              value={selectedGender}
              readOnly 
              onClick={() => setDropdownVisible(!isDropdownVisible)} 
            />
            <div
              className="dropdown-arroww"
              onClick={() => setDropdownVisible(!isDropdownVisible)} 
              style={{ 
                content: `url(${buttonLogo1})`,
              }}
            />
            {isDropdownVisible && (
              <ul className="dropdown-list">
                <li onClick={() => handleGenderSelect('Male')}>{t('Measurements.GenderMale')}</li>
                <li onClick={() => handleGenderSelect('Female')}>{t('Measurements.GenderFemale')}</li>
              </ul>
            )}
          </div>
          
          <div className="label-input">
          <label>{t('Measurements.DOBLabel')}</label>
            <input 
                className='dateInput'
                type="date" 
                placeholder={t('Measurements.DOBPlaceholder')}
            />
            {/* <div
              className="dropdown-arroww"
              style={{ 
                content: `url(${buttonLogo1})`
              }}
            /> */}
          </div>
          
          {/* 3rd row with 3 labels and inputs in a row */}
          <div className="label-row">
            {/* Height Input */}
            <div className="label-input small">
            <label>{t('Measurements.HeightLabel')}</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder={t('Measurements.HeightPlaceholder')}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)} // Handle input change
                />
                <div
                    className="dropdown-arrow"
                    onClick={() => setDropdownVisibleHeight(!isDropdownVisibleHeight)}
                    style={{ content: `url(${buttonLogo1})` }}
                />
                <span 
                  className="unit" 
                  onClick={() => setDropdownVisibleHeight(!isDropdownVisibleHeight)} // Toggle dropdown
                  style={{ cursor: 'pointer' }} // Indicate clickable span
                >
                  {selectedUnitHeight}
                </span>
              </div>
              {isDropdownVisibleHeight && (
                <ul className="dropdown-listt">
                  <li onClick={() => handleUnitSelect('CM', 'height')}>CM</li>
                  <li onClick={() => handleUnitSelect('IN', 'height')}>IN</li>
                </ul>
              )}
            </div>

            {/* Bust Input */}
            <div className="label-input small">
            <label>{t('Measurements.BustLabel')}</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder={t('Measurements.BustPlaceholder')}
                  value={bust}
                  onChange={(e) => setBust(e.target.value)} // Handle input change
                />
                <div
                    className="dropdown-arrow"
                    onClick={() => setDropdownVisibleBust(!isDropdownVisibleBust)} 
                    style={{ content: `url(${buttonLogo1})` }}
                />
                <span 
                  className="unit" 
                  onClick={() => setDropdownVisibleBust(!isDropdownVisibleBust)} 
                  style={{ cursor: 'pointer' }} // Indicate clickable span
                >
                  {selectedUnitBust}
                </span>
              </div>
              {isDropdownVisibleBust && (
                <ul className="dropdown-listt">
                  <li onClick={() => handleUnitSelect('CM', 'bust')}>CM</li>
                  <li onClick={() => handleUnitSelect('IN', 'bust')}>IN</li>
                </ul>
              )}
            </div>

            {/* Clip Input */}
            <div className="label-input small">
            <label>{t('Measurements.ClipLabel')}</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder={t('Measurements.ClipPlaceholder')}
                  value={clip}
                  onChange={(e) => setClip(e.target.value)} // Handle input change
                />
                <div
                    className="dropdown-arrow"
                    onClick={() => setDropdownVisibleClip(!isDropdownVisibleClip)} 
                    style={{ content: `url(${buttonLogo1})` }}
                />
                <span 
                  className="unit" 
                  onClick={() => setDropdownVisibleClip(!isDropdownVisibleClip)} 
                  style={{ cursor: 'pointer' }} // Indicate clickable span
                >
                  {selectedUnitClip}
                </span>
              </div>
              {isDropdownVisibleClip && (
                <ul className="dropdown-listt">
                  <li onClick={() => handleUnitSelect('CM', 'clip')}>CM</li>
                  <li onClick={() => handleUnitSelect('IN', 'clip')}>IN</li>
                </ul>
              )}
            </div>
          </div>

          {/* 4th row with 3 labels and inputs in a row */}
          <div className="label-row">
            {/* Hips Input */}
            <div className="label-input small">
            <label>{t('Measurements.HipsLabel')}</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder={t('Measurements.HipsPlaceholder')}
                  value={hips}
                  onChange={(e) => setHips(e.target.value)} // Handle input change
                />
                <div
                    className="dropdown-arrow"
                    onClick={() => setDropdownVisibleHips(!isDropdownVisibleHips)}
                    style={{ content: `url(${buttonLogo1})` }}
                />
                <span 
                  className="unit" 
                  onClick={() => setDropdownVisibleHips(!isDropdownVisibleHips)} // Toggle dropdown
                  style={{ cursor: 'pointer' }} // Indicate clickable span
                >
                  {selectedUnitHips}
                </span>
              </div>
              {isDropdownVisibleHips && (
                <ul className="dropdown-listt">
                  <li onClick={() => handleUnitSelect('CM', 'hips')}>CM</li>
                  <li onClick={() => handleUnitSelect('IN', 'hips')}>IN</li>
                </ul>
              )}
            </div>

            {/* WAIST Input */}
            <div className="label-input small">
            <label>{t('Measurements.WaistLabel')}</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder={t('Measurements.WaistPlaceholder')}
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)} // Handle input change
                />
                <div
                    className="dropdown-arrow"
                    onClick={() => setDropdownVisibleWaist(!isDropdownVisibleWaist)} 
                    style={{ content: `url(${buttonLogo1})` }}
                />
                <span 
                  className="unit" 
                  onClick={() => setDropdownVisibleWaist(!isDropdownVisibleWaist)} 
                  style={{ cursor: 'pointer' }} // Indicate clickable span
                >
                  {selectedUnitWaist}
                </span>
              </div>
              {isDropdownVisibleWaist && (
                <ul className="dropdown-listt">
                  <li onClick={() => handleUnitSelect('CM', 'waist')}>CM</li>
                  <li onClick={() => handleUnitSelect('IN', 'waist')}>IN</li>
                </ul>
              )}
            </div>

            {/* Shoe Input */}
            <div className="label-input small">
            <label>{t('Measurements.ShoeLabel')}</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder={t('Measurements.ShoePlaceholder')}
                  value={shoe}
                  onChange={(e) => setShoe(e.target.value)} // Handle input change
                />
                <div
                    className="dropdown-arrow"
                    onClick={() => setDropdownVisibleShoe(!isDropdownVisibleShoe)} 
                    style={{ content: `url(${buttonLogo1})` }}
                />
                <span 
                  className="unit" 
                  onClick={() => setDropdownVisibleShoe(!isDropdownVisibleShoe)} 
                  style={{ cursor: 'pointer' }} // Indicate clickable span
                >
                  {selectedUnitShoe}
                </span>
              </div>
              {isDropdownVisibleShoe && (
                <ul className="dropdown-listt">
                  <li onClick={() => handleUnitSelect('CM', 'shoe')}>CM</li>
                  <li onClick={() => handleUnitSelect('IN', 'shoe')}>IN</li>
                </ul>
              )}
            </div>
          </div>
          
          <div className="label-input last">
            <label>{t('Measurements.UploadImageLabel')}</label>
            <div className="input-wrapperr">
              <input type="text" placeholder={t('Measurements.UploadImagePlaceholder')}  />
              <button className="upload-btn">Browse</button>
            </div>
          </div>
        </div>
      </div>

      {/* Paragraph and Button Section */}
      <div className="additional-info">
        <p>{t('AdditionalInfo.TermsAndConditions')}</p>
        <input type='submit' placeholder='submit' className='submitInput'></input>
      </div>
    </div>
  )
}

export default ApplyNow;

