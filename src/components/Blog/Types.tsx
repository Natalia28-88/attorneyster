import React from 'react';

import styles from './Blog.module.scss';

type TypesProps = {
  value: number;
  onChangeType: (i: number) => void;
};

const Types: React.FC<TypesProps> = ({ value, onChangeType }) => {
  const types = ['All', 'Corporate Law', 'Legal Advice', 'Social Justice'];

  return (
    <div className={styles.types}>
      <ul>
        {types.map((typeName, i) => (
          <li
            key={i}
            onClick={() => onChangeType(i)}
            className={value === i ? styles.active : ''}
          >
            {typeName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Types;
