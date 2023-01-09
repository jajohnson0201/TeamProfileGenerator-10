const Manager = require('../class-lib/Manager')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        expect(new Manager ('Joe').name).toBe('Joe');
    });
    it('Should return the name provided.',()=>{
        expect(new Manager ('Joe').getName()).toBe('Joe');
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        expect(new Manager ('Joe').id).toBe(!isNaN);
    });
    it('Should return the ID # provided.',()=>{
        expect(new Manager ('Joe').getID()).toBe('Joe');
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        expect(new Manager ('Joe').email).toBe("jajohnson0201@gmail.com");
    });
    it('Should return the email provided.',()=>{
        expect(new Manager ('Joe').getEmail()).toBe('Joe');
    });
});

describe('officeNumber', ()=>{
    it('Should consist of numbers.', ()=>{
        expect(new Manager ('Joe').officeNumber).toBe(!isNaN);
    });
});

describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        expect(new Manager ('Joe').getRole().toBe("Manager"))
    })
});