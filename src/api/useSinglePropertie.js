import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

async function fetchSinglePropertie(id) {
  const url = `${import.meta.env.VITE_SINGLE_KEY}`;
  const response = await fetch(`${url}${id}`);
  return response.json();
}

export const useSinglePropertie = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: singlePropertie,
  } = useQuery(['properties', id], () => fetchSinglePropertie(id));

  return { isLoading, error, singlePropertie };
};
