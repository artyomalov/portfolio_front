import Link from 'next/link';
import React from 'react';
import styles from './ErrorComponent.module.scss';

type Props = {
  errorTitle: string;
  errorText: string;
  reset: () => void;
};

const ErrorComponent: React.FC<Props> = (props) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.error__title}>{props.errorTitle}</h2>
      <p className={styles.error__content}>{props.errorText}</p>
      <div className={styles.error__actionsContainer}>
        <Link className={styles.error__return} href="/">
          вернуться на главную{' '}
        </Link>
        <button className={styles.error__reload} onClick={() => props.reset()}>
          перезагрузить страницу
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
