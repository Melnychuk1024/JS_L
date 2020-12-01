const box = document.querySelector('.box');
const button = document.querySelector('.button-click');

const sizeHeight = box.scrollHeight;
console.log(sizeHeight);

button.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});