import { useContext } from 'react';
import { cartContext } from './CartProvider';

const useCartContext = () => {
  const { state, dispatch } = useContext(cartContext)
  return { state, dispatch }
}

export default useCartContext

