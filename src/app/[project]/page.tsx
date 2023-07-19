import React from 'react';
import { ProjectDataType, ImageType } from '@/types/projectDataType';
import baseURL from '@/constants/baseURL';
import styles from './Page.module.scss';
import Link from 'next/link';
import { Metadata } from 'next';

const getProject = async (project_id: number): Promise<ProjectDataType> => {
  const data = await fetch(`${baseURL}project/${project_id}`);
  const project = await data.json();
  return project;
};

type Props = {
  params: {
    project: number;
  };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const project = await getProject(props.params.project);

  return {
    title: `${project.title}`,
    description: `${project.description}`,
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
};

const Project = async (props: Props) => {
  const project_data: ProjectDataType = await getProject(props.params.project);
  const noAltImages = project_data.images.map((image) => image.imageUrl);
  const stringifiedData = noAltImages.toString();
  const replacedSlashData = stringifiedData.replaceAll('/', '%_%');
  return (
    <main className={styles.projectData__main}>
      <h2 className={styles.projectData__title}>{project_data.title}</h2>
      <p className={styles.projectData__description}>
        {project_data.description}
      </p>
      <p className={styles.projectData__designer}>
        <b>Дизайнер:</b> {project_data.designer_name}
      </p>
      <div>
        {project_data.images.map((image: ImageType, index: number) => {
          return (
            <>
              <Link
                href={{
                  pathname: '/project/fullsize/',
                  query: {
                    links: replacedSlashData,
                    clickedImageId: index,
                    projectId: props.params.project,
                  },
                }}
                key={index}
              >
                <img
                  src={image.imageUrl}
                  className={styles.projectData__image}
                  alt={image.altDescription}
                />
              </Link>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Project;
