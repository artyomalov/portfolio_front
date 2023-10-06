import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import HeaderLinks from './HeaderLinks';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__headerContainer}>
        <HeaderLinks />
        <Link className={styles.header__logo} href="/">
          LOGO
        </Link>
      </nav>
    </header>
  );
};

export default Header;
