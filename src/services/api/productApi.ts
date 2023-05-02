import vars from '../../config/vars';
import { Product } from '../../types/product';
import axios from 'axios';

type getProductsResponse = { data: Product[] };

const productApi = {
  getAll(): Promise<getProductsResponse> {
    return axios.get(`${vars.serverUrl}/products`, {
      headers: { 'Content-Type': 'application/json' },
    });
  },
};

export default productApi;
