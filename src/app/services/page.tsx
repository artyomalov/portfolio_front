import { Metadata } from 'next';
import React from 'react';
import Services from '../../compnonents/Services';
import styles from './Page.module.scss';
import baseURL from '@/constants/baseURL';
import { ServiceType } from '@/types/serviceType';
export const metadata: Metadata = {
  title: 'Визуализация интерьеров, услуги',
  description:
    'Визуализация интерьеров в Москве и Санкт-Петербурге, список услуг',
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

const getServices = async (): Promise<ServiceType[]> => {
  const response = await fetch(`${baseURL}services`, {
    next: {
      revalidate: 86400,
    },
  });
  if (!response.ok) {
    throw new Error();
  }
  const services = await response.json();
  return services;
};

const Page: ({}: {}) => Promise<JSX.Element> = async () => {
  const servicesList = await getServices();
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Services servicesList={servicesList} />
      </div>
    </main>
  );
};

export default Page;

// : ({}: {}) => Promise<JSX.Element>
