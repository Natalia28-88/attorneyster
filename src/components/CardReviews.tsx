import React from 'react';

import {
  Decor2,
  Quote,
  Review1,
  Review2,
  Review3,
  Review4,
} from '../utils/images';

const CardReviews: React.FC = () => {
  return (
    <div style={{ background: '#161D27' }}>
      <div className="content">
        <div className="colorDark d-flex flex-column align-center mb-50 card-reviews-title">
          <h2>Client Opinions & Reviews</h2>
          <img width={95} height={44} src={Decor2} alt="decor" />
        </div>

        <div className="d-flex justify-between content-card-reviews">
          <div className="cardReviews">
            <div
              className="review"
              style={{ borderRadius: '1px 1px 1px 40px' }}
            >
              <img
                width={32}
                height={26}
                src={Quote}
                alt="qoute"
                className=""
              />
              <p>
                Could you please thank Paul personally for me, the stars are for
                his forehead. The perfect way of handling the case based on the
                situation.
              </p>
            </div>
            <div className="d-flex pb-20">
              <img
                width={84}
                height={83}
                src={Review1}
                alt="review 1"
                className="mr-20 mt-20"
              />
              <div className="pt-20">
                <h4>Natasha</h4>
                <p>Private Employee</p>
              </div>
            </div>
          </div>

          <div className="cardReviews">
            <div className="d-flex pb-20">
              <img
                width={84}
                height={83}
                src={Review2}
                alt="review 2"
                className="mr-20"
              />
              <div>
                <h4>Hannah Butler</h4>
                <p>Business Sector</p>
              </div>
            </div>
            <div
              className="review"
              style={{ borderRadius: '40px 1px 1px 1px' }}
            >
              <img
                width={32}
                height={26}
                src={Quote}
                alt="qoute"
                className=""
              />
              <p>
                Attorney law firm really helped me with all my family law and
                custody issues at the right time. Words are not enough to thank
                the firm.
              </p>
            </div>
          </div>

          <div className="cardReviews">
            <div
              className="review"
              style={{ borderRadius: '1px 1px 1px 40px' }}
            >
              <img
                width={32}
                height={26}
                src={Quote}
                alt="qoute"
                className=""
              />
              <p>
                Thank you for the way in which your team handling the matter on
                a perfect way. They give me a big relief in this case with more
                confident.
              </p>
            </div>
            <div className="d-flex pb-20">
              <img
                width={84}
                height={83}
                src={Review3}
                alt="review 3"
                className="mr-20 mt-20"
              />
              <div className="pt-20">
                <h4>Phillip Arnold</h4>
                <p>Bus Driver</p>
              </div>
            </div>
          </div>

          <div className="cardReviews">
            <div className="d-flex pb-20">
              <img
                width={84}
                height={83}
                src={Review4}
                alt="review 4"
                className="mr-20"
              />
              <div>
                <h4>Joshua Warren</h4>
                <p>Private Engineer</p>
              </div>
            </div>
            <div
              className="review"
              style={{ borderRadius: '40px 1px 1px 1px' }}
            >
              <img
                width={32}
                height={26}
                src={Quote}
                alt="qoute"
                className=""
              />
              <p>
                I frequently check the Best Lawyers list to select an attorney
                in areas too familiar with at the end they came and lead to
                achive the justice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReviews;
