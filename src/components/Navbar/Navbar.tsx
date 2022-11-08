import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { StyledHeader } from '../styled/StyledHeader';
import { StyledNav } from '../styled/StyledNav';

import MenuButton from './MenuButton';
import Logo from './Logo';
import CartComponent from './CartComponent';
import SearchBar from './SearchBar';

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState<boolean>(false)


  return (
    <>
      <StyledHeader theme={theme}>
        <StyledNav direction={'row'}>
          <MenuButton
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <Logo />
          <SearchBar />
          <CartComponent />
        </StyledNav>
      </StyledHeader>
    </>
  )
}

export default Navbar