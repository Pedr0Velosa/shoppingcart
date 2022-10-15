import React from 'react';
import {
  List, ListItem, ListItemButton, ListItemIcon
  , ListItemText, Divider
} from '@mui/material';
import { Settings } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import useFilterContext from '@hooks/FilterContext/useFilterContext';
import { ACTIONS } from '@hooks/FilterContext/filterReducer/filterReducer';

type DrawerCategoryListType = {
  list: string[] | undefined,
  openMenu: boolean,
  setOpenMenu: (openMenu: boolean) => void
}

const DrawerCategoryList = ({ list, openMenu, setOpenMenu }: DrawerCategoryListType): JSX.Element => {

  const { dispatch } = useFilterContext()

  const handleClick = (item: string) => {
    dispatch({ type: ACTIONS.CATEGORY, payload: item })
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Olá, faça seu login" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {list?.map((item, index) =>
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => handleClick(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}

export default DrawerCategoryList;