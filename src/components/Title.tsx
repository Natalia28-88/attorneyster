import React from 'react';

import { Decor } from '../utils/images';

type TitleProps = Record<string, string>;

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <h2 className="mb-10">{title}</h2>
      <img width={95} height={44} src={Decor} alt="decor" className="mb-50" />
    </>
  );
};

export default Title;
