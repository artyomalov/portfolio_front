'use client';

import React from 'react';
import styles from './Slider.module.scss';
import Arrow from './Arrow';
import { useRouter } from 'next/router';
type Props = {
  images: string[];
  selectedImage: string;
};

const Slider: React.FC<Props> = (props) => {
  const [index, setIndex] = React.useState(Number(props.selectedImage));
  const imageRef = React.useRef<null | HTMLImageElement>(null);
  React.useEffect(() => {
    if (imageRef.current !== null) {
      imageRef.current.scrollIntoView();
    }
  }, []);

  const moveToPreviousImageHandler = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };
  const moveToNextImageHandler = () => {
    setIndex((prev) => {
      if (prev + 1 === props.images.length) {
        return prev;
      }
      return prev + 1;
    });
  };
  return (
      <div className={styles.slider__container}>
        <Arrow clickHandler={moveToPreviousImageHandler} rotationAngle={-45} />
        <img
          ref={imageRef}
          className={styles.slider__image}
          src={props.images[index]}
          alt={props.images[index]}
        />
        <Arrow clickHandler={moveToNextImageHandler} rotationAngle={135} />
      </div>
  );
};

export default Slider;
