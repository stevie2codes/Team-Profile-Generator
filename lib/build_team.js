const Manager = require("./Manager");
const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require('./Engineer');
const html = require("./Generate_HTML");
const fs = require('fs');


//building a team using manager prompt//
 function managerPrompt() {
    console.log("Please Build Your Team!");
         return  inquirer.prompt([
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
            message: "What is your managers email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your managers office number?"
        }
    ])  //Instantiating a new Manager object
    .then((data) => {
        let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        // console.log(newManager);
        chooseTeam();
    })
    
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
    .then((data) =>{
        if(data.member === "engineer"){
            buildEngineer();
        }
        else if(data.member === "Intern"){
            buildIntern();
        }
        else{
            console.log("building File");
          const outputPage = html.generateHTML(data);
          fs.writeFile("output.html", outputPage, (err) => {
              if(err) throw err;
          });
        }
    })   
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
    .then((data) => {
        let newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        // console.log(newIntern);
        chooseTeam();
    })
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
    .then((data) => {
        let newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
        // console.log(newEngineer);
        chooseTeam();
    })
}

module.exports = managerPrompt;