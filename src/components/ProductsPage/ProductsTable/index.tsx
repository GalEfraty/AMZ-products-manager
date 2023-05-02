import { Product } from '../../../types/product';
import { DoubleArrowIcon } from '../../svg';
import ProductItem from './ProductItem';

interface ProductsTableProps {
  products: Product[];
  sortBy: 'name' | 'locale' | 'price';
  sortProducts: (sortBy: 'name' | 'locale' | 'price') => void;
}

function ProductsTable({ products, sortBy, sortProducts }: ProductsTableProps) {
  return (
    <div className='table-container'>
      <table>
        <tbody>
          <tr>
            <th>
              <div className='th-inner'>Amazon ID</div>
            </th>
            <th>
              <div className='th-inner'>
                Name
                <a
                  role='button'
                  onClick={() => sortProducts('name')}
                  className={`sort-btn ${sortBy === 'name' ? 'active' : ''}`}>
                  <DoubleArrowIcon />
                </a>
              </div>
            </th>
            <th>
              <div className='th-inner'>
                Price
                <a
                  role='button'
                  onClick={() => sortProducts('price')}
                  className={`sort-btn ${sortBy === 'price' ? 'active' : ''}`}>
                  <DoubleArrowIcon />
                </a>
              </div>
            </th>
            <th>
              <div className='th-inner'>Seller</div>
            </th>
            <th>
              <div className='th-inner'>
                Locale
                <a
                  role='button'
                  onClick={() => sortProducts('locale')}
                  className={`sort-btn ${sortBy === 'locale' ? 'active' : ''}`}>
                  <DoubleArrowIcon />
                </a>
              </div>
            </th>
            <th>Availability</th>
            <th>Link</th>
          </tr>
          {products.map((product: Product, index: number) => (
            <ProductItem key={`product-${index}-${product.asin}`} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
