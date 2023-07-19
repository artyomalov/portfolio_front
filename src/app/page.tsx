import styles from './page.module.scss';
import ProjectPreviewType from '@/types/projectPreviewType';
import ProjectPreview from '@/compnonents/ProjectPreview';
import baseURL from '@/constants/baseURL';
import { Metadata } from 'next';

const getProjects = async (): Promise<ProjectPreviewType[]> => {
  const response = await fetch(`${baseURL}projects`, {
    next: {
      revalidate: 20,
      // revalidate: 86400,
    },
  });
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

const Home = async () => {
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

export default Home;
