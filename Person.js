class Person {

    constructor(name) {
        this.name = name;

    }

    greeting() {
        return `Hello there ${this.name}`;
        
    }
}

module.exports = Person;