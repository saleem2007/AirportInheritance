const Person = require('./Person');

describe('Person object', () => {

    
    test('Person has a name', () => {
        const testPerson = new Person('Adam');
        expect(testPerson.name).toBe('Adam');
    })
})
