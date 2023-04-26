import Heading from './components/Heading';
import { useState } from 'react';
import Section from './components/Section';
import Counter from './components/Counter';
import List from './components/List';

function App() {
    const [count, setCount] = useState(1);

    return (
        <>
            <Heading title='Hello, world!' />
            <Section title='Different Title'>This is my section</Section>
            <Counter setCount={setCount}>
                <h1>Count is {count}</h1>
            </Counter>
            <List
                items={['☕ Coffee', '🌮 Tacos', '💻 Code']}
                render={item => <span className='bold'>{item}</span>}
            />
        </>
    );
}

export default App;
