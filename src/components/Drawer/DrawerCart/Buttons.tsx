import React from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import styles from '@styles/CartItem.module.css'
import useCartContext from '@lib/hooks/useCartContext'
import { ACTIONS } from '@lib/contexts/CartContext/cartReducer/cartReducer'

const Buttons = ({ item }: { item: any }) => {

  const { dispatch } = useCartContext()

  return (
    <div className={styles['buttons-container']}>
      <div className={styles['buttons-controler']}>
        <button
          className={styles.button}
          onClick={() => { dispatch({ type: ACTIONS.REMOVE_ITEM, payload: item }) }}
        >
          <AiFillMinusCircle
            className={styles.subtract}
            size={'1em'}
          />
        </button>
        <span style={{ minWidth: '35px', maxWidth: '35px' }}>{item.qtd}</span>
        <button
          className={styles.button}
          onClick={() => { dispatch({ type: ACTIONS.ADD_ITEM, payload: item }) }}
        >
          <AiFillPlusCircle
            className={styles.add}
            size={'1em'}
          />
        </button>
      </div>
      <div>
        <button
          className={styles.button}
          onClick={() => { dispatch({ type: ACTIONS.CLEAR_ITEM, payload: item }) }}
        >
          <IoMdTrash size={'1em'} />
        </button>
      </div>
    </div>
  )
}

export default Buttons