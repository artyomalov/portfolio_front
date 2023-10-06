export type ImageType = {
  id: number;
  imageUrl: string;
  altDescription: string;
};

export type ProjectDataType = {
  id: string;
  title: string;
  description: string;
  designer_name: string;
  images: ImageType[];
};
