const Person = require('./Person') ;

class Passenger extends Person {

    constructor(name, destination) {

        super(name);
        this.destination = destination;

    }
}




module.exports = Passenger;