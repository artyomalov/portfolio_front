import React from 'react';
import Slider from '@/compnonents/Slider';
import Link from 'next/link';
import styles from './Page.module.scss';
import { Metadata } from 'next';

type Props = {
  searchParams: { links: string; clickedImageId: string; projectId: string };
};


export const metadata: Metadata = {
  title: 'Визуализация интерьеров',
  description: 'Визуализация интерьеров в Москве и Санкт-Петербурге',
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

const Page: React.FC<Props> = (props) => {
  const imgLinks = props.searchParams.links.replaceAll('%_%', '/').split(',');
  const clickedImg = props.searchParams.clickedImageId;
  return (
    <main className={styles.main}>
      <Slider images={imgLinks} selectedImage={clickedImg} />
      <Link
        className={styles.main__closeCross}
        href={`/${props.searchParams.projectId}`}
      >
        <span className={styles.main__cross}></span>
      </Link>
    </main>
  );
};

export default Page;
