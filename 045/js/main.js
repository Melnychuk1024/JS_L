function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Користувач ${this.name} пішов`);
};

const Dima = new User('Dima', 23);
const Vlad = new User('Vlad', 25);

Dima.exit();

Dima.hello();
Vlad.hello();

console.log(Dima);
console.log(Vlad);