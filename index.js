const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./class-lib/Employee');
const Intern = require('./class-lib/Intern');
const Engineer = require('./class-lib/Engineer');
const Manager = require('./class-lib/Manager');
const createHTML = require('./src/htmlLayOut');
const data = []
function questionInitiallizer (){
const questionInit = [
    {type: 'list',
    message: 'Select a company role.',
    choices: ["Employee", "Intern", "Engineer", "Manager"],
    default: "Employee",
    name: 'role',
}];

inquirer
.prompt(questionInit).then((initData)=>{
    data.push(initData);
    if (initData.role = "Employee"){
        employeePrompt(initData);
    } else if (initData.role = "Intern"){
        internPrompt(initData);
    } else if (initData.role = "Engineer"){
        engineerPrompt(initData);
    } else if (initData.role = "Manager"){
        managerPrompt(initData);
    }
})
}
questionInitiallizer();

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
function employeePrompt(role){
    inquirer
    .prompt(questions).then((data)=>{

    })
}
function internPrompt(role){
    const iQuestions = [{
        type: 'input',
        message: 'What School are you from?',
        name: 'school'
    },]
    const internQuestions = concat(questions,iQuestions);
    inquirer
    .prompt(internQuestions).then((data)=>{
        
    })
}
function engineerPrompt(role){
    const iQuestions = [{
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github'
    },]
    const engineerQuestions = concat(questions, iQuestions);
    inquirer
    .prompt(engineerQuestions).then((data)=>{
        
    })
}
function managerPrompt(role){
    const iQuestions = [{
        type: 'input',
        message: 'What is your Office Number?',
        name: 'officeNumber'
    },]
    const managerQuestions = concat(questions, iQuestions);
    inquirer
    .prompt().then((data)=>{
        
    })
}
