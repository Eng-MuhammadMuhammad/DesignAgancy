// src/components/Portfolio/Portfolio.js
import React from 'react';
import styles from './Portfolio.module.css';

import portfoliophoto_1 from '../../assets/images/portfolio-1.jpg'
import portfoliophoto_2 from '../../assets/images/portfolio-2.jpg'
import portfoliophoto_3 from '../../assets/images/portfolio-3.jpg'

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.subtitle}>Check out my latest work below</p>
      </div>
      <div className={styles.portfolioContent}>
        <div className={styles.card}>
          <img src={portfoliophoto_1} alt="Portfolio Item" className={styles.cardImg}/>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>E-Commerce Platform</h3>
            <p className={styles.infoText}>A fully-featured e-commerce platform with real-time payment integration and user-friendly interface.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={portfoliophoto_2} alt="Portfolio Item" className={styles.cardImg}/>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Social Media Dashboard</h3>
            <p className={styles.infoText}>An intuitive dashboard for managing multiple social media accounts, providing analytics and scheduling tools.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={portfoliophoto_3} alt="Portfolio Item" className={styles.cardImg}/>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Personal Blog</h3>
            <p className={styles.infoText}>A sleek and responsive personal blog template with customizable themes and integrated comment system.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
