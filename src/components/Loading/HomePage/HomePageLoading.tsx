import React from 'react'
import ProductCardSkeleton from '@components/ProductCard/ProductCardSkeleton'

const fakeProducts = Array.from(Array(10).keys())

const HomePageLoading = () => {

  return (
    < React.Fragment>
      {fakeProducts.map(index => (
        < React.Fragment key={index}>
          <ProductCardSkeleton />
        </React.Fragment>

      ))}
    </React.Fragment>
  )
}

export default HomePageLoading