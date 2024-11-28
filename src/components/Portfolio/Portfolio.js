// src/components/Portfolio/Portfolio.js
import React from 'react';
import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.subtitle}>Check out my latest work below</p>
      </div>
      <div className={styles.portfolioContent}>
        <div className={styles.card}>
          <img src="/images/portfolio-1.jpg" alt="Portfolio Item" className={styles.cardImg}/>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>E-Commerce Platform</h3>
            <p className={styles.infoText}>A fully-featured e-commerce platform with real-time payment integration and user-friendly interface.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/portfolio-2.jpg" alt="Portfolio Item" className={styles.cardImg}/>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Social Media Dashboard</h3>
            <p className={styles.infoText}>An intuitive dashboard for managing multiple social media accounts, providing analytics and scheduling tools.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/portfolio-3.jpg" alt="Portfolio Item" className={styles.cardImg}/>
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
