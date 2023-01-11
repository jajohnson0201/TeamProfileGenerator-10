const Intern = require('../class-lib/Intern')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        const name = "Joe";
        const e = new Intern(name, 123, "email@email.com", "school");
        expect(e.name).toBe(name);
    });
    it('Should return the name provided.',()=>{
        const name = "Joe";
        const e = new Intern(name, 123, "email@email.com", "school");
        expect(e.getName()).toBe(name);
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        const id = 123;
        const e = new Intern("Joe", id, "email@email.com", "school");
        expect(e.id).toBe(id);
    });
    it('Should return the ID # provided.',()=>{
        const id = 123;
        const e = new Intern("Joe", id, "email@email.com", "school");
        expect(e.getID()).toBe(id);
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        const email = "email@email.com";
        const e = new Intern("Joe", 123, email, "school");
        expect(e.email).toBe(email);
    });
    it('Should return the email provided.',()=>{
        const email = "email@email.com";
        const e = new Intern("Joe", 123, email, "school");
        expect(e.getEmail()).toBe(email);
    });
});

describe('School', ()=>{
    it('Should consist of letters.', ()=>{
        const school = "school";
        const e = new Intern("Joe", 123, "email@email.com", school);
        expect(e.school).toBe(school);
    });
    it('Should consist of letters.', ()=>{
        const school = "school";
        const e = new Intern("Joe", 123, "email@email.com", school);
        expect(e.getSchool()).toBe(school);
    });
});

describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        const e = new Intern("Joe", 123, "email@email.com", 'school');

        expect(e.getRole()).toBe("Intern");
    })
});