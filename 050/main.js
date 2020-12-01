const persone = {
    name: "Dima",
    tel: "+3090493-940-3",
    parents: {
        mom: "Olga",
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(persone));
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);