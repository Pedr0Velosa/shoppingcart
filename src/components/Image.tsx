import React, { useEffect, useState } from 'react'
import NextImage, { ImageProps, StaticImageData } from 'next/image'
import styles from '@styles/SingleProduct.module.css'
import classNames from "classnames";

interface CustomProps extends ImageProps {
  isIcon?: boolean,
  isSelected?: boolean
}

const Image = ({ isIcon, src, isSelected, ...props }: CustomProps): JSX.Element => {

  const [imgSrc, setImgSrc] = useState<string | StaticImageData>('/assets/blur.webp')

  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent, bool: boolean) => {
    e.preventDefault()
    setIsClicked(bool)
  }

  useEffect(() => {
    setImgSrc(src as string)
  }, [src])

  if (!isIcon) return (
    <NextImage
      src={imgSrc}
      onError={() => {
        setImgSrc('/assets/blur.webp')
      }}
      placeholder='blur'
      blurDataURL={'/assets/blur.webp'}
      {...props}
    />
  )

  return (
    <div
      className={classNames(styles.icon, {
        [styles.clicked]: isClicked,
        [styles.selected]: isSelected
      })}
      style={{ width: props.width, height: props.height, cursor: 'pointer' }}
      onMouseDown={(e) => handleClick(e, true)}
      onMouseUp={(e) => handleClick(e, false)}
    >
      <NextImage
        src={imgSrc}
        onError={() => {
          setImgSrc('/assets/blur.webp')
        }}
        placeholder='blur'
        blurDataURL={'/assets/blur.webp'}
        {...props}
      />
    </div>
  )
}

export default Image
