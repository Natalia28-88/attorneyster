import React from 'react';
import styles from './Stripe.module.scss';

type StripeProps = Record<string, string>;

const Stripe: React.FC<StripeProps> = ({ percent }) => {
  return (
    <div
      className={styles.stripe}
      style={{
        backgroundImage: `linear-gradient(to right, #D1B06B ${percent}, #D1B06B ${percent},#fff ${percent}, #fff 100%)`,
      }}
    ></div>
  );
};

export default Stripe;
