const Manager = require("./Manager");
const inquirer = require("inquirer");

//building a team using manager prompt//
function buildTeam(){
            return inquirer.prompt([
                {
                type: "input",
                name: "name",
                message: "What is your Managers Name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your Manager id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?"
            },
            {
                type: "list",
                name: "member",
                message: "Which type of team member would you like to add?",
                choices: ["engineer", "Intern", "I dont want to add any more team members"]
            }
        
           ]);
}

module.exports = buildTeam;