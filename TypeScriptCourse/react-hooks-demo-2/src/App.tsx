import Counter from './components/Counter';
import { CounterProvider } from './context/CounterContext';

function App() {
	return (
		<>
			<CounterProvider count={0} text={''}>
				<Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
			</CounterProvider>
		</>
	);
}

export default App;
