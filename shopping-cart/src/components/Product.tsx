import { ReactElement, memo } from 'react';
import { ProductType } from '../context/ProductsProvider';
import { ReducerActionType, ActionsType } from '../context/CartProvider';

type ProductProps = {
	product: ProductType;
	dispatch: React.Dispatch<ReducerActionType>;
	reducerActions: ActionsType;
	inCart: boolean;
};

const Product = ({
	product,
	dispatch,
	reducerActions,
	inCart,
}: ProductProps): ReactElement => {
	const img: URL = new URL(`../images/${product.sku}.jpg`, import.meta.url);

	const onAddToCart = () => {
		dispatch({
			type: reducerActions.ADD,
			payload: { ...product, quantity: 1 },
		});
	};

	return (
		<article className='product'>
			<h3>{product.name}</h3>
			<img src={img.href} alt={product.name} className='product__img' />
			<p>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(product.price)}
				{inCart && ' → Item in Cart: ✔️'}
			</p>
			<button onClick={onAddToCart}>Add to Cart</button>
		</article>
	);
};

const areEqual = (
	{ product: prevProduct, inCart: prevInCart }: ProductProps,
	{ product: nextProduct, inCart: nextInCart }: ProductProps
) => {
	return (
		Object.keys(prevProduct).every(
			key =>
				prevProduct[key as keyof ProductType] ===
				nextProduct[key as keyof ProductType]
		) && prevInCart === nextInCart
	);
};

const MemoizedProduct = memo<typeof Product>(Product, areEqual);

export default MemoizedProduct;
