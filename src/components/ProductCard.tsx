import React, { Ref } from 'react'
import type { ProductsType } from '@lib/types/HomePageTypes';
import { Card, CardContent, Typography, Rating } from '@imports/Imports'
import styles from '@styles/Homes.module.css';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'
import { useRef, useEffect } from 'react'

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
type ProductCardType = {
  item: ProductsType,
  isLastItem: boolean,
  reference: (node?: Element | null | undefined) => void
}

const ProductCard = ({ item, isLastItem, reference }: ProductCardType) => {

  if (isLastItem) {
    return (
      <Link href={`/product/${ item.id }`} >
        <StyledCard
          className={styles.content}
          ref={reference}
        >
          <Image
            src={item.thumbnail}
            alt={item.description}
            height={'200px'}
            width={'250px'}
          />
          <CardContent>
            <Typography variant="subtitle2" >
              {item.title}
            </Typography>
            <Typography className={styles['overflow-paragraph']} variant="body1" gutterBottom>
              {item.description}
            </Typography>
            <Rating name="rating-star"
              defaultValue={item.rating}
              precision={0.25}
              size="large"
              readOnly />
          </CardContent>
        </StyledCard>
      </Link>
    )
  }

  return (
    <Link href={`/product/${ item.id }`}>
      <StyledCard
        className={styles.content}
      >
        <Image
          src={item.thumbnail}
          alt={item.description}
          height={'200px'}
          width={'250px'}
        />
        <CardContent>
          <Typography variant="subtitle2" >
            {item.title}
          </Typography>
          <Typography className={styles['overflow-paragraph']} variant="body1" gutterBottom>
            {item.description}
          </Typography>
          <Rating name="rating-star"
            defaultValue={item.rating}
            precision={0.25}
            size="large"
            readOnly />
        </CardContent>
      </StyledCard>
    </Link>
  )
}

export default ProductCard