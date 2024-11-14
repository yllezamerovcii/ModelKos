import React from 'react';
import '../pages/style/History.scss'; 
import image1 from '../../assets/History/history1.png'; 
import image2 from '../../assets/History/history2.png';
import { useTranslation } from 'react-i18next';

const History = () => {
  const { t } = useTranslation();
  return (
    <div className="history-container">
      <div className="theLeftSectionn">
      <h1 className='historyHeader'>{t('historyHeader')}</h1>
      <p>{t('historyParagraph1')}</p>
      <p>{t('historyParagraph2')}</p>
      </div>
      <div className="theRightSectionn">
        <img src={image1} alt="History Image 1" />
        <img src={image2} alt="History Image 2" />
      </div>
    </div>
  );
};

export default History;

