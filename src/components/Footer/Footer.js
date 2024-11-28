import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentMonthYear = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className={styles.footer}>
      &copy; {currentMonthYear} <span className={styles.span}>Agency</span> All Rights Reserved
    </div>
  );
};

export default Footer;
