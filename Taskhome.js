class Shape {
    numSides;
    sideLengths;
    
    getNumSides(){
        return this.numSides;
    }

    getSideLengths(){
        return this.sideLengths;
    }
    getPerimeter(){
        return this.numSides * this.sideLengths;
    }
}


class Rectangle extends Shape{
    numSides = 4;

    constructor(sideLengths = 1){
        super()
        this.sideLengths = sideLengths;
    }
    getArea() {
        return this.sideLengths ** 2;
    }
}
const kotak = new Rectangle (10)
console.log(kotak.getArea())
console.log(kotak.getNumSides());
console.log(kotak.getSideLengths());
console.log(kotak.getPerimeter());
