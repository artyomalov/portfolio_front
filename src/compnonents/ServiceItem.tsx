import { ServiceType } from '@/types/serviceType';
import React from 'react';
import styles from './ServiceItem.module.scss';

type Props = {
  service: ServiceType;
  isOpen: boolean;
  serviceClickHandler: (id: string) => void;
};

const ServiceItem: React.FC<Props> = (props) => {
  const accordionBodyRef = React.useRef<HTMLDivElement>(null);

  return (
    <li
      className={styles.service__item}
      onClick={() => props.serviceClickHandler(props.service.id)}
    >
      <h5 className={styles.service__header}>{props.service.serviceTitle}</h5>

      <div
        className={styles.service__info}
        ref={accordionBodyRef}
        style={
          props.isOpen && accordionBodyRef.current !== null
            ? { height: accordionBodyRef.current.scrollHeight }
            : { height: '0px' }
        }
      >
        {props.service.serviceInfo}
      </div>
    </li>
  );
};

export default ServiceItem;
