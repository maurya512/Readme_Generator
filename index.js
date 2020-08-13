// import modules 
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// A function that prompts the user to ask the questions 
function askQuestions() {
    // array of objects
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the proejct?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Please enter a description of the project.",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the installation steps for this project?",
            name: "projectInstructions"
        },
        {
            type: "input",
            message: "What will this project be used for?",
            name: "projectUsage"
        },
        {
            type: "input",
            message: "Who gets credit for the initial deployment of this project?",
            name: "projectDeployer"
        },
        {
            type: "list",
            message: "Enter the license for this project",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3",
            ],
            name: "projectLicense"
        },
        {
            type: "input",
            message: "Enter your github username",
            name: "userName"
        },
        {
            type: "input",
            message: "Enter your email id.",
            name: "userEmail"
        },
    ])
}
// just a console log to check no issues pertain thus far
console.log("test ran successfully");