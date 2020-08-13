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
            message: "What is the name of the project?",
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
            message: "What tests have been conducted on this project?",
            name: "projectTest"
        },
        {
            type: "input",
            message: "Who can contribute to this project?",
            name: "projectContributors"
        },
        {
            type: "input",
            message: "What questions do you have for the user?",
            name: "questions"
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

// a function that creates a markdown file inside of js
function generateMarkdown(response) {
    return `
# ${response.projectTitle}

# Table Contents

- [Description](#Description)
- [Installation Instructions](#Instructions)
- [Project Usage](#Usage)
- [Project Original Contributor](#Deployer)
- [Project License](#License)
- [Project Test](#Project Test)
- [Project Contributors](#Project Contributors)
- [Project Questions](#Questions)
- [Original Creator's info](#Deployer's info)

## Description:
![License](https://img.shields.io/badge/License-${response.projectLicense}-blue.svg "License Badge")

    ${response.projectDescription}

## Installation Instructions:
    ${response.projectInstructions}

## Project Usage:
    ${response.projectUsage}

## Project Original Contributor:
    ${response.projectDeployer}

## Project Testing:
    ${response.projectTest}

## Project Contributors:
    ${response.projectContributors}

## Project Questions:
    If you have any questions please direct them at
    [User](https://github.com/${response.userName})

## Project License:
    For more info about the license click the link below:
- [License](https://opensource.org/licenses/${response.projectLicense})

## Original Creator's info:
- [Github Profile](https://github.com/${response.userName})
- [Email Address](${response.userEmail})
    `;
}

// function to intialize the program
async function init() {
    try {
        const response = await askQuestions();
        const readMe = generateMarkdown(response);
        await writeFileAsync("README.md", readMe);
        console.log("Successfully created a ReadMe.md file");
    }
    catch (err) {
        console.log(err);
    }
}

// calling the initializing function
init();