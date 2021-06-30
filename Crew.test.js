const Crew = require('./Crew');

describe('Crew object', () => {

    
    test('Crew has name, destination, and position', () => {
        const crewTest = new Crew('Billy Meyers');
        expect(crewTest.name).toBe('Billy Meyers');

    })

})