const Employee = require('../class-lib/Employee')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        const name = "Joe";
        const e = new Employee(name, 123, "email@email.com");
        expect(e.name).toBe(name);
    });
    it('Should return the name provided.',()=>{
        const name = "Joe";
        const e = new Employee(name, 123, "email@email.com");
        expect(e.getName()).toBe(name);
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        const id = 123;
        const e = new Employee("Joe", id, "email@email.com");
        expect(e.id).toBe(id);
    });
    it('Should return the ID # provided.',()=>{
        const id = 123;
        const e = new Employee("Joe", id, "email@email.com");
        expect(e.getID()).toBe(id);
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        const email = "email@email.com";
        const e = new Employee("Joe", 123, email);
        expect(e.email).toBe(email);
    });
    it('Should return the email provided.',()=>{
        const email = "email@email.com";
        const e = new Employee("Joe", 123, email);
        expect(e.getEmail()).toBe(email);
    });
});

describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        const e = new Employee("Joe", 123, "email@email.com");
        expect(e.getRole()).toBe("Employee")
    })
});