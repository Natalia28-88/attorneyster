import React from 'react';
import styles from './CardAboutUs.module.scss';

type CardAboutUsProps = {
  key: string;
  image: string;
  textTop: string;
  textBottom: string;
  background: string;
  color: string;
};

const CardAboutUs: React.FC<CardAboutUsProps> = ({
  image,
  textTop,
  textBottom,
  background,
  color,
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor: `${background}` }}>
      <img src={image} />
      <div style={{ color: `${color}` }}>
        <p>{textTop}</p>
        <p>{textBottom}</p>
      </div>
    </div>
  );
};

export default CardAboutUs;
