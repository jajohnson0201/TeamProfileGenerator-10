const Employee = require('../class-lib/Employee')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        expect(new Employee ('Joe').name).toBe('Joe');
    });
    it('Should return the name provided.',()=>{
        expect(new Employee ('Joe').getName()).toBe('Joe');
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        expect(new Employee ('Joe').id).toBe(!isNaN);
    });
    it('Should return the ID # provided.',()=>{
        expect(new Employee ('Joe').getID()).toBe('Joe');
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        expect(new Employee ('Joe').email).toBe("jajohnson0201@gmail.com");
    });
    it('Should return the email provided.',()=>{
        expect(new Employee ('Joe').getEmail()).toBe('Joe');
    });
});

describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        expect(new Employee ('Joe').getRole().toBe("Employee"))
    })
});