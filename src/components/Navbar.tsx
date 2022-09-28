import { useTheme } from 'styled-components'
import { StyledHeader } from './styled/StyledHeader';
import { StyledNav } from './styled/StyledNav';
import { StyledLink } from './styled/StyledLink';
import { StyledInput } from './styled/StyledInputs';
import React, { useState } from 'react'
import Link from 'next/link';
import Search from '@mui/icons-material/Search';
import styles from '../../styles/SearchIcon.module.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuButton from './MenuButton';

const Navbar = () => {
  const theme = useTheme();
  const [navCover, setNavCover] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      <StyledHeader theme={theme}>
        <StyledNav direction={'row'}>
          <MenuButton
            setOpenMenu={setOpenMenu}
            openMenu={openMenu} />
          <div>
            <Link href={'/'} passHref>
              <StyledLink size={'xl'}>
                PEDROZON
              </StyledLink>
            </Link>
          </div>
          <div className={styles.container}
            onClick={() => setNavCover(true)}
            onBlur={() => setNavCover(false)}
          >
            <Search
              className={styles.searchIcon}
              aria-hidden={true}
            />
            <label
              htmlFor="search"
              aria-describedby='Search products bar'
              hidden
            >Search</label>
            <StyledInput
              type="text"
              name="search"
              id="search"
              placeholder='search' />
          </div>
          <div>
            <button className='icon'>
              <Badge badgeContent={4} max={10} color="warning">
                <ShoppingCartIcon fontSize='large' />
              </Badge>
            </button>

          </div>
        </StyledNav>
      </StyledHeader>
      <div
        id='nav-cover'
        style={navCover ?
          { display: 'block' } : { display: 'none' }}
      ></div>
    </>
  )
}

export default Navbar