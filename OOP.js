// Define a blueprint for a car

class Car {
    //the constructor to initialize an object
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
        this.isEngineOn = false
    }


// A method is part of a class
    startEngine() {
        this.isEngineOn = true;
        console.log(`The ${this.make} ${this.model} 's engine is running`)

    }
    displayInfo(){
        console.log(`car info ${this.year} ${this.make} ${this.model}`)
    }

}
 //create an instance of a class

const myCar = new Car("Mercedes",e500,2024);

mycar.startEngine()
mycar.displayInfo()








