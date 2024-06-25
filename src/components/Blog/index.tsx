import { Link } from 'react-router-dom';
import React from 'react';

import BlogsTypeAndDate from '../BlogsTypeAndDate';
import styles from './Blog.module.scss';

export type BlogProps = {
  title: string;
  imageUrl: string;
  category: string;
  text: string;
  date: string;
  id: number;
};

const Blog: React.FC<BlogProps> = ({
  title,
  imageUrl,
  category,
  text,
  date,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${imageUrl})`,
        }}
      ></div>
      <BlogsTypeAndDate type={category} date={date} />
      <h4>{title}</h4>
      <p>{text}</p>
      <Link to="#" className={styles.link}>
        View More
      </Link>
    </div>
  );
};

export default Blog;
