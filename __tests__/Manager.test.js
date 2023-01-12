const Manager = require('../class-lib/Manager')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        const name = "Joe";
        const e = new Manager (name, 123, "email@email.com","Manager", 123);
        expect(e.getName()).toBe(name);
    });
    it('Should return the name provided.',()=>{
        const name = "Joe";
        const e = new Manager (name, 123, "email@email.com","Manager", 123);
        expect(e.name).toBe(name);
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        const id = 123;
        const e = new Manager ("Joe", id, "email@email.com","Manager", 123);
        expect(e.id).toBe(id);
    });
    it('Should return the ID # provided.',()=>{
        const id = 123;
        const e = new Manager ("Joe", id, "email@email.com", "Manager", 123);
        expect(e.getID()).toBe(id);
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        const email = "email@email.com";
        const e = new Manager ("Joe", 123, email,"Manager", 123);
        expect(e.email).toBe(email);
    });
    it('Should return the email provided.',()=>{
        const email = "email@email.com";
        const e = new Manager ("Joe", 123, email,"Manager", 123);
        expect(e.getEmail()).toBe(email);
    });
});

describe('officeNumber', ()=>{
    it('Should consist of numbers.', ()=>{
        const value = 123;
        const e = new Manager ("Joe", 123, "email@email.com","Manager", value)
        expect(e.getOfficeNumber()).toBe(value);
    });
});


describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        const role = "Manager";
        const e = new Manager ("Joe", 123, "email@email.com","Manager", 123);
        expect(e.getRole()).toBe(role)
    })
});