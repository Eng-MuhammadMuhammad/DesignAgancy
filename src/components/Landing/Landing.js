// src/components/Landing/Landing.js
import React from 'react';
import styles from './Landing.module.css';

function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles['intro-text']}>
        <h1 className={styles['intro-text-h1']}>Welcome to Our Site</h1>
        <p className={styles['intro-text-p']}>Your journey begins here. Explore our features and services.</p>
      </div>
    </section>
  );
}

export default Landing;
