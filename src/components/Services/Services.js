// src/components/Services/Services.js
import React from 'react';
import styles from './Services.module.css';

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Services</h2>
      <p className={styles.subtitle}>Don't Be Busy, Be Productive</p>
      <div className={styles.servicesContent}>
        <div className={styles.servicesText}>
          <div className={styles.srv}>
            <i className={`${styles.icon} fas fa-palette`}></i>
            <div className={styles.text}>
              <h3>Web Design</h3>
              <p>
                Our web design service combines creativity with functionality to build engaging, user-friendly websites that reflect your brand. We focus on responsive design, ensuring a seamless experience across devices, and integrate the latest design trends to keep your site fresh and relevant.
              </p>
            </div>
          </div>
          <div className={styles.srv}>
            <i className={`${styles.icon} fas fa-gem`}></i>
            <div className={styles.text}>
              <h3>UI & UX</h3>
              <p>
                With our UI & UX design services, we put user experience at the forefront. We create intuitive, aesthetically pleasing interfaces that improve user satisfaction and engagement. Our process involves user research, prototyping, and testing to deliver designs that meet your audience's needs.
              </p>
            </div>
          </div>
          <div className={styles.srv}>
            <i className={`${styles.icon} fas fa-pencil-ruler`}></i>
            <div className={styles.text}>
              <h3>Graphic Design</h3>
              <p>
                Our graphic design team brings your ideas to life with visually compelling graphics for digital and print media. Whether it’s branding, marketing materials, or custom illustrations, we ensure that your visuals communicate effectively and align with your brand identity.
              </p>
            </div>
          </div>
          <div className={styles.srv}>
            <i className={`${styles.icon} fas fa-code`}></i>
            <div className={styles.text}>
              <h3>Web Development</h3>
              <p>
                We offer full-stack web development services to build high-performing websites and web applications. From frontend development with modern JavaScript frameworks to backend systems that scale, our team provides robust, secure, and optimized solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/services.jpg" alt="Services" className={styles.image}/>
        </div>
      </div>
    </section>
  );
}

export default Services;
