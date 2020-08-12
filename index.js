var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
{
    type: "input",
    message: "Enter the title of your project.",
    name: "projectTitle"
},
{
    type: "input",
    message: "Provide project description",
    name: "projectDescription"
},
{
    type: "input",
    message: "Please explain the step-by-step installation process of this project.",
    name: "installationProcess"
},
{
    type: "input",
    message: "Provide user instructions to use the project.",
    name: "userInstruction"
},
{
    type: "input",
    message: "Provide License name or badge.",
    name: "projectLicense"
},
{
    type: "input",
    message: "Please provide with a contributers' names.",
    name: "projectContributers"
},
{
    type: "input",
    message: "Please provide project tests.",
    name: "projectTests"
},
{
    type: "input",
    message: "Enter your username.",
    name: "userName"
},
{
    type: "input",
    message: "Please provide your github repo link.",
    name: "projectRepo"
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
