import React from 'react';
import Drawer from '@mui/material/Drawer';

type AnchorType = 'top' | 'bottom' | 'left' | 'right' | undefined
type DrawerWrapperType = {
  open: boolean,
  setOpen: (open: boolean) => void,
  children: React.ReactNode,
  anchor: AnchorType,
}

const DrawerWrapper = ({ open, setOpen, anchor = 'left', children }: DrawerWrapperType): JSX.Element => {

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {children}
    </Drawer>
  );
}

export default DrawerWrapper;