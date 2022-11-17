import React, { useEffect } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Settings, AccountCircleIcon, useFilterContext, Typography } from '@imports/Imports'
import { ACTIONS } from '@lib/contexts/FilterContext/filterReducer/filterReducer';
import { useInfiniteQuery, useQuery } from 'react-query';
import axios from 'axios'

type GetProductsDataType = {
  pageParam: number,
  signal: AbortSignal | undefined,
  item: string
}

type DrawerCategoryListType = {
  list: string[] | undefined,
  openMenu: boolean,
  setOpenMenu: (openMenu: boolean) => void
}

const getProductsFilteredByCategory = async ({ pageParam, signal, category }: any) => {
  return await (await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }/products/category/${ category }?skip=${ pageParam ?? 0 }&limit=30`, { signal })
    .then(response => response.data))
}

const DrawerCategoryList = ({ list, openMenu, setOpenMenu }: DrawerCategoryListType): JSX.Element => {

  const { state, dispatch } = useFilterContext()
  const category = state.category
  const {
    fetchNextPage,
    isFetchingNextPage,
    error,
    hasNextPage,
    data,
    refetch
  } = useInfiniteQuery<any>(
    ['products', category],
    async ({ pageParam = 0, signal }) => getProductsFilteredByCategory({ pageParam, signal, category }),
    {
      getNextPageParam: (lastPage) => {
        if ((+lastPage.skip + lastPage.limit) >= lastPage.total) return undefined
        return lastPage.skip + 30
      },
      enabled: false
    }
  )

  const handleFetch = (item: string) => {
    setOpenMenu(!openMenu)
    dispatch({ type: ACTIONS.CATEGORY, payload: item })
  }

  useEffect(() => {
    if (!state.category) return
    refetch()
  }, [state.category])
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
              onClick={() => handleFetch(item)}
              style={state.category === item ? { backgroundColor: '#bbb' } : {}}
            >
              <ListItemText
                primary={
                  <Typography
                    variant='body2'
                    component='li'
                  >
                    {item}
                  </Typography>
                }

              />
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
