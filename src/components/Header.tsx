import React from 'react';
import Navigation from './Navigation';

import { Decor, HeaderBackground, Man } from '../utils/images';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundImage: `url(${HeaderBackground})` }}>
      <div className="overlay">
        <div className="content">
          <Navigation />
          <div>
            <div className="title p-50">
              <img
                width={95}
                height={44}
                src={Decor}
                alt="decor"
                className="mb-15"
              />
              <h1>
                We're Group Of Certified
                <br />
                Law Professionals
              </h1>
              <p className="pt-20 colorYellow lineHeight-39 mb-30">
                We have helped countless maritime workers and their families go{' '}
                <br />
                up against the largest offshore companies and win.
              </p>
              <button className="ButtonYellow">Get In Touch</button>
            </div>
            <div className="men">
              <img width={672} height={708} src={Man} alt="men" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
