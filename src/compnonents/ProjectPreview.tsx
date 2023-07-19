import React from 'react';
import Link from 'next/link';
import ProjectPreviewType from '@/types/projectPreviewType';
import styles from './ProjectPreview.module.scss';
type Props = {
  projectPreview: ProjectPreviewType;
};

const ProjectPreview: React.FC<Props> = (props) => {
  console.log(props.projectPreview.preview.altDescription)
  return (
    <Link
      className={styles.preview__containerLink}
      href={`/${props.projectPreview.id}`}
    >
      <img
        className={styles.preview__image}
        src={`${props.projectPreview.preview.preview}`}
        alt={props.projectPreview.preview.altDescription}
      />
      <div className={styles.preview__floatTitle}>
        <h2 className={styles.preview__Title}>{props.projectPreview.title}</h2>
      </div>
    </Link>
  );
};

export default ProjectPreview;
