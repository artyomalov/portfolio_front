import React from 'react';
import LoadingComponent from '@/compnonents/LoadingComponent';
import styles from './loading.module.scss';
const Loading = () => {
  return (
    <main className={styles.loading__main}>
      <LoadingComponent />
    </main>
  );
};

export default Loading;
