// src/components/About/About.js
import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>About</h2>
        <p className={styles.subtitle}>Learn more about us</p>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.image}>
          <img src="/images/about.jpg" alt="About Us" className={styles.imageImg}/>
        </div>
        <div className={styles.text}>
          <h3 className={styles.textTitle}>About Us</h3>
          <p className={styles.textFirst}>
            We are a passionate team of developers, designers, and strategists dedicated to creating innovative solutions that drive success for our clients. Our commitment to excellence and our collaborative approach ensures that every project we undertake not only meets but exceeds expectations.
          </p>
          <hr className={styles.textHr}/>
          <p className={styles.textLast}>
            Founded in 2010, our company has grown from a small startup to an industry leader, with a diverse portfolio that spans various sectors including e-commerce, finance, and healthcare. Our mission is to deliver high-quality, user-centric products that empower businesses and enhance the lives of their users. We believe in continuous improvement, embracing new technologies and methodologies to stay ahead in a constantly evolving digital landscape. Join us on our journey to make a meaningful impact in the world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
