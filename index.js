const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./class-lib/Employee');
const Intern = require('./class-lib/Intern');
const Engineer = require('./class-lib/Engineer');
const Manager = require('./class-lib/Manager');
const createHTML = require('./src/htmlLayOut');
const array = []
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
    console.log(initData);
    array.push(initData.role);
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
// function employeePrompt(role){
//     const employeeQuestions = questions.concat(nextEmployeeQuestion);
//     inquirer
//     .prompt(employeeQuestions).then((data)=>{
        
//         const nextEmployee = data.continueq;
//         const name = data.name;
//         const id = data.id;
//         const email = data.email;
//         const addition = new Employee(name,id,email,role);
//         console.log("Success!","Addition added");
//         data.push(addition);
//         if(nextEmployee=== "yes"){
//             questionInitiallizer();
//         } else {
//             createHTML(data);
//         }
//     })
// }
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
        console.log(data,"__");
        const addition = new Intern(name,id,email,school,role);
        console.log("Success!","Addition added");
        console.log(addition);
        array.push(addition);
        console.log(array);
        if(nextEmployee=== "yes"){
            questionInitiallizer();
        } else {
            createHTML(data);
        }
    })
}
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
        const addition = new Engineer(name,id,email,github,role);
        console.log("Success!","Addition added");
        array.push(addition);
        console.log(array);
        if(nextEmployee=== "yes"){
            questionInitiallizer();
        } else {
            createHTML(data);
        }
    })
}
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
        const addition = new Manager(name,id,email,officeNumber,role);
        console.log("Success!","Addition added");
        array.push(addition);
        if(nextEmployee=== "yes"){
            questionInitiallizer();
        } else {
            createHTML(data);
        }
    })
}
