const Passenger = require('./Passenger');
const Person = require('./Person');

describe('Passenger object', () => {

   
    test('passenger has a name', () => {
        const passengerTest = new Passenger('Tim Salazar');
        expect(passengerTest.name).toBeDefined();
        
    })

    test('passenger has a destination', () => {
        const destin = new Passenger('Bob', 123)
        expect(destin.destination).toBeDefined();
    })

   
    test('greet the new passenger', () => {
        const personTest = new Person("Bob");
        expect(personTest.greeting).toBeDefined();

    })

    test('is an instance of a passenger', () => {
        const mary = new Passenger('Mary Witkins');
        expect(mary instanceof Passenger).toBeTruthy();

    })
})