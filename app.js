const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager");
const managerPrompt= require('./lib/build_team');

managerPrompt();

//manager prompt//
// function promptManager() {
//     return inquirer.prompt([
//         {
//         type: "input",
//         name: "name",
//         message: "What is your name"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is your id?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "what is your email"
//     }

//    ])
   
// };

// async function init () { 
//     const choiceData = await promptManager();
//     const { choices } = choiceData;
// //   console.log(choiceData.status);
//     if(choiceData.status === "engineer"){
//        console.log("successsss!");
// }
// }
// init();