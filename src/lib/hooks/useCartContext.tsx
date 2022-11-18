import { useContext } from 'react';
import { cartContext } from '../contexts/CartContext/CartProvider';

const useCartContext = () => {
  const { state, dispatch, getTotalAmountCartItems } = useContext(cartContext)
  return { state, dispatch, getTotalAmountCartItems }
}

export default useCartContext

