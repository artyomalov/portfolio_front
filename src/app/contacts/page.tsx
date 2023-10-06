import React from 'react';
import { Metadata } from 'next';
import Contact from '@/compnonents/Contact';
import ContactType from '@/types/contactType';
import baseURL from '@/constants/baseURL';
import styles from './Page.module.scss';

const getContacts = async (): Promise<ContactType[]> => {
  const response = await fetch(`${baseURL}contacts`, {
    next: {
      revalidate: 86400,
    },
  });
  if (!response.ok) {
    throw new Error('failed to fetch data');
  }
  const contacts = await response.json();
  return contacts;
};

export const metadata: Metadata = {
  title: 'Визуализация интерьеров, контакты',
  description:
    'Визуализация интерьеров в Москве и Санкт-Петербурге, контактная информация',
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

const Page: ({}: {}) => Promise<JSX.Element> = async () => {
  const contactsData = await getContacts();

  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        {contactsData.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contactTitle={contact.title}
              contactText={contact.content}
              link={contact.link}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Page;
