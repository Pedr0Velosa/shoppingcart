import React, { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import styles from '@styles/SingleProduct.module.css'
import { ClassNames } from '@emotion/react'

interface CustomProps extends ImageProps {
  isIcon?: boolean,
  isActive?: boolean
}

const Image = ({ isIcon, isActive = false, ...props }: CustomProps): JSX.Element => {

  const [isClicked, setIsClicked] = useState<boolean>(false)

  if (!isIcon) return <NextImage {...props} />

  return (
    <div
      className={`${ isActive ? [styles.image, styles.active].join(" ") : '' }`}
      style={isClicked ? { boxShadow: '0px 0px 6px 1px orangered' } : {}}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      <NextImage {...props} />
    </div>
  )
}

export default Image