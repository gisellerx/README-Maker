// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create an array of questions for user input
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
        type: "editor",
        message: "Enter contribution guidelines:",
        name: "How to Contribute:",
    },
    {
        type: "editor",
        message: "Enter test instructions:",
        name: "test"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        name: "license",
        choices: [
            "Apache License 2.0",
            "Boost Software License 1.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Mozilla Public License 2.0",
            "No license"
        ] 
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
