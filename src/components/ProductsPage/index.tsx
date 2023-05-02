import { useEffect, useState } from 'react';

import { Product } from '../../types/product';
import { useProductsQuery } from '../../services/queries/productQuery';
import ProductsTable from './ProductsTable';
import Searchbox from './Searchbox';
import { SadEmojiIcon } from '../svg';

import './productsPage.scss';

function ProductsPage() {
  const { data: allProducts, error, isLoading } = useProductsQuery();
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'locale' | 'price'>('name');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (allProducts?.data.length) {
      setProducts(allProducts?.data);
    }
  }, [allProducts]);

  function sortProducts(sortVal: 'name' | 'locale' | 'price') {
    if (products.length && sortVal) {
      setSortBy(sortVal);
      let sortedProducts: Product[] = structuredClone(products);

      switch (sortVal) {
        case 'name':
          sortedProducts = products.sort((a, b) =>
            a.proudct_name.toLocaleLowerCase().localeCompare(b.proudct_name.toLocaleLowerCase())
          );
          break;
        case 'locale':
          sortedProducts = products.sort((a, b) =>
            a.locale.toLocaleLowerCase().localeCompare(b.locale.toLocaleLowerCase())
          );
          break;
        case 'price':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
      }

      setProducts(sortedProducts);
    }
  }

  function searchProduct(term: string) {
    if (searchTerm !== term) {
      setSearchTerm(term);

      const filteredProducts = allProducts?.data.filter((product) =>
        product.proudct_name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
      console.log(filteredProducts);

      setProducts(filteredProducts || []);
    }
  }

  function handleResetSearch() {
    setProducts(allProducts?.data || []);
    setSearchTerm('');
  }

  return (
    <main className='page'>
      <div className='page-inner'>
        <h2 className='page-inner-title'>All products</h2>
        <Searchbox
          searchTerm={searchTerm}
          searchProduct={searchProduct}
          handleResetSearch={handleResetSearch}
        />
        {isLoading ? <p>loading...</p> : null}
        {error ? (
          <p>
            Ooops.. something went wrong, please try again later.. <SadEmojiIcon />
          </p>
        ) : null}

        {!isLoading && products?.length ? (
          <ProductsTable products={products} sortBy={sortBy} sortProducts={sortProducts} />
        ) : (
          'No results'
        )}
      </div>
    </main>
  );
}

export default ProductsPage;
