import './css/style.css';
import FullList from './models/FullList';
import ListItem from './models/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
    const fullList = FullList.instance;
    const listTemplate = ListTemplate.instance;

    const itemForm = document.getElementById('itemEntryForm') as HTMLFormElement;

    itemForm.addEventListener('submit', (e: SubmitEvent): void => {
        e.preventDefault();

        const input = document.getElementById('newItem') as HTMLInputElement;
        const newEntry: string = input.value.trim();

        if (!newEntry) return;
        
        const itemId = (fullList.list?.[fullList.list.length - 1]?.id ?? 0) + 1;

        fullList.addItem(new ListItem(itemId.toString(), newEntry));
        listTemplate.render(fullList);
    });

    const clearBtn = document.getElementById('clearItemsButton') as HTMLButtonElement;

    clearBtn.addEventListener('click', (): void => {
        fullList.clearList();
        listTemplate.clear();
    });

    fullList.load();
    listTemplate.render(fullList);
};

document.addEventListener('DOMContentLoaded', initApp);
