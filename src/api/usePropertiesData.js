import { useQuery } from 'react-query';

async function fetchPropertiesData() {
  const response = await fetch(`${import.meta.env.VITE_PROPERTIES_KEY}`);
  return response.json();
}

export const usePropertiesData = () => {
  const { isLoading, error, data: propertiesData } = useQuery('properties', fetchPropertiesData);
  return { isLoading, error, propertiesData };
};
