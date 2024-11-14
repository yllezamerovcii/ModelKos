import React from 'react';
import './SelectLanguage.scss';
import SingleLanguage from './SingleLanguage';
import { dataLocalStorage } from './dataLocalStorage';
import { useTranslation } from 'react-i18next';

import england from '../../../../assets/flags/uk.svg';
import albania from '../../../../assets/flags/albania.svg';
import german from '../../../../assets/flags/german.svg';
import france from '../../../../assets/flags/france.svg';
import italy from '../../../../assets/flags/italy.svg';
import spain from '../../../../assets/flags/spain.svg';
import turkey from '../../../../assets/flags/turkey.svg';
import portugal from '../../../../assets/flags/portugal.svg';
import russia from '../../../../assets/flags/russia.svg';
import china from '../../../../assets/flags/china.svg';
import japan from '../../../../assets/flags/japan.svg';


import { useDispatch , useSelector} from 'react-redux';
import { chooseLanguage } from '../../../../store/actions/languageAction';
//import {chooseLanguage } from '../../../store/actions/languageAction';
import {MdKeyboardArrowDown} from 'react-icons/md'

function SelectLanguage(){

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const { i18n } = useTranslation();

    const languages = [
        { value: 'en-GB', lang: 'English', flag: england },
        { value: 'sq-AL', lang: 'Albanian', flag: albania },
        { value: 'de-DE', lang: 'German', flag: german },
        { value: 'fr-FR', lang: 'French', flag: france },
        { value: 'it-IT', lang: 'Italian', flag: italy },
        { value: 'es-ES', lang: 'Spanish', flag: spain },
        { value: 'tr-TR', lang: 'Turkish', flag: turkey },
        { value: 'pr-PR', lang: 'Portuguese', flag: portugal},
        { value: 'rs-RS', lang: 'Russian', flag: russia},
        { value: 'ch-CH', lang: 'Chinese', flag: china},
        { value: 'jp-JP', lang: 'Japanese ', flag: japan}
    ];

    const handleLanguageChange = (language, locale) => {
      dispatch(chooseLanguage(locale));
      dataLocalStorage.setLanguage(language);
      dataLocalStorage.setLocale(locale);
      
      // Change the language in i18next
      i18n.changeLanguage(locale); // Ensure this line is added
    };
      let flag = null;
      switch (dataLocalStorage.getLocale()) {
        case 'en-GB':
          flag = england;
          break;
        case 'sq-AL':
          flag = albania;
          break;
        case 'de-DE':
          flag = german;
          break;
        case 'fr-FR':
          flag = france;
          break;
        case 'it-IT':
          flag = italy;
          break;
        case 'es-ES':
          flag = spain;
          break;
        case 'tr-TR':
          flag = turkey;
          break;
        case 'pr-PR':
          flag = portugal;
          break;
        case 'rs-RS':
          flag = russia;
          break;
        case 'jp-JP':
          flag = japan;
          break;
        case 'ch-CH':
          flag = china;
          break;

        default:
          flag = england;
      }
      return (
        <div className='select-language'>
          <img src={flag} alt='selected flag' />
          {dataLocalStorage.getLanguage() || 'English'}
          <MdKeyboardArrowDown className='arrow' styles='up' />
    
          <div className='dropdown'>
            {languages
              .sort(function (a, b) {
                let lang1 = a.lang.toUpperCase();
                let lang2 = b.lang.toUpperCase();
                if (lang1 < lang2) {
                  return -1;
                }
                if (lang1 > lang2) {
                  return 1;
                }
                // names must be equal
                return 0;
              })
              .map((thisLang, i) => {
                return (
                  <SingleLanguage
                    value={thisLang.value}
                    key={i}
                    handleLanguageChange={() =>
                      handleLanguageChange(thisLang.lang, thisLang.value)
                    }
                    styles={thisLang.value === language && 'selected'}
                    language={thisLang.lang}
                    flag={thisLang.flag}
                  ></SingleLanguage>
                );
              })}
          </div>
        </div>
      );
}
export default SelectLanguage;