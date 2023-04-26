import {
	ChangeEvent,
	createContext,
	useCallback,
	useReducer,
	ReactElement,
} from 'react';

const enum ACTIONS {
	INCREMENT,
	DECREMENT,
	NEW_INPUT,
}

type StateType = {
	count: number;
	text: string;
};

type ReducerAction = {
	type: ACTIONS;
	payload?: string;
};

const initialState: StateType = { count: 0, text: '' };

const reducer = (state: StateType, action: ReducerAction): StateType => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { ...state, count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { ...state, count: state.count - 1 };
		case ACTIONS.NEW_INPUT:
			return { ...state, text: action.payload ?? '' };
		default:
			throw new Error('Invalid action type');
	}
};

const useCounterContext = (initialState: StateType) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = useCallback(
		() => dispatch({ type: ACTIONS.INCREMENT }),
		[]
	);
	const decrement = useCallback(
		() => dispatch({ type: ACTIONS.DECREMENT }),
		[]
	);
	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: ACTIONS.NEW_INPUT, payload: e.target.value });
	}, []);

	return { state, increment, decrement, handleChange };
};

type CounterContextType = ReturnType<typeof useCounterContext>;
const initialContextState: CounterContextType = {
	state: initialState,
	increment: () => void 0,
	decrement: () => void 0,
	handleChange: () => void 0,
};

export const CounterContext =
	createContext<CounterContextType>(initialContextState);

type ChildrenType = {
	children?: ReactElement | ReactElement[] | undefined;
};

export const CounterProvider = ({
	children,
	...initialState
}: ChildrenType & StateType): ReactElement => {
	return (
		<CounterContext.Provider value={useCounterContext(initialState)}>
			{children}
		</CounterContext.Provider>
	);
};
