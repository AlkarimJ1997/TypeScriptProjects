// Selectors
const year = document.getElementById('year') as HTMLSpanElement;

const current = new Date().getFullYear().toString();

year.setAttribute('datetime', current);
year.textContent = current;