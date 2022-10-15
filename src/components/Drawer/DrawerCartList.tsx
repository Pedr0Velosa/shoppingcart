import React, { useEffect } from 'react';
import {
  List, ListItem, ListItemButton, ListItemIcon
  , ListItemText
} from '@mui/material';
import useCartContext from '@hooks/CartContext/useCartContext';

type DrawerCartListType = {
  products: string[] | undefined,
  openMenu: boolean,
  setOpenMenu: (openMenu: boolean) => void
}

const DrawerCartList = ({ products, openMenu, setOpenMenu }: DrawerCartListType): JSX.Element => {

  const { state, dispatch } = useCartContext()

  return (
    <>
      <List>
        {products?.map((item, index) =>
          <ListItem key={index} disablePadding>
            item
          </ListItem>
        )}
        teste
      </List>
    </>
  );
}

export default DrawerCartList;