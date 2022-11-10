import React from 'react';
import Image from '@components/Image';
import styles from '@styles/CartItem.module.css'
import useCartContext from '@lib/contexts/CartContext/useCartContext';
import Buttons from './Buttons';


const DrawerCartList = (): JSX.Element => {

  const { state, getTotalAmountCartItems } = useCartContext()

  return (
    <>
      <ul>
        {getTotalAmountCartItems() > 0 ?
          state.products?.map((item, index) =>
            <li key={index} className={styles['cart-item']}>
              <div>
                <Image
                  src={item.thumbnail}
                  alt={'product thumbnail'}
                  width={75}
                  height={75}
                  isIcon={true}
                />
              </div>
              <div>
                <p>{item.brand}</p>
                <p>{item.title}</p>
              </div>
              <div style={{ textAlign: 'end' }}>
                <p>
                  ${item.price}
                </p>
              </div>
              <Buttons item={item} />
            </li>
          ) :
          <>
            No items
          </>
        }
      </ul>
    </>
  );
}

export default DrawerCartList;