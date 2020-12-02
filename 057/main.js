    //filter

// const names = ['Ann', 'Dima', 'Ivan', 'Maksimka', 'Sancho', 'Voldemort', 'qqqqq'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

    //map

// let answers = ['Ivan', 'Ann', 'Hello', 'fdfdsfsdfsdf', 'fdsfdsfff'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

    // every/some 

// const some = ['4', 'fdfsfsd', 'fdsfsdfdsffffff'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'string'));

    //reduce

// const arr = [4, 5, 6, 7, 8, 9];
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = ['appple', 'pear', 'google', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    dima: 'persone',
    friend: 'persone',
    cat: 'animal',
    dog: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);

