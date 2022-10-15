import React, { useEffect, useState } from 'react'
import Image from './Image'
import { ProductsType } from '@pages/index'
import { Typography } from '@mui/material'
import { StaticImageData } from 'next/image'
import styles from '@styles/SingleProduct.module.css'

type SingleProductProps = {
  product: ProductsType | null,
  discount?: boolean
}

const SingleProduct = ({ product, discount = false }: SingleProductProps): JSX.Element => {
  const [imageToShow, setImageToShow] = useState<string | StaticImageData>('/assets/blur.webp')

  useEffect(() => {
    if (!product?.thumbnail) return
    setImageToShow(product.thumbnail)
  }, [])

  if (!product) {
    return <>não deu</>
  }

  return (
    <>
      <div className={styles['image-container']}>
        <div className={styles['image-options']}>
          {product?.images.map((image, index) => (
            <Image
              key={index}
              onMouseEnter={() => setImageToShow(image)}
              onError={() => {
                setImageToShow('/assets/blur.webp');
              }}
              src={image}
              alt={`${ product.title } photo`}
              height={'60px'}
              width={'60px'}
              placeholder='blur'
              blurDataURL={'/assets/blur.webp'}
              layout="fixed"
              quality={100}
              isIcon={true}
              isActive={image === imageToShow}
            />
          ))}
        </div>
        <Image
          onError={() => {
            setImageToShow('/assets/blur.webp')
          }}
          src={imageToShow}
          alt={`${ product.title } photo`}
          height={'60px'}
          width={'60px'}
          placeholder='blur'
          blurDataURL={'/assets/blur.webp'}
          layout='responsive'
          quality={100}
        />
      </div>
      <div>
        <div>
          <Typography variant='caption'>
            {product.brand}
          </Typography>
          <Typography variant='h6'>
            {product.title}
          </Typography>
        </div>
        <div>
          {discount ?
            <>
              <Typography variant='body1'>
                U$
                <Typography
                  component={'span'}
                  variant={'h4'}
                  className={styles.price}
                >
                  {product.price}
                </Typography>
              </Typography>
              <Typography
                sx={{ fontWeight: 'normal' }}
                color={'GrayText'}
                variant='subtitle2'
              >
                From:
                <Typography
                  component={'span'}
                  className={styles['line-through']}
                >
                  {" "}U${product.price}
                </Typography>
              </Typography>
            </> :
            <>
              <Typography variant='body1'>
                U$ {product.price}
              </Typography>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default SingleProduct
