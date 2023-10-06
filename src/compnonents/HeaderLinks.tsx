'use client';

import React from 'react';
import Link from 'next/link';
import styles from './HeaderLinks.module.scss';
import links from '@/constants/headerLinks';
import { usePathname } from 'next/navigation';

const HeaderLinks: React.FC = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default HeaderLinks;
