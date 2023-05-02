import { Product } from '../../../../types/product';
import { AvailableIcon, UnavailableIcon, LinkIcon } from '../../../svg';

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const { asin, locale, seller_name, availability, price, proudct_name, product_link } = product;

  return (
    <tr>
      <td>{asin}</td>
      <td>{proudct_name}</td>
      <td>{price}$</td>
      <td>{seller_name}</td>
      <td>{locale}</td>
      <td>
        {availability ? (
          <div className='td-inner'>
            <AvailableIcon color='#3edf83' /> Available
          </div>
        ) : (
          <div className='td-inner'>
            <UnavailableIcon color='#f16147' />
            Unavailable
          </div>
        )}
      </td>
      <td>
        <a href={product_link} target='_blank' className='product-link'>
          <LinkIcon />
        </a>
      </td>
    </tr>
  );
}

export default ProductItem;
