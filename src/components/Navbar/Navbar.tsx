import React, { useEffect, useState } from 'react'

import { useTheme } from 'styled-components'
import { StyledHeader } from '../styled/StyledHeader';
import { StyledNav } from '../styled/StyledNav';

import MenuButton from './MenuButton';
import Logo from './Logo';
import CartComponent from './CartComponent';
import SearchBar from './SearchBar';

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const [navCover, setNavCover] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [pageHeight, setPageHeight] = useState<number>(0)

  useEffect(() => {
    var body = document.body,
      html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    setPageHeight(height)
  }, [])

  return (
    <>
      <StyledHeader theme={theme}>
        <StyledNav direction={'row'}>
          <MenuButton
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <Logo />
          <SearchBar setNavCover={setNavCover} />
          <CartComponent />
        </StyledNav>
      </StyledHeader>
      <div
        id='nav-cover'
        style={navCover ?
          { display: 'block', height: pageHeight } :
          { display: 'none', height: pageHeight }}
      ></div>
    </>
  )
}

export default Navbar