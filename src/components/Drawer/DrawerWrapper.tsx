import React from 'react';
import { Drawer } from '@imports/Imports'
import { TiTimes } from 'react-icons/ti'
import styles from '@styles/CartItem.module.css'

type AnchorType = 'top' | 'bottom' | 'left' | 'right' | undefined
type DrawerWrapperType = {
  open: boolean,
  setOpen: (open: boolean) => void,
  children: React.ReactNode,
  anchor: AnchorType,
}

const DrawerWrapper = ({ open, setOpen, anchor, children }: DrawerWrapperType): JSX.Element => {

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
    console.log(open)
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(false)}
    >
      <div style={{ paddingInline: '1rem' }}>
        <div
          className={styles['close-button']}
          style={anchor === 'right' ? { marginLeft: 'auto' } : { marginRight: 'auto' }}
        >
          <button
            onClick={toggleDrawer(false)}
          >
            <TiTimes size={'2.5em'} />
          </button>
        </div>
        {children}
      </div>
    </Drawer>
  );
}

export default DrawerWrapper;