import React from 'react'
import useCartContext from '@lib/hooks/useCartContext';

const Subtotal = () => {

  const { state } = useCartContext()

  const subtotalPrice = (): JSX.Element => {
    const total = state.products.reduce((acc: number, currentValue: { price: number; qtd: number; }) => acc + currentValue.price * currentValue.qtd, 0)
    return (
      total ? (
        <>
          Subtotal: $<span>{total}</span>
        </>
      ) :
        <>
          Your Pedrozon Cart is empty
        </>
    )
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>{subtotalPrice()}</h2>
    </div>
  )
}

export default Subtotal