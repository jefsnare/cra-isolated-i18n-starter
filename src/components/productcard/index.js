import React from 'react';
import styles from './style.module.css';

export const Productcard = ({
  product: {
    title,
    price,
    category
  }
}) => (
  <article className={styles.root}>
    <h1>{title}</h1>
    <p>&euro; {price}</p>
    <span className={styles.category}>{category}</span>
  </article>
)
