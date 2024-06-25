import React from 'react';

import styles from './NotFoundBlock.module.scss';

import { IconSad } from '../../utils/icons';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <img src={IconSad} alt="sad" /> <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует на нашем сайте
      </p>
    </div>
  );
};

export default NotFoundBlock;
