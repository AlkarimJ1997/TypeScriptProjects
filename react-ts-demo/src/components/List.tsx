import { ReactNode } from 'react';

interface ListProps<T> {
    items: T[];
    render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, idx) => (
                <li key={idx}>{render(item)}</li>
            ))}
        </ul>
    );
};

export default List;
