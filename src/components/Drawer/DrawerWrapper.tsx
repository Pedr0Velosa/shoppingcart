import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';

type DrawerWrapperType = {
  open: boolean,
  setOpen: (open: boolean) => void,
  children: React.ReactNode
}

const DrawerWrapper = ({ open, setOpen, children }: DrawerWrapperType): JSX.Element => {

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {children}
      </Drawer>
    </div>
  );
}

export default DrawerWrapper;