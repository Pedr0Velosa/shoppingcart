import React from 'react';
import {
  List, ListItem, ListItemButton, ListItemIcon
  , ListItemText, Divider, Box
} from '@mui/material';
import { Settings } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

type DrawerCategoryListType = {
  list: string[] | undefined,
  openMenu: boolean,
  setOpenMenu: (openMenu: boolean) => void
}

const DrawerCategoryList = ({ list, openMenu, setOpenMenu }: DrawerCategoryListType): JSX.Element => {

  return (
    <Box
      onClick={() => setOpenMenu(!openMenu)}
      onKeyDown={() => setOpenMenu(!openMenu)}
    >
      <nav aria-label="login">
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
      </nav>
      <Divider />
      <nav aria-label="category list">
        <List>
          {list?.map((item, index) =>
            <ListItem key={index} disablePadding>
              <ListItemButton
              // onClick={() => alert(item)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </nav>
      <Divider />
      <nav aria-label="settings">
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
      </nav>
    </Box>
  );
}

export default DrawerCategoryList;