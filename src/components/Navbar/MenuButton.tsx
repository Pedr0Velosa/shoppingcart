import React from 'react'
import styles from '@styles/MenuButton.module.scss'
import DrawerWrapper from '../Drawer/DrawerWrapper'
import { OutlineBox, AlignBox, Box } from '@imports/Imports'
import DrawerCategoryList from '../Drawer/DrawerCategoryList';
import { useQuery } from 'react-query';
import axios from 'axios';

type MenuButtonProps = {
  openMenu: boolean,
  setOpenMenu: (val: boolean) => void
}

const getCategorysData = async (signal: AbortSignal | undefined) => {
  return await (await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }${ process.env.NEXT_PUBLIC_CATEGORYS_URL }`, { signal })
    .then(response => response.data))
}


const MenuButton = ({ openMenu, setOpenMenu }: MenuButtonProps): JSX.Element => {

  const { data } = useQuery(
    ['categorys'],
    ({ signal }) => getCategorysData(signal)
  )
  return (
    <>
      <OutlineBox component='button' onClick={() => { setOpenMenu(!openMenu) }}>
        <AlignBox>
          <Box
            sx={{ minWidth: 'unset' }}
            className={`${ styles['menu-btn'] } ${ openMenu ? ` ${ styles.active }` : null }`}
          >
            <span className={styles.btn}></span>
          </Box>
        </AlignBox>
      </OutlineBox>
      <DrawerWrapper
        open={openMenu}
        setOpen={setOpenMenu}
        anchor='left'
      >
        <DrawerCategoryList
          list={data}
          setOpenMenu={setOpenMenu}
          openMenu={openMenu} />
      </DrawerWrapper>
    </>
  )
}

export default MenuButton