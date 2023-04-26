import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

type CounterHookType = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

const useCounter = (): CounterHookType => {
	const {
		state: { count },
		increment,
		decrement,
	} = useContext(CounterContext);

	return {
		count,
		increment,
		decrement,
	};
};

export default useCounter;
