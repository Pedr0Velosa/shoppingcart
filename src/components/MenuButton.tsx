import React from 'react'
import styles from '../../styles/MenuButton.module.scss'

type MenuButtonProps = {
  openMenu: boolean,
  setOpenMenu: (val: boolean) => void
}

const MenuButton = ({ openMenu, setOpenMenu }: MenuButtonProps) => {
  return (
    <button
      className={openMenu ?
        `${ styles['menu-btn'] } ${ styles.active }`
        : styles['menu-btn']}
      onClick={() => { setOpenMenu(!openMenu) }}
    >
      <span className={styles.btn}></span>
    </button>
  )
}

export default MenuButton