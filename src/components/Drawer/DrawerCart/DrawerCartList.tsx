import React from 'react';
import Image from '@components/Image';
import styles from '@styles/CartItem.module.css'
import useCartContext from '@lib/hooks/useCartContext';
import Buttons from './Buttons';
import Subtotal from './Subtotal'
import Link from 'next/link';

const DrawerCartList = (): JSX.Element => {

  const { state } = useCartContext()

  return (
    <>
      <ul>
        {state.products?.map((item, index) =>
          <li key={index} className={styles['cart-item']}>
            <div style={{ cursor: 'pointer' }}>
              <Link href={`/product/${ item.id }`}>
                <Image
                  src={item.thumbnail}
                  alt={'product thumbnail'}
                  width={75}
                  height={75}
                  layout={'responsive'}
                  isIcon={false}
                />
              </Link>
            </div>
            <div>
              <p>{item.brand}</p>
              <p>{item.title}</p>
            </div>
            <div className={styles.price}>
              <p>
                ${item.price}
              </p>
            </div>
            <Buttons item={item} />
          </li>
        )}
      </ul>
      <Subtotal />
    </>
  );
}

export default DrawerCartList;