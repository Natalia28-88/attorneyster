import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';
import CardClients from '../components/CardClients';
import CardReviews from '../components/CardReviews';
import Partners from '../components/Partners';
import TitleCenter from '../components/TitleCenter';

import cardsWithIcons from '../utils/icons-json';
import { Decor, Decor2 } from '../utils/images';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            background: '#161D27',
            padding: '50px',
            minHeight: '1390px',
          }}
        >
          <div className="content p-50">
            <div className="d-flex justify-between mb-50 content-title">
              <div style={{ width: '50vw' }}>
                <h2 className="mb-10">
                  Explore The perfect
                  <br />
                  Our Practice Areas
                </h2>
                <img width={95} height={44} src={Decor} alt="decor" />
              </div>
              <div style={{ width: '50vw' }}>
                <p>
                  We are a group of civil litigation/trial attorneys who focus
                  on providing a justice based on the issues relating to
                  insurance defense, insurance coverage, bad faith, insurance
                  fraud and criminal litigation.
                </p>
              </div>
            </div>
            <div className="content-cards">
              {cardsWithIcons.map((obj, i) => (
                <Card
                  key={i}
                  title={obj.title}
                  image={obj.icon}
                  text={obj.text}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="colorDark p-50 d-flex flex-column align-center">
          <TitleCenter
            titleTop="Fighting to get what"
            titleBottom="you deserve"
            color="#161D27"
          />
          <p className="colorGrayDark mb-50 text-center">
            Our board-certified family law attorneys work to achieve a fair and
            <br />
            timely resolution of the legal issues in your case.
          </p>
        </div>
        <CardClients />
        <div
          className="content partners-title"
          style={{ borderTop: '1px solid #D7D7D7' }}
        >
          <div className="d-flex justify-center">
            <div className="colorDark d-flex justify-center align-center">
              <img
                width={95}
                height={44}
                src={Decor2}
                alt="decor"
                className=""
              />
              <h2 className="colorDark text-center">Meet the Partners</h2>
              <img
                width={95}
                height={44}
                src={Decor2}
                alt="decor"
                className=""
              />
            </div>
          </div>
        </div>
        <Partners />
        <CardReviews />
      </main>
    </>
  );
};

export default Home;
