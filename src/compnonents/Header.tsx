'use client';
import React from 'react';
import Link from 'next/link';
import links from '@/constants/headerLinks';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.header__headerContainer}>
        <div className={styles.header__linksContainer}>
          {links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                className={
                  isActive ? styles.header__linkActive : styles.header__link
                }
                key={link.id}
                href={link.to}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <Link className={styles.header__logo} href="/">
          LOGO
        </Link>
      </div>
    </header>
  );
};

export default Header;
