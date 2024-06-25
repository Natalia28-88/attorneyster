import React from 'react';

type CardProps = {
  title: string;
  image: string;
  text: string;
  key: number;
};

const Card: React.FC<CardProps> = ({ title, image, text }) => {
  return (
    <div className="card">
      <h3 className="mb-10">{title}</h3>
      <div className="mb-30">
        <p>{text}</p>
      </div>
      <div className="grayLine mb-50"></div>
      <div className="d-flex justify-between">
        <img width={53} height={49} src={image} alt="Icon" />
        <button>View More</button>
      </div>
    </div>
  );
};

export default Card;
