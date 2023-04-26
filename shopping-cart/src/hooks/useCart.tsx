import { useContext } from 'react';
import { CartContextType } from '../context/CartProvider';
import CartContext from '../context/CartProvider';

const useCart = (): CartContextType => useContext(CartContext);

export default useCart;
