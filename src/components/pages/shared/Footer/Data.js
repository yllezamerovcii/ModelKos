import logo1 from '../../../../assets/Footer/Subtraction 4.png';
import Foto from '../../../../assets/Footer/MODELkos - Instagram - agency - modeling - - photography-.png';
import Foto1 from '../../../../assets/Footer/Subtraction 4.png';

import {FaTwitter, 
    FaFacebookF,
    FaInstagram,
    FaTiktok} from 'react-icons/fa';

export const FooterData = {
    topText1: "MODELING",
    logo1: Foto1,
    logo: Foto,
    topText2: "MODELING",
    leftColumns: [
      {
        header: "Models",
        paragraphs: ["Book Model", "Man Models", "Woman Models", "Kid Models", "Membership"],
      },
      {
        header: "About",
        paragraphs: ["Company", "Our Team", "Partners", "Career", "News & Events"],
      },
      {
        header: "Work",
        paragraphs: ["Photography", "Design", "Makeup Artist", "Fashion Show", "Advertising"],
      },
      {
        header: "Support",
        paragraphs: ["Privacy Statement", "Terms Of Service", "Help", "FAQ", "Contacts"],
      },
    ],
    rightColumns1: [
      {
        header: "MODELS",
        items: ["Women - 0207 376 7764", "Men - 0207 376 7464", "bookamodel@modelkos.com"],
      },
      {
        header: "MODELKOS MANAGEMENT",
        items: ["1st floor", "5 Jubilee Place", "Prishtina, Kosovo"],
      },
      {
        header: "JOBS",
        items: ["jobs@modelkos.com"],
      },
    ],
    lastRow: [
        { type: "logo", src: logo1, content: "MODELKOS" }, // First column: a logo and text
        { type: "logoText", content: "©2022 - MODELKOS" }, // Second column: a logo and text
        { type: "paragraphs", paragraphs: ["Privacy Statement", "Terms of Service", "Help/FAQ"] }, // Third column: 3 paragraphs
        { type: "social", icons: [<FaFacebookF />, <FaInstagram />, <FaTiktok />, <FaTwitter /> ]}, // Fourth column: social media icons
        { type: "number", content: "+383 (44) 100 200 " }, // Fifth column: a number
        { type: "languageSelector",
        },
      ],
  };
  