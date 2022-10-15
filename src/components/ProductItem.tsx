import React from 'react'
import type { ProductsType } from '@pages/index'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import styles from '@styles/Homes.module.css';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const ProductItem = ({ item }: { item: ProductsType }) => {
  return (
    <Link href={`/${ item.id }`}>
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
          <Typography className={styles.test} variant="body1" gutterBottom>
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

export default ProductItem