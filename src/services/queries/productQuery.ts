import { useQuery } from 'react-query';
import productApi from '../api/productApi';

export function useProductsQuery() {
  return useQuery({
    queryKey: ['all-products'],
    queryFn: () => productApi.getAll(),
    enabled: true,
  });
}
