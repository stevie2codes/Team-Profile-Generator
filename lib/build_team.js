const Manager = require("./Manager");
const inquirer = require("inquirer");

//building a team using manager prompt//
async function managerPrompt() {
    console.log("Please Build Your Team!");
    const result = await inquirer.prompt([
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
        }
    ]);
    return chooseTeam(result);
}



//prompt to choose a team member
const chooseTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "member",
            message: "Which type of team member would you like to add?",
            choices: ["engineer", "Intern", "I dont want to add any more team members"]
        }
    ])
}

//prompt to build an intern
const buildIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your Intern's Name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your Intern's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intern's E-mail?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What did your Intern go to School?"
        }
    ])
}


// Prompt to Build Engineer
const buildEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's Name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's E-mail?"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What did your engineers GitHub?"
        }
    ])
}

module.exports = managerPrompt;