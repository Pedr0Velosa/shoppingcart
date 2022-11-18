import React, { useState, useEffect } from 'react'
import { Badge, ShoppingCartIcon, OutlineBox, AlignBox, StyledButton } from '@imports/Imports'
import DrawerWrapper from '../Drawer/DrawerWrapper';
import DrawerCartList from '../Drawer/DrawerCart/DrawerCartList';
import useCartContext from '@lib/hooks/useCartContext';

enum icon {
  medium = 'medium',
  large = 'large',
  small = 'small',
  inherit = 'inherit',
}

const CartComponent = (): JSX.Element => {
  const [iconSize, setIconSize] = useState<icon | undefined>(icon.medium);
  const [openCartMenu, setOpenCartMenu] = useState<boolean>(false);

  const { getTotalAmountCartItems } = useCartContext()

  useEffect(() => {
    const windowSize = window.innerWidth
    if (windowSize > 425) return setIconSize(icon.large)
  }, [])

  return (
    <>
      <OutlineBox>
        <AlignBox>
          <StyledButton
            variant='text'
            color='inherit'
            sx={{ minWidth: 'unset' }}
            onClick={() => setOpenCartMenu(!openCartMenu)}
          >
            <Badge badgeContent={getTotalAmountCartItems()} max={10} color="warning">
              <ShoppingCartIcon fontSize={iconSize} />
            </Badge>
          </StyledButton>
        </AlignBox>
      </OutlineBox>
      <DrawerWrapper
        open={openCartMenu}
        setOpen={setOpenCartMenu}
        anchor='right'
      >
        <DrawerCartList />
      </DrawerWrapper>   </>
  )
}

export default CartComponent