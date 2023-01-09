const Engineer = require('../class-lib/Engineer')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        expect(new Engineer ('Joe').name).toBe('Joe');
    });
    it('Should return the name provided.',()=>{
        expect(new Engineer ('Joe').getName()).toBe('Joe');
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        expect(new Engineer ('Joe').id).toBe(!isNaN);
    });
    it('Should return the ID # provided.',()=>{
        expect(new Engineer ('Joe').getID()).toBe('Joe');
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        expect(new Engineer ('Joe').email).toBe("jajohnson0201@gmail.com");
    });
    it('Should return the email provided.',()=>{
        expect(new Engineer ('Joe').getEmail()).toBe('Joe');
    });
});

describe('GitHub', ()=>{
    it('Should return user github username.', ()=>{
        expect(new Engineer ('Joe').getGitub()).toBe('jajohnson0201');
    });
    it('Should be a username at least.', ()=>{
        expect(new Engineer ('Joe').github).toBe('jajohnson0201');
    });
});

describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        expect(new Engineer ('Joe').getRole().toBe("Engineer"))
    })
});