import React from 'react';
import { ProjectDataType, ImageType } from '@/types/projectDataType';
import baseURL from '@/constants/baseURL';
import styles from './Page.module.scss';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import ProjectPreviewType from '@/types/projectPreviewType';

const getProject = async (project_id: string): Promise<ProjectDataType> => {
  const response = await fetch(`${baseURL}project/${project_id}`, {
    next: {
      revalidate: 86400,
    },
  });
  if (response.status === 404) {
    return notFound();
    // throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};

type Props = {
  params: {
    project: string;
  };
};

export const generateStaticParams = async (): Promise<
  { project: string }[]
> => {
  try {
    const response = await fetch(`${baseURL}projects`);
    if (!response) {
      throw new Error();
    }
    const projects = await response.json();

    return projects.map((project: ProjectPreviewType) => {
      return {
        project: project.id.toString(),
      };
    });
  } catch {
    return [
      {
        project: '0',
      },
    ];
  }
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const project = await getProject(props.params.project);

  if (!project) {
    throw new Error();
  }
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

const Page: (props: Props) => Promise<JSX.Element> = async (props: Props) => {
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

export default Page;
