import { useContext } from 'react';
import { ProductsContextType } from '../context/ProductsProvider';
import ProductsContext from '../context/ProductsProvider';

const useProducts = (): ProductsContextType => useContext(ProductsContext);

export default useProducts;
