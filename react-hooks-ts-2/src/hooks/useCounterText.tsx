import { ChangeEvent, useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

type CounterTextHookType = {
	text: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useCounterText = (): CounterTextHookType => {
	const {
		state: { text },
		handleChange,
	} = useContext(CounterContext);

	return {
		text,
		handleChange,
	};
};

export default useCounterText;
