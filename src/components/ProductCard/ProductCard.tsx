import type { ProductsType } from '@lib/types/HomePageTypes';
import { Card, CardContent, Typography, Rating } from '@imports/Imports'
import styles from '@styles/Homes.module.css';
import Link from 'next/link';
import Image from '@components/Image';

type ProductCardType = {
  item: ProductsType,
  isLastItem: boolean,
  reference: ((node?: Element | null | undefined) => void)
}

const ProductCard = ({ item, isLastItem, reference }: ProductCardType) => {

  if (isLastItem && reference) {
    return (
      <Link href={`/product/${ item.id }`} >
        <Card
          className={styles.content}
          ref={reference}
        >
          <Image
            src={item.thumbnail}
            alt={item.description}
            height={200}
            width={250}
            isIcon={false}
          />
          <CardContent>
            <Typography variant="subtitle2" >
              {item.title}
            </Typography>
            <Typography className={styles['overflow-paragraph']} variant="body1" gutterBottom>
              {item.description}
            </Typography>
            <Rating
              name="rating-star"
              defaultValue={item.rating}
              precision={0.25}
              size="large"
              readOnly />
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/product/${ item.id }`}>
      <Card
        className={styles.content}
      >
        <Image
          src={item.thumbnail}
          alt={item.description}
          height={200}
          width={250}
          isIcon={false}
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
      </Card>
    </Link>
  )
}

export default ProductCard