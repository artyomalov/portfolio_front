'use client'

import React from 'react';
import ServiceItem from './ServiceItem';
import { ServiceType } from '@/types/serviceType';
import styles from './Services.module.scss';

type Props = {
  servicesList: ServiceType[];
};

const Services: React.FC<Props> = (props) => {
  const [openId, setOpenId] = React.useState<null | string>(null);
  const servicesList = props.servicesList;
  return (
    <ul className={styles.services}>
      {servicesList.map((service) => {
        return (
          <ServiceItem
            key={service.id}
            service={service}
            isOpen={service.id === openId}
            serviceClickHandler={() =>
              service.id === openId ? setOpenId(null) : setOpenId(service.id)
            }
          />
        );
      })}
    </ul>
  );
};

export default Services;
