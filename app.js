const inquirer = require("inquirer");
const fs = require('fs');


function promptUser() {
    return inquirer.prompt([{
        type: "list",
        name: "status",
        choices: ["engineer", "intern", "manager"],
        message: "What Type of employee do you want?"
    }
   ])
   
};

async function init () { 
    const choiceData = await promptUser();
    const { choices } = choiceData;
//   console.log(choiceData.status);
    if(choiceData.status === "engineer"){
       console.log("successsss!");
}
}
init();