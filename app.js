const inquirer = require("inquirer");
const fs = require('fs');
const html = require("./templates/main.html");

function promptUser() {
    return inquirer.prompt([{
        type: "list",
        name: "status",
        choices: ["engineer", "intern", "manager"],
        message: "What is your job title?"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    },
    {
        type: "input",
        name: "username",
        message: "what is your GitHub User Name?"
    }
    ])
}

promptUser();