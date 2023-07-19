import { Metadata } from 'next';
import React from 'react';
import Tab from '@/compnonents/Tab';
import styles from './Page.module.scss';
import baseURL from '@/constants/baseURL';
import { DataType } from '@/types/serviceType';

export const metadata: Metadata = {
  title: 'Визуализация интерьеров, услуги',
  description: 'Визуализация интерьеров в Москве и Санкт-Петербурге, список услуг',
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

const getServises = async () => {
  const response = await fetch(`${baseURL}services`, {
    next: {
      revalidate: 10,
    },
  });
  const data = await response.json();
  return data;
};

const Servises = async () => {
  const data = await getServises();
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        {data.map((service: DataType) => {
          return (
            <Tab
              key={service.id}
              id={service.id}
              serviceTitle={service.service_title}
              servicePrice={service.service_price}
              serviceInfo={service.service_info}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Servises;
