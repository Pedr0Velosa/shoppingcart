import React from 'react'
import styles from '@styles/MenuButton.module.scss'
import DrawerWrapper from '../Drawer/DrawerWrapper'
import { OutlineBox, AlignBox, Box } from '@utils/Imports'
import DrawerCategoryList from '../Drawer/DrawerCategoryList';
import useFetchApi from '@hooks/useFetchApi'

type MenuButtonProps = {
  openMenu: boolean,
  setOpenMenu: (val: boolean) => void
}


const MenuButton = ({ openMenu, setOpenMenu }: MenuButtonProps): JSX.Element => {

  const { data } = useFetchApi(process.env.NEXT_PUBLIC_CATEGORYS_URL)

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