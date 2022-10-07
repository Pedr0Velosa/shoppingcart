import React, { useState, useEffect } from 'react'
import { OutlineBox, AlignBox, StyledButton } from '../../utils/Imports'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

enum icon {
  medium = 'medium',
  large = 'large',
  small = 'small',
  inherit = 'inherit',
}

const CartComponent = (): JSX.Element => {
  const [iconSize, setIconSize] = useState<icon | undefined>(icon.medium);

  useEffect(() => {
    const windowSize = window.innerWidth
    if (windowSize > 425) return setIconSize(icon.large)
  }, [])


  return (
    <OutlineBox>
      <AlignBox>
        <StyledButton
          variant='text'
          color='inherit'
          sx={{ minWidth: 'unset' }}
        >
          <Badge badgeContent={6} max={10} color="warning">
            <ShoppingCartIcon fontSize={iconSize} />
          </Badge>
        </StyledButton>
      </AlignBox>
    </OutlineBox>
  )
}

export default CartComponent