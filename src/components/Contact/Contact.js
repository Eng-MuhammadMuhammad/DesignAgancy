// src/components/Contact/Contact.js
import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>We Are Born To Create</p>
      </div>
      <div className={styles.info}>
        <p className={styles.infoLabel}>Feel Free To Drop us a Line at:</p>
        <a href="mailto:OurEgancy.Design@gmail.com" className={styles.link}>OurEgancy.Design@gmail.com</a>
        <p className={styles.socialMediaText}>Find us On Social Media</p>
        <div className={styles.social}>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    </section>
  );
}

export default Contact;
