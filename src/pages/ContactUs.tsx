import React from 'react';
import { Link, Element } from 'react-scroll';

import Form from '../components/EmailForm/Form';
import Navigation from '../components/Navigation';
import Title from '../components/Title';
import { Phone } from '../utils/icons';

// import EmailRestAPI from '../components/EmailForm/EmailRestAPI';
// import EmailForm from '../components/EmailForm';

const ContactUs: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#161d27' }}>
      <div className="content">
        <Navigation />
        <div className="contactBlock">
          <div className="contactBlock__description">
            <Title title="Our professional Expert law team is always ready to serve you" />
            <p>
              We’re always available for new cases big or small. Send us an
              email and we’ll get in touch shortly, or phone between 8:00 am and
              7:00 pm Monday to Saturday.
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              // offset={500}
              duration={500}
              className="ButtonYellow link"
            >
              Contact Us
            </Link>
          </div>
          <div className="contactBlock__image">
            <div className="content">
              <h2>Get a Free Consultation</h2>
              <p>
                You can get free consultation and case evaluation from us via
                the following contact number
              </p>
              <div className="callUs">
                <div>
                  <img src={Phone} className="mr-10" alt="Call us on" />
                </div>
                <div className="mr-50">
                  <p>Call Us On:</p>
                  <p>911-987654321</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Element name="contact">
        <Form />
      </Element>
    </div>
  );
};

export default ContactUs;
