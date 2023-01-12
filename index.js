const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./class-lib/Intern');
const Engineer = require('./class-lib/Engineer');
const Manager = require('./class-lib/Manager');
const createHTML = require('./src/htmlLayOut');
const array = []
//initializer for inquirer questions.
function questionInitiallizer (){
const questionInit = [
    {type: 'list',
    message: 'Select a company role.',
    choices: [ "Intern", "Engineer", "Manager"],
    default: "Intern",
    name: 'role',
}];

inquirer
.prompt(questionInit).then((initData)=>{
    if (initData.role === "Intern"){
        internPrompt(initData.role);
    } else if (initData.role === "Engineer"){
        engineerPrompt(initData.role);
    } else if (initData.role === "Manager"){
        managerPrompt(initData.role);
    }
})
}
questionInitiallizer();

const nextEmployeeQuestion = [{
    type: 'list',
    message: 'Would you like to add another role?',
    choices: ['yes','no'],
    default: 'yes',
    name: 'continueq',
}];
const questions = [{
    type: 'input',
    message: 'What is your Name?',
    name: 'name'
},
{
    type: 'input',
    message: 'What is your ID?',
    name: 'id'
},
{
    type: 'input',
    message: 'What is your Email?',
    name: 'email'
}];
// intern question function, adds the results to the array of employees.
function internPrompt(role){
    const iQuestions = [{
        type: 'input',
        message: 'What School are you from?',
        name: 'school'
    },]
    const internQuestions = questions.concat(iQuestions, nextEmployeeQuestion);
    inquirer
    .prompt(internQuestions).then((data)=>{
        const nextEmployee = data.continueq;
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const school = data.school;
        const addition = new Intern(name,id,email,role,school);
        console.log("Success!","Addition added");
        
        array.push(addition);
        
        if(nextEmployee=== "yes"){
            questionInitiallizer();
        } else {
            const file = createHTML(array);
            writeToPage(file);
        }
    })
}
// engineer question prompt, adds the employee to the array.
function engineerPrompt(role){
    const eQuestions = [{
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github'
    },]
    const engineerQuestions = questions.concat(eQuestions, nextEmployeeQuestion);
    inquirer
    .prompt(engineerQuestions).then((data)=>{
        const nextEmployee = data.continueq;
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const github = data.github;
        const addition = new Engineer(name,id,email,role,github);
        console.log("Success!","Addition added");
        array.push(addition);
        
        if(nextEmployee=== "yes"){
            questionInitiallizer();
        } else {
            const file = createHTML(array);
            writeToPage(file);
        }
    })
}
// manager prompt, adds to the employee list.
function managerPrompt(role){
    const mQuestions = [{
        type: 'input',
        message: 'What is your Office Number?',
        name: 'officeNumber'
    },]
    const managerQuestions = questions.concat(mQuestions, nextEmployeeQuestion);
    inquirer
    .prompt(managerQuestions).then((data)=>{
        const nextEmployee = data.continueq;
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const addition = new Manager(name,id,email,role,officeNumber);
        console.log("Success!","Addition added");
        array.push(addition);
        if(nextEmployee=== "yes"){
            questionInitiallizer();
        } else {
            const file = createHTML(array);
            writeToPage(file);
        }
    })
}
// write to page function that takes the htmlLayOut page and posts the results on the final page.
function writeToPage(data){
    fs.writeFile('./dist/sampleIndex.html', data, (err) =>
    err ? console.log(err) : console.log('Page Created, Success!'));
}

