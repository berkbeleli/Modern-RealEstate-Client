import { useQuery } from 'react-query';

async function fetchPropertiesImages() {
  const response = await fetch(`${import.meta.env.VITE_IMAGES_KEY}`);
  return response.json();
}

export const usePropertiesImages = () => {
  const { isLoading, data: propertiesImages } = useQuery(
    'properties-images',
    fetchPropertiesImages
  );
  return { isLoading, propertiesImages };
};
