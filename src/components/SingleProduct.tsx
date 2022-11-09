import React, { useState } from 'react'
import { ProductsType } from '@lib/types/HomePageTypes'
import { Typography, StyledButton, Box, Rating } from '@imports/Imports'
import styles from '@styles/SingleProduct.module.css'
import Carousel from './Carousel/Carousel'
import ProdutcImages from './ProductImages/ProdutcImages'

type SingleProductProps = {
  product: ProductsType | null,
  discount?: boolean
}


const SingleProduct = ({ product, discount = false }: SingleProductProps): JSX.Element => {

  const [showRatingDetails, setShowRatingDetails] = useState<boolean>(false)

  if (!product) {
    return (
      <Box>
        <Typography>
          Product not found
        </Typography>
      </Box>
    )
  }

  function handleNumberFormat(price: number) {
    const formatPrice = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price)
    const [integer, decimal] = formatPrice.split(',')
    return (
      <>
        <Typography variant={'h4'} component={'span'} className={`${ styles.symbol } ${ styles.inline }`}>
          $
        </Typography>
        <Typography variant={'h4'} component={'span'} className={`${ styles.integer } ${ styles.inline }`}>
          {integer}
        </Typography>
        <Typography variant={'h4'} component={'span'} className={`${ styles.decimal } ${ styles.inline }`}>
          {decimal}
        </Typography>
      </>
    )
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.name}>
        <Typography variant='subtitle1' component={'h2'}>
          {product.brand}
        </Typography>
        <Typography variant='h5' component={'h1'}>
          {product.title}
        </Typography>
        <Box
          onMouseEnter={() => setShowRatingDetails(true)}
          onMouseLeave={() => setShowRatingDetails(false)}
          onClick={() => setShowRatingDetails(!showRatingDetails)}
          className={styles['rating-container']}
        >
          <Rating
            name="rating-star"
            value={product.rating}
            precision={0.2}
            readOnly
            size="large"
          />
          {showRatingDetails &&
            <Box>
              <Typography component={'span'} className={styles.rating}>
                {product.rating} of 5
              </Typography>
            </Box>
          }
        </Box>
      </Box>
      <Box className={styles.image}>
        <Carousel images={product.images} />
        <ProdutcImages images={product.images} />
      </Box>
      <Box className={styles.description}>
        <Typography variant='body1'>
          {product.description}
        </Typography>
      </Box>
      <Box className={styles.price}>
        {!discount ?
          <Typography component={'span'}>
            {handleNumberFormat(product.price)}
          </Typography> :
          <Typography>
            discount
          </Typography>
        }
      </Box>
      <Box className={styles.cart}>
        <Typography>
          Stock: {product.stock}
        </Typography>
        <StyledButton>
          add cart
        </StyledButton>
      </Box>
    </Box>
  )
}

export default SingleProduct;

