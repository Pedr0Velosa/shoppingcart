import React from 'react'
import { ProductsType } from '@lib/types/HomePageTypes'
import { Typography, StyledButton } from '@imports/Imports'
import styles from '@styles/SingleProduct.module.css'
import Carousel from './Carousel/Carousel'
import ProdutcImages from './ProductImages/ProdutcImages'

type SingleProductProps = {
  product: ProductsType | null,
  discount?: boolean
}

const SingleProduct = ({ product, discount = false }: SingleProductProps): JSX.Element => {

  if (!product) {
    return <>não deu</>
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
    <div className={styles.container}>
      <div className={styles.name}>
        <Typography variant='subtitle1' component={'h2'}>
          {product.brand}
        </Typography>
        <Typography variant='h5' component={'h1'}>
          {product.title}
        </Typography>
      </div>
      <div className={styles.image}>
        <Carousel images={product.images} />
        <ProdutcImages />
      </div>
      <div className={styles.description}>
        <Typography variant='body1'>
          {product.description}
        </Typography>
      </div>
      <div className={styles.price}>
        {!discount ?
          <Typography component={'span'}>
            {handleNumberFormat(product.price)}
          </Typography> :
          <Typography>
            discount
          </Typography>
        }
      </div>
      <div className={styles.cart}>
        <Typography>
          Stock: {product.stock}
        </Typography>
        <StyledButton>
          add cart
        </StyledButton>
      </div>
    </div>
  )
}

export default SingleProduct;

