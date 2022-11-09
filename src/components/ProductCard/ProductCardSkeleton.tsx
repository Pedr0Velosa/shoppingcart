import { Card, CardContent, Rating } from '@imports/Imports'
import styles from '@styles/HomePageLoading.module.css';
import styled from 'styled-components';
import Image from 'next/image'

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const ProductCardSkeleton = () => {

  return (
    <StyledCard style={{ margin: '0 auto' }}>
      <Image
        src={'/assets/blur.webp'}
        alt={''}
        height={'200px'}
        width={'250px'}
      />
      <CardContent>
        <p className={`${ styles.title } ${ styles.skeleton }`} />
        <p className={`${ styles.description } ${ styles.skeleton }`} />
        <p className={`${ styles['description-last'] } ${ styles.skeleton }`} />
        <Rating
          name="rating-star"
          defaultValue={5}
          precision={0.25}
          size="large"
          readOnly
        />
      </CardContent>
    </StyledCard>
  )
}

export default ProductCardSkeleton