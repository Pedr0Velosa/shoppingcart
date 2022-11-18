import React, { useState, useEffect } from 'react'
import Image from '@components/Image'
import styles from '@styles/SingleProduct.module.css'
import { Box } from '@imports/Imports'

const ProductImages = ({ images }: { images: string[] }) => {

  const [selectedImage, setSelectedImage] = useState<string | undefined>()

  useEffect(() => {
    setSelectedImage(images[0] || '/assetes/blur.webp')
  }, [images])

  return (
    <Box className={styles['image-container']}>
      <Box>
        {images.map(image => (
          <Image
            key={image}
            src={image}
            alt={'product image'}
            width={50}
            height={50}
            isIcon={true}
            isSelected={selectedImage === image}
            onMouseEnter={() => setSelectedImage(image)}
          />
        ))}
      </Box>
      <Image
        src={selectedImage || images[0] || '/assetes/blur.webp'}
        alt={'product image'}
        width={500}
        height={500}
        isIcon={false}
      />
    </Box>
  )
}

export default ProductImages