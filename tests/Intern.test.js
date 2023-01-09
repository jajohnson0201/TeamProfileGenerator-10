const Intern = require('../class-lib/Intern')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        expect(new Intern ('Joe').name).toBe('Joe');
    });
    it('Should return the name provided.',()=>{
        expect(new Intern ('Joe').getName()).toBe('Joe');
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        expect(new Intern ('Joe').id).toBe(!isNaN);
    });
    it('Should return the ID # provided.',()=>{
        expect(new Intern ('Joe').getID()).toBe('Joe');
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        expect(new Intern ('Joe').email).toBe("jajohnson0201@gmail.com");
    });
    it('Should return the email provided.',()=>{
        expect(new Intern ('Joe').getEmail()).toBe('Joe');
    });
});

describe('School', ()=>{
    it('Should consist of letters.', ()=>{
        expect(new Intern ('Joe').school).toBe("UofM");
    });
    it('Should consist of letters.', ()=>{
        expect(new Intern ('Joe').getSchool()).toBe("UofM");
    });
});

describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        expect(new Intern ('Joe').getRole().toBe("Intern"))
    })
});