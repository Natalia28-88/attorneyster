import React from 'react';

import { Heart, Star, SuccessfulCases } from '../utils/icons';

const CardClients: React.FC = () => {
  const cards = [
    {
      title: 'Trusted Clients',
      text: "Number of clients we've",
      descr: '7230',
      image: Heart,
    },
    {
      title: 'Successful Cases',
      text: 'Largest winning value',
      descr: '98%',
      image: Star,
    },
  ];
  return (
    <div className="content content-cardClients">
      {cards.map((card, i) => (
        <div
          key={i}
          className="cardClients p-30"
          style={{ background: '#fbfbfb' }}
        >
          <div className="image d-flex flex-column justify-center align-center mr-20">
            <img width={22} height={20} src={card.image} alt="heart" />
            <span>{card.descr}</span>
          </div>
          <div>
            <h4 className="colorDark">{card.title}</h4>
            <p>{card.text}</p>
          </div>
        </div>
      ))}

      <div
        className="cardClients d-flex p-30 justify-center flex-column"
        style={{ backgroundImage: `url(${SuccessfulCases})` }}
      >
        <span className="colorWhite mb-10">15,890+</span>
        <p className="colorWhite">
          Criminal Defense
          <br />
          Case Served
        </p>
      </div>
    </div>
  );
};

export default CardClients;
