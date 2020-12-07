'use strict';

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

    if(localStorage.getItem('isChecked')) {
        checkbox.checked = true;
    }
    if(localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'red';
    }

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if(localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Dima',
    age: 23
};
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('Dima', serializedPersone);

console.log(JSON.stringify(localStorage.getItem('Dima')));




// localStorage.setItem('number', 5);
// localStorage.setItem('number12', 5);
// localStorage.setItem('number2', 5);
// localStorage.setItem('number3', 5);

// localStorage.getItem('number12');

// localStorage.removeItem('number12');

// localStorage.clear();


