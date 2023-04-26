import { ReactNode } from 'react';
import useCounter from '../hooks/useCounter';
import useCounterText from '../hooks/useCounterText';

type ChildrenType = {
	children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
	const { count, increment, decrement } = useCounter();
	const { text, handleChange } = useCounterText();

	return (
		<>
			<h1>{children(count)}</h1>
			<div>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
				<input type='text' value={text} onChange={handleChange} />
				<h2>{text}</h2>
			</div>
		</>
	);
};

export default Counter;
