import React from 'react';

import { Twitter, Facebook, Instagram, Pinterest } from '../utils/icons';
import {
  FooterBackground,
  Logo2,
  LogoFooter,
  LongDecorLeft,
  LongDecorRight,
} from '../utils/images';

const Footer: React.FC = () => {
  const quickLinkColumnOne = [
    'Home',
    'About us',
    'Pricing',
    'Testimonial',
    'Contact us',
  ];
  const quickLinkColumnTwo = [
    'Blog',
    'Blog Single',
    'Cases',
    'Cases Single',
    'Practice Areas',
  ];
  const utilityPages = [
    'Style guide',
    'Licenses',
    'Protected',
    'Changelog',
    'Error Page',
  ];
  const practiceArea = [
    'Business Law',
    'Construction Law',
    'Car Accident',
    'Criminal Law',
    'Family Law',
  ];
  const links = [
    {
      image: Facebook,
      alt: 'facebook',
    },
    {
      image: Twitter,
      alt: 'twitter',
    },
    {
      image: Instagram,
      alt: 'instagram',
    },
    {
      image: Pinterest,
      alt: 'pinterest',
    },
  ];
  return (
    <footer style={{ background: '#161D27' }}>
      <div className="content">
        <div className="footer__image">
          <img src={FooterBackground} alt="Image" />
        </div>

        <div className="d-flex footer-title">
          <img src={LongDecorLeft} alt="decor" className="decor" />
          <img src={LogoFooter} alt="logo" />
          <img src={Logo2} alt="logo" className="name" />
          <img src={LongDecorRight} alt="decor" className="decor" />
        </div>
        <div className="d-flex justify-between pt-50 mb-50 footer-menu">
          <div>
            <h4>Quick Link</h4>
            <div className="d-flex">
              <ul className="mr-50">
                {quickLinkColumnOne.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <ul>
                {quickLinkColumnTwo.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h4>Utility Pages</h4>
            </div>
            <ul>
              {utilityPages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div>
              <h4>Practice Area</h4>
            </div>
            <ul>
              {practiceArea.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div>
              <h4>Contact Us</h4>
            </div>
            <ul className="mb-50">
              <li>Attorney Law Office, 121 King Street,</li>
              <li>Las Vegas 90027,USA.</li>
            </ul>
            <ul className="pt-20">
              <li>Phone: (011) 9876 54321</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-between links align-center pb-50">
          <div>
            Copyright © Attorney Law | Designed by <span>VictorFlow</span> -
            Powered by
            <span>Webflow</span>.
          </div>
          <div>
            <span className="footer-span">Follow:</span>
            {links.map((obj, i) => (
              <img
                key={i}
                className="ml-20"
                width={25}
                height={25}
                src={obj.image}
                alt={obj.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
