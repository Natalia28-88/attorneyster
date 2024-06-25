import React from 'react';
import {
  Partners1,
  Partners2,
  Partners3,
  Partners4,
  Partners5,
} from '../utils/icons';

const Partners: React.FC = () => {
  const partners = [
    { image: Partners1, alt: 'Modern Home' },
    { image: Partners2, alt: 'Stylevintage Interior' },
    { image: Partners3, alt: 'Brand' },
    { image: Partners4, alt: 'Nature Home' },
    { image: Partners5, alt: 'Classic Design Studio' },
  ];
  return (
    <div className="content partners">
      {partners.map((obj, i) => (
        <img key={i} width={108} height={106} src={obj.image} alt={obj.alt} />
      ))}
    </div>
  );
};

export default Partners;
