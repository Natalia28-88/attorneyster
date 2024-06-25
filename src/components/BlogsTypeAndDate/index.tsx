import React from 'react';
import styles from './BlogsTypeAndDate.module.scss';

type BlogsTypeAndDateProps = {
  type: string;
  date: string;
};

const BlogsTypeAndDate: React.FC<BlogsTypeAndDateProps> = ({ type, date }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.type}>{type}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

export default BlogsTypeAndDate;
