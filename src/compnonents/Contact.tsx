import React from 'react';
import styles from './Contact.module.scss';

type Props = {
  contactTitle: string;
  contactText: string;
  link: string;
};

const Contact: React.FC<Props> = (props) => {
  return (
    <div className={styles.contact__container}>
      <h5 className={styles.contact__title}>{props.contactTitle}</h5>
      <a className={styles.contact__link} href={props.link} target="_blank">
        <p className={styles.contact__text}>{props.contactText}</p>
      </a>
    </div>
  );
};

export default Contact;
