import React from 'react';
import { Metadata } from 'next';
import Contact from '@/compnonents/Contact';
import styles from './Page.module.scss';
import contacts from '@/constants/contacts';

export const metadata: Metadata = {
  title: 'Визуализация интерьеров, контакты',
  description: 'Визуализация интерьеров в Москве и Санкт-Петербурге, контактная информация',
  keywords: [
    'визуализация',
    'визуализатор',
    'визуализатор СПБ',
    'визуализатор Москва',
    'визуализатор Санкт-Петербург',
    'визуализация интерьеров',
    'визуализация интерьеров в Москве',
    'визуализация интерьеров в Сантк-Петербурге',
  ],
};

const Contacts = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        {contacts.map((contact, index) => {
          return (
            <Contact
              key={index}
              contactTitle={contact.contactTitle}
              contactText={contact.contactText}
              link={contact.link}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Contacts;
