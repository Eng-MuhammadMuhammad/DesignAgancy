import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <div className={styles['logo']}>
          <img src="/images/logo.png" alt="Logo" width={'60px'}/>
        </div>
        <nav className={styles['links']}>
          <div className={styles['icon']}>
            <span className={styles['icon-span']}></span>
            <span className={styles['icon-span']}></span>
            <span className={styles['icon-span']}></span>
          </div>
          <ul className={styles.navList}>
            <li><a href="#services" className={styles.navItem}>Services</a></li>
            <li><a href="#portfolio" className={styles.navItem}>Portfolio</a></li>
            <li><a href="#about" className={styles.navItem}>About</a></li>
            <li><a href="#contact" className={styles.navItem}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
