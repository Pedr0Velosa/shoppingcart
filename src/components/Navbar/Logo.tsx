import React from 'react'
import { OutlineBox, AlignBox } from '@utils/Imports'
import Link from 'next/link'
import { StyledLink } from '../styled/StyledLink'

const Logo = (): JSX.Element => {
  return (
    <OutlineBox>
      <AlignBox>
        <Link href={'/'} passHref>
          <StyledLink id='logo'>
            PEDROZON
          </StyledLink>
        </Link>
      </AlignBox>
    </OutlineBox>
  )
}

export default Logo