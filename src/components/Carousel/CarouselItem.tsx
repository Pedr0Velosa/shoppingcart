import React from 'react'
import Image from '@components/Image'

const CarouselItem = ({ image, index }: { image: string, index: number }) => {

  return (
    <li data-item={index}>
      <Image
        draggable={false}
        src={image}
        width={'300px'}
        height={'300px'}
        layout={'fixed'}
        isIcon={false}
        alt={'product image number'}
      />
    </li>
  )
}

export default CarouselItem