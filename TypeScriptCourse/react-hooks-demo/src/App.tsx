import {
	useState,
	useEffect,
	useCallback,
	useMemo,
	useRef,
	MouseEvent,
	KeyboardEvent,
} from 'react';

interface User {
	id: number;
	username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = n => {
	if (n <= 1) return 1;

	return fib(n - 1) + fib(n - 2);
};

function App() {
	const [count, setCount] = useState<number>(0);
	const [users, setUsers] = useState<User[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	console.log(inputRef.current);
	console.log(inputRef.current?.value);

	const myNum = 37;

	useEffect(() => {
		console.log('mounting');
		console.log('Users: ', users);

		return () => console.log('unmounting');
	}, [users]);

	type ButtonEvent = MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>;

	const addTwo = useCallback((e: ButtonEvent): void => {
		console.log(e);
		setCount(c => c + 2);
	}, []);

	const fibResult = useMemo<number>(() => fib(myNum), [myNum]);

	return (
		<>
			<div className='App'>
				<h1>{count}</h1>
				<button onClick={addTwo}>Add</button>
				<h2>{fibResult}</h2>
				<input type='text' ref={inputRef} />
			</div>
		</>
	);
}

export default App;
