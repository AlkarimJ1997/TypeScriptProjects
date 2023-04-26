import { ReactElement, createContext, useState, useEffect } from 'react';

export type ProductType = {
	sku: string;
	name: string;
	price: number;
};

export type ProductsContextType = { products: ProductType[] };

const initialState: ProductType[] = [];

// const initialState: ProductType[] = [
// 	{
// 		sku: 'item0001',
// 		name: 'Widget',
// 		price: 9.99,
// 	},
// 	{
// 		sku: 'item0002',
// 		name: 'Premium Widget',
// 		price: 19.99,
// 	},
// 	{
// 		sku: 'item0003',
// 		name: 'Deluxe Widget',
// 		price: 29.99,
// 	},
// ];

const initialContextState: ProductsContextType = { products: [] };
const ProductsContext = createContext<ProductsContextType>(initialContextState);

type ChildrenType = {
	children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
	const [products, setProducts] = useState<ProductType[]>(initialState);

	useEffect(() => {
		// fetch('http://localhost:3000/products')
		// 	.then(response => response.json())
		// 	.then(data => setProducts(data));
		const fetchProducts = async (): Promise<ProductType[]> => {
			const data = await fetch('http://localhost:3500/products');
			const products = await data.json();

			return products;
		};

		fetchProducts().then(products => setProducts(products));
	}, []);

	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;
