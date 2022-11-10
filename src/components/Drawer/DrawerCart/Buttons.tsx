import React from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import styles from '@styles/CartItem.module.css'

const Buttons = () => {
  return (
    <div className={styles['buttons-container']}>
      <div className={styles['buttons-controler']}>
        <button
          className={styles.button}
        >
          <AiFillMinusCircle
            className={styles.subtract}
            size={'1em'}
          />
        </button>
        <span>1</span>
        <button
          className={styles.button}
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
        >
          <IoMdTrash size={'1em'} />
        </button>
      </div>
    </div>
  )
}

export default Buttons