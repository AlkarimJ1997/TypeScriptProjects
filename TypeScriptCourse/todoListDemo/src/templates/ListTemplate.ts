import FullList from '../models/FullList';

interface DOMList {
    // Properties
    ul: HTMLUListElement;

    // Methods
    clear(): void;
    render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
    static instance: ListTemplate = new ListTemplate();
    ul: HTMLUListElement;

    private constructor() {
        this.ul = document.getElementById('listItems') as HTMLUListElement;
    }

    clear = (): void => {
        this.ul.innerHTML = '';
    };

    render = (fullList: FullList): void => {
        this.clear();

        fullList.list.forEach((item) => {
            const li = document.createElement('li') as HTMLLIElement;
            const checkbox = document.createElement('input') as HTMLInputElement;
            const label = document.createElement('label') as HTMLLabelElement;
            const btn = document.createElement('button') as HTMLButtonElement;

            // List item
            li.className = 'item';

            // Checkbox
            checkbox.type = 'checkbox';
            checkbox.id = item.id;
            checkbox.tabIndex = 0;
            checkbox.checked = item.checked;
            checkbox.addEventListener('change', () => {
                item.checked = !item.checked;
                fullList.save();
            });

            // Label
            label.htmlFor = item.id;
            label.textContent = item.item;

            // Button
            btn.className = 'button';
            btn.textContent = 'X';
            btn.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.render(fullList);
            });

            // Append elements
            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(btn);

            this.ul.appendChild(li);
        });
    };
}
