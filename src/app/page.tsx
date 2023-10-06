import ProjectPreviewType from '@/types/projectPreviewType';
import ProjectPreview from '@/compnonents/ProjectPreview';
import baseURL from '@/constants/baseURL';
import { Metadata } from 'next';
import styles from './Page.module.scss';

const getProjects = async (): Promise<ProjectPreviewType[]> => {
  const response = await fetch(`${baseURL}projects`, {
    next: {
      // revalidate: 86400,
      revalidate: 20,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
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

const Page: ({}: {}) => Promise<JSX.Element>  = async () => {
  const projects = await getProjects();
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <h1 className={styles.main__title}>Визуализация интерьеров на заказ</h1>
        <div className={styles.main__projectsContainer}>
          {projects.map((project: ProjectPreviewType) => {
            return <ProjectPreview key={project.id} projectPreview={project} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
