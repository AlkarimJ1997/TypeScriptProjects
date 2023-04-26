import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Product from './Product';

const ProductList = () => {
	const { dispatch, reducerActions, cart } = useCart();
	const { products } = useProducts();

	return (
		<main className='main main--products'>
			{products?.length > 0 ? (
				products.map(product => {
					const inCart = cart.some(item => item.sku === product.sku);

					return (
						<Product
							key={product.sku}
							product={product}
							dispatch={dispatch}
							reducerActions={reducerActions}
							inCart={inCart}
						/>
					);
				})
			) : (
				<p>Loading...</p>
			)}
		</main>
	);
};

export default ProductList;
