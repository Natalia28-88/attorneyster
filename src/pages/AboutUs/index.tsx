import React from 'react';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import CardAboutUs from '../../components/CardAboutUs';
import Stripe from '../../components/Stripe';
import TitleCenter from '../../components/TitleCenter';

import styles from './AboutUs.module.scss';
import Employees from '../../components/Employees';

import { CardAbout1, CardAbout2 } from '../../utils/icons';
import {
  AboutBackground,
  AboutUsBottom,
  AboutUsTop,
  PeterParker,
  Statuette,
} from '../../utils/images';

const AboutUs: React.FC = () => {
  return (
    <>
      <div style={{ backgroundColor: '#161d27' }}>
        <div className="content">
          <Navigation />
          <div className={styles.wrapper}>
            <div className={styles.wrapper_left}>
              <img src={AboutUsTop} alt="About us" />
              <img src={AboutUsBottom} alt="About us" />
            </div>
            <div>
              <div style={{ maxWidth: '550px' }}>
                <Title title="Welcome to Attorney Law -Lawyer & Law Firm Company" />
              </div>
              <p>
                Although we are located in Brooklyn, our maritime lawyers are
                proud to help the injured throughout the nation, including
                workers who were working in foreign waters at the time of the
                incident go up against the largest offshore companies and win.
              </p>
              <figure>
                <img src={PeterParker} width={90} height={90} />
                <figcaption>
                  <h3>Peter Parker</h3>
                </figcaption>
              </figure>
              <div className={styles.iconsBox}>
                <CardAboutUs
                  key="Case Success"
                  image={CardAbout1}
                  background="#3b434e"
                  color="#FFF"
                  textTop="95%"
                  textBottom="Case Success"
                />
                <CardAboutUs
                  image={CardAbout2}
                  background="#d1b06b"
                  color="#1F2732"
                  textTop="Years"
                  textBottom="Experience"
                  key="Experience"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.history}
        style={{ backgroundImage: `url(${AboutBackground}) ` }}
      >
        <div className={styles.overlay}>
          <div className="content">
            <div className={styles.content}>
              <div className={styles.contentLeft}>
                <Title title="We Are Top Lawyers And History" />
                <p className="colorYellow font-size-20 ">
                  2000 – Establishment of the Company!
                </p>
                <p className=" ">
                  The origins of lawyers and the first founders of law make
                  their appearance in Ancient Greece and Rome.
                </p>
                <p className="colorYellow font-size-20 ">
                  2006 – Together we Build
                </p>
                <p className="font-size-20 ">
                  Lawyers in medieval times found themselves struggling to make
                  a living as the legal profession collapsed in the western
                  world.
                </p>
                <p className="colorYellow font-size-20 ">
                  2008 – Completed 10000 cases
                </p>
                <p className="font-size-20 ">
                  When did lawyers first start practicing in the United States?
                  It’s important to understand that the history of attorneys.
                </p>
                <p className="colorYellow font-size-20 ">
                  2011 – We are Number One
                </p>
                <p className="font-size-20 ">
                  Eventually, the prejudices against lawyers started to fall
                  away and the legal profession began to gain respect and power.
                </p>
              </div>
              <div className={styles.contentMiddle}>
                <img src={Statuette} alt="statuette" />
              </div>
              <div className={styles.contentRight}>
                <Title title="We Are Specialised And Experienced" />
                <p className="font-size-20">
                  Keep yourself up-to-date on your area of law. Be aware of new
                  developments, as laws and rules often change based on the
                  situation and new cases are being decided every day.
                </p>
                <div>
                  <p className="font-size-20">
                    Divorce And Family Cases <span> &mdash; 75%</span>
                  </p>
                  <Stripe percent="75%" />
                </div>
                <div>
                  <p className="font-size-20">
                    Property And Construction<span> &mdash; 80%</span>
                  </p>
                  <Stripe percent="80%" />
                </div>
                <div>
                  <p className="font-size-20">
                    Banking And Finance<span> &mdash; 75%</span>
                  </p>
                  <Stripe percent="75%" />
                </div>
                <div>
                  <p className="font-size-20">
                    Accident & Wrongful Death<span> &mdash; 90%</span>
                  </p>
                  <Stripe percent="90%" />
                </div>
                <button className="ButtonYellow">Free Consulting</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="text-center">
          <TitleCenter
            titleTop="Our Experienced Attorney Are Ready"
            titleBottom="To answer any questions"
            color="#161d27"
          />
        </div>
        <div className={styles.employees}>
          <Employees />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
