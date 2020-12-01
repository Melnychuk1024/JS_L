// console.log('Запрос данних...');

// const example = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Підготовка данних...');
    

//     const products = {
//         name: "TV",
//         price: 2000
//     };
    
//     resolve(products);
//     }, 2000);
// });

//     example.then((products) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 products.status = 'order';
//                 resolve(products);
//             }, 2000);
//         });
//     }).then(data => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     }).catch(() => {
//         console.error('ERROR');
//     }).finally(() => {
//         console.log('FINAL');
//     });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});
