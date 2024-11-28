// src/components/Features/Features.js
import React from 'react';
import styles from './Features.module.css';


function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Our Features</h2>
        <p className={styles.subtitle}>Discover what we offer</p>
      </div>
      <div className={styles.container}>
        <div className={styles.feat}>
          <i className="fas fa-pencil-alt"></i>
          <h3>Tell Us Your Idea</h3>
          <p>Share your vision with us, and we’ll transform it into a detailed plan. Whether it's just a spark or a fully developed concept, we’re here to bring your idea to life.</p>
        </div>
        <div className={styles.feat}>
          <i className="fas fa-gem"></i>
          <h3>We Will Do All The Work</h3>
          <p>Our dedicated team handles every step, from design to development, ensuring that your project is crafted to perfection without you lifting a finger.</p>
        </div>
        <div className={styles.feat}>
          <i className="fas fa-globe"></i>
          <h3>Your Product is Worldwide</h3>
          <p>Once complete, we help launch your product to a global audience, so you can make an impact and reach customers no matter where they are.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
