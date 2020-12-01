class Rect {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColorerRectWithText extends Rect {
    constructor (height, width, text, color) {
        super(height, width);
        this.text = text;
        this.color = color; 
    }

    showMyProps() {
        console.log(`TExt ${this.text}, color: ${this.color}`);
    }
}

const div = new ElementHightWidthTextColor(20,20,'Hello WOrl', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rect(10, 10);
// const long = new Rect(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());