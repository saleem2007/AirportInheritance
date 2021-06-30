const Person = require('./Person');

class Crew extends Person {

    constructor(name, destination, position) {
        super(name, destination);
        this.position = position;
    }
}


module.exports = Crew;