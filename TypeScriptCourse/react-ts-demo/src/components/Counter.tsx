import { ReactNode } from 'react';

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
    return (
        <>
            {children}
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </>
    );
};

export default Counter;
