import React from 'react'
import { OutlineBox, AlignBox } from '@imports/Imports'
import Link from 'next/link'
import { StyledLink } from '../styled/StyledLink'

const Logo = (): JSX.Element => {
  return (
    <OutlineBox>
      <AlignBox>
        <Link href={'/product'} passHref>
          <StyledLink id='logo'>
            PEDROZON
          </StyledLink>
        </Link>
      </AlignBox>
    </OutlineBox>
  )
}

export default Logo