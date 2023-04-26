import { ReactElement, createContext, useMemo, useReducer } from 'react';

export type CartItemType = {
	sku: string;
	name: string;
	price: number;
	quantity: number;
};

type CartStateType = { cart: CartItemType[] };

const initialState: CartStateType = { cart: [] };

const ACTIONS = {
	ADD: 'ADD',
	REMOVE: 'REMOVE',
	QUANTITY: 'QUANTITY',
	SUBMIT: 'SUBMIT',
};

export type ActionsType = typeof ACTIONS;

export type ReducerActionType = {
	type: string;
	payload?: CartItemType;
};

const reducer = (
	state: CartStateType,
	action: ReducerActionType
): CartStateType => {
	switch (action.type) {
		case ACTIONS.ADD: {
			if (!action.payload) throw new Error('Invalid payload');

			const item: CartItemType | undefined = state.cart.find(
				item => item.sku === action.payload?.sku
			);

			if (!item) {
				return {
					...state,
					cart: [...state.cart, { ...action.payload, quantity: 1 }],
				};
			}

			return {
				...state,
				cart: state.cart.map(item => {
					if (item.sku === action.payload?.sku) {
						return { ...item, quantity: item.quantity + 1 };
					}

					return item;
				}),
			};
		}
		case ACTIONS.REMOVE:
			if (!action.payload) throw new Error('Invalid payload');

			return {
				...state,
				cart: state.cart.filter(
					item => item.sku !== action.payload?.sku
				),
			};
		case ACTIONS.QUANTITY:
			if (!action.payload) throw new Error('Invalid payload');

			return {
				...state,
				cart: state.cart.map(item => {
					if (item.sku === action.payload?.sku) {
						return { ...item, quantity: action.payload?.quantity };
					}

					return item;
				}),
			};
		case ACTIONS.SUBMIT:
			return { ...state, cart: [] };
		default:
			throw new Error('Invalid action type');
	}
};

const useCartContext = (initialState: CartStateType) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
	const totalPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(
		state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
	);

	const reducerActions = useMemo(() => {
		return ACTIONS;
	}, []);

	const cart = state.cart.sort((a, b) => {
		const itemA = Number(a.sku.slice(-4));
		const itemB = Number(b.sku.slice(-4));

		return itemA - itemB;
	});

	return { dispatch, reducerActions, totalItems, totalPrice, cart };
};

// * Creating a context
export type CartContextType = ReturnType<typeof useCartContext>;

const initialCartContextState: CartContextType = {
	dispatch: () => void 0,
	reducerActions: ACTIONS,
	totalItems: 0,
	totalPrice: '',
	cart: [],
};

export const CartContext = createContext<CartContextType>(
	initialCartContextState
);

type ChildrenType = {
	children?: ReactElement | ReactElement[] | undefined;
};

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
	return (
		<CartContext.Provider value={useCartContext(initialState)}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
