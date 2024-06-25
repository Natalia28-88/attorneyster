import cardsData from '../assets/card.json';

import icon1 from '../assets/icons/card/1.svg';
import icon2 from '../assets/icons/card/2.svg';
import icon3 from '../assets/icons/card/3.svg';
import icon4 from '../assets/icons/card/4.svg';
import icon5 from '../assets/icons/card/5.svg';
import icon6 from '../assets/icons/card/6.svg';

interface ICard {
  id: number;
  icon: string;
  title: string;
  text: string;
}

const iconsMap: { [key: string]: string } = {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
};

const cardsWithIcons: ICard[] = cardsData.map((card) => ({
  ...card,
  icon: iconsMap[card.icon],
}));

export default cardsWithIcons;
