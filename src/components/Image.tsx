import React, { useEffect, useState } from 'react'
import NextImage, { ImageProps, StaticImageData } from 'next/image'
import styles from '@styles/SingleProduct.module.css'
import classNames from "classnames";

interface CustomProps extends ImageProps {
  isIcon?: boolean,
  isHover?: boolean
}

const Image = ({ isIcon, src, ...props }: CustomProps): JSX.Element => {

  const [imgSrc, setImgSrc] = useState<string | StaticImageData>('/assets/blur.webp')

  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleEvents = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, bool: boolean | ((prevState: boolean) => boolean)) => {
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
      blurDataURL={'/assets/blur.webp'}
      {...props}
    />
  )

  return (
    <div
      className={classNames({
        [styles.image]: true,
        [styles.hovered]: isHovered,
        [styles.clicked]: isHovered && isClicked,
      })}
      style={{ width: props.width, height: props.height, cursor: 'pointer' }}
      onMouseDown={(e) => handleEvents(e, true)}
      onMouseUp={(e) => handleEvents(e, false)}
      onMouseEnter={(e) => handleEvents(e, true)}
      onMouseLeave={(e) => handleEvents(e, false)}
    >
      <NextImage
        src={imgSrc}
        onError={() => {
          setImgSrc('/assets/blur.webp')
        }}
        blurDataURL={'/assets/blur.webp'}
        {...props}
      />
    </div>
  )
}

export default Image
