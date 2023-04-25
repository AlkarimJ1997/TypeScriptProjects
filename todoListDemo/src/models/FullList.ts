import ListItem from './ListItem';

interface List {
    // Properties
    list: ListItem[];

    // Methods
    load(): void;
    save(): void;
    clearList(): void;
    addItem(item: ListItem): void;
    removeItem(id: string): void;
}

export default class FullList implements List {
    // Singleton pattern
    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list;
    }

    load = (): void => {
        const list: string | null = localStorage.getItem('myList');

        const parsedList: { _id: string; _item: string; _checked: boolean }[] =
            JSON.parse(list ?? '[]');

        parsedList.forEach(({ _id, _item, _checked }) => {
            const newListItem = new ListItem(_id, _item, _checked);

            FullList.instance.addItem(newListItem);
        });
    };

    save = (): void =>
        localStorage.setItem('myList', JSON.stringify(this._list));

    clearList = (): void => {
        this._list = [];
        this.save();
    };

    addItem = (item: ListItem): void => {
        this._list.push(item);
        this.save();
    };

    removeItem = (id: string): void => {
        this._list = this._list.filter((item) => item.id !== id);
        this.save();
    };
}
