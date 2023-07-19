import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link className={styles.footer__link} href="/">&#x00A9;artyomalov 2023</Link>
    </div>
  );
};

export default Footer;
