// Includes packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "editor",
        message: "Enter a description of your project:",
        name: "description"
    },
    {
        type: "editor",
        message: "Enter Table of Contents:",
        name: "Table of Contents"
    },
    {
        type: "editor",
        message: "Enter installation instructions:",
        name: "installation"
    },
    {
        type: "editor",
        message: "Enter usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribute",
    },
    {
        type: "input",
        message: "Enter test instructions:",
        name: "test"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        name: "license",
        choices:["MIT", "IBM","Apache", "No License"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err=> {
        if (err) throw err
        console.log("Success!")
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./output/README.md", data);
    });
}

// Function call to initialize app
init();
