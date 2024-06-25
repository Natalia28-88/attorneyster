import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Call, Email } from '../utils/icons';
import { Logo2, LogoFooter } from '../utils/images';

const Navigation: React.FC = () => {
  const menuItems = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About us', path: '/about-us' },
    { id: 3, title: 'Recent blogs', path: '/recent-blogs' },
    { id: 4, title: 'Contact us', path: '/contact-us' },
  ];

  const location = useLocation();

  return (
    <nav>
      <div className="d-flex justify-between mb-40 navigation">
        <div className="d-flex logo">
          <img className="mr-10" width={70} height={79} src={LogoFooter} />
          <div className="d-flex pt-20">
            <img className="name" width={330} height={61} src={Logo2} />
          </div>
        </div>
        <button className="buttonGray">Book A Consultation</button>
      </div>
      <div className="grayLine"></div>

      <div className="d-flex justify-between menu">
        <ul className="menuItems">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={
                item.path === location.pathname
                  ? 'menu-link active'
                  : 'menu-link'
              }
            >
              {item.title}
            </Link>
          ))}
        </ul>
        <ul className="contact">
          <li className="d-flex align-center hover-none">
            <img
              width={62}
              height={62}
              src={Call}
              className="mr-10"
              alt="Call us on"
            />
            <div className="mr-50 lineHeight-28">
              <p className="colorYellow">Call Us On:</p>
              <p>911-987654321</p>
            </div>
          </li>
          <li className="d-flex align-center hover-none mr-50">
            <img
              width={62}
              height={62}
              src={Email}
              className="mr-10"
              alt="Email us on"
            />
            <div>
              <p className="colorYellow">Email Us On:</p>
              <p>yourmail@mail.com</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="grayLine"></div>
    </nav>
  );
};

export default Navigation;
