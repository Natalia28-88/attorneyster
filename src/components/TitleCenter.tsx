import React from 'react';

import { Decor2 } from '../utils/images';

type TitleCenterProps = Record<string, string>;

const TitleCenter: React.FC<TitleCenterProps> = ({
  titleTop,
  titleBottom,
  color,
}) => {
  return (
    <>
      <h2 className="text-center" style={{ color: `${color}` }}>
        {titleTop}
      </h2>
      <h2 className="mb-10 text-center" style={{ color: `${color}` }}>
        {titleBottom}
      </h2>
      <div className="text-center">
        <img
          width={95}
          height={44}
          src={Decor2}
          alt="decor"
          className="mb-40"
        />
      </div>
    </>
  );
};

export default TitleCenter;
