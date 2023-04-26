import { ChangeEvent, memo } from 'react';
import {
	CartItemType,
	ReducerActionType,
	ActionsType,
} from '../context/CartProvider';

type CartLineItemProps = {
	item: CartItemType;
	dispatch: React.Dispatch<ReducerActionType>;
	reducerActions: ActionsType;
};

const CartLineItem = ({
	item,
	dispatch,
	reducerActions,
}: CartLineItemProps) => {
	const img: URL = new URL(`../images/${item.sku}.jpg`, import.meta.url);
	const lineTotal: number = item.price * item.quantity;
	const highestQuantity: number = 20 > item.quantity ? 20 : item.quantity;
	const optionValues: number[] = [...Array(highestQuantity).keys()].map(
		n => n + 1
	);

	const handleChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch({
			type: reducerActions.QUANTITY,
			payload: {
				...item,
				quantity: parseInt(e.target.value),
			},
		});
	};

	const handleRemoveItem = () => {
		dispatch({
			type: reducerActions.REMOVE,
			payload: item,
		});
	};

	return (
		<li className='cart__item'>
			<img src={img.href} alt={item.name} className='cart__img' />
			<div aria-label='Item Name'>{item.name}</div>
			<div aria-label='Price Per Item'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(item.price)}
			</div>
			<label htmlFor='itemQty' className='offscreen'>
				Item Quantity
			</label>
			<select
				name='itemQty'
				id='itemQty'
				className='cart__select'
				value={item.quantity}
				aria-label='Item Quantity'
				onChange={handleChangeQuantity}>
				{optionValues.map(val => (
					<option key={`opt${val}`} value={val}>
						{val}
					</option>
				))}
			</select>

			<div
				className='cart__item-subtotal'
				aria-label='Line Item Subtotal'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(lineTotal)}
			</div>

			<button
				className='cart__button'
				aria-label='Remove Item From Cart'
				title='Remove Item From Cart'
				onClick={handleRemoveItem}>
				❌
			</button>
		</li>
	);
};

const areEqual = (
	{ item: prevItem }: CartLineItemProps,
	{ item: nextItem }: CartLineItemProps
) => {
	return Object.keys(prevItem).every(
		key =>
			prevItem[key as keyof CartItemType] ===
			nextItem[key as keyof CartItemType]
	);
};

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areEqual);

export default MemoizedCartLineItem;
