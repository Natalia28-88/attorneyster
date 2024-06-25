import React from 'react';

import { BrianGomez, JohnTurner, MarthaBlackner } from '../utils/images';

const Employees: React.FC = () => {
  const personal = [
    {
      name: 'John Turner',
      text: 'Civil Attorney',
      image: JohnTurner,
    },
    {
      name: 'Martha Black',
      text: 'Associate Attorney',
      image: MarthaBlackner,
    },
    {
      name: 'Brian Gomez',
      text: 'Titular Attorney',
      image: BrianGomez,
    },
  ];
  return personal.map((obj) => (
    <figure key={obj.name}>
      <img width={433} src={obj.image} alt={obj.name} />
      <figcaption>
        <h3 className="colorYellow">{obj.name}</h3>
        <p>{obj.text}</p>
      </figcaption>
    </figure>
  ));
};

export default Employees;
