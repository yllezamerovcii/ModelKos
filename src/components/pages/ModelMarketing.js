import React from 'react';
import '../pages/style/ModelMarketing.scss';
import Image1 from '../../assets/chyntia-juls-HlVjI5WmoQY-unsplash.png';
import Image2 from '../../assets/adele-shafiee-vagr_XT9Cms-unsplash.png';
import Image3 from '../../assets/text.png';
import Image4 from '../../assets/theArrow.png';
import Search from '../../assets/Bar/XMLID_223_.png';
import Book from '../../assets/Bar/1814097_clock_schedule_time_icon.png';
import Schedule from '../../assets/Bar/510869_calendar_date_event_schedule_icon.png';
import Work from '../../assets/Bar/Path 355.png';
import { useTranslation } from 'react-i18next'; 

const statistics = [
  { id: 1, label: 'ModelMarketingStatistics.stat1' },
  { id: 2, label: 'ModelMarketingStatistics.stat2' },
  { id: 3, label: 'ModelMarketingStatistics.stat3' }
];

const barItems = [
  { id: 1, icon: Search, label: 'barItems.item1.label' },
  { id: 2, icon: Book, label: 'barItems.item2.label' },
  { id: 3, icon: Schedule, label: 'barItems.item3.label' },
  { id: 4, icon: Work, label: 'barItems.item4.label' }
];

const ModelMarketing = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className='wholeContainer'>
      <div className='MMfirst'>
        <p className='header'>{t('ModelMarketingHeader')}</p>
        <p className='paragraph'>
          {t('ModelMarketingParagraph')}
        </p>
        <div className='statistics'>
          {statistics.map(stat => (
            <div key={stat.id}>
              <p>{t(stat.label + '.number')}</p> {/* Fetch the number */}
              <p>{t(stat.label + '.label')}</p> {/* Fetch the label */}
            </div>
          ))}
        </div>
      </div>
      <div className='MMsecond'>
        <div className='theArrowg' /> 
        <div className='thirdImgg' /> 
        <div className='firstImgg' />
        <div className='secondImgg' />
        <div className='bar'>
          {barItems.map(item => (
            <div key={item.id}>
              <img src={item.icon} alt={t(item.label)} />
              <p>{t(item.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelMarketing;
