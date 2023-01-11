const Engineer = require('../class-lib/Engineer')

describe('Name', () => {
    it('Should consist of letters.',()=>{
        const name = "Joe";
        const e = new Engineer(name,123,"email@email.com", "github");
        expect(e.name).toBe(name);
    });
    it('Should return the name provided.',()=>{
        const name = "Joe";
        const e = new Engineer(name,123,"email@email.com", "github");
        expect(e.getName()).toBe(name);
    });
});

describe('ID', ()=>{
    it('Should consist of Numbers.',()=>{
        const id = 123;
        const e = new Engineer("Joe",id,"email@email.com", "github");
        expect(e.id).toBe(id);
    });
    it('Should return the ID # provided.',()=>{
        const id = 123;
        const e = new Engineer("Joe",id,"email@email.com", "github");
        expect(e.getID()).toBe(id);
    });
});

describe('Email', ()=>{
    it('Should have an email input.',()=>{
        const email = "email@email.com";
        const e = new Engineer("Joe",123,email, "github");
        expect(e.email).toBe(email);
    });
    it('Should return the email provided.',()=>{
        const email = "email@email.com";
        const e = new Engineer("Joe",123,email, "github");
        expect(e.getEmail()).toBe(email);
    });
});

describe('GitHub', ()=>{
    it('Should return user github username.', ()=>{
        const github = "github";
        const e = new Engineer("Joe",123,"email@email.com", github);
        expect(e.getGitHub()).toBe(github);
    });
    it('Should be a username at least.', ()=>{
        const github = "github";
        const e = new Engineer("Joe",123,"email@email.com", github);
        expect(e.github).toBe(github);
    });
});

describe('getRole()', ()=>{
    it('Should match the class name for role type', ()=>{
        const e = new Engineer("Joe",123,"email@email.com", "github");
        expect(e.getRole()).toBe("Engineer")
    })
});