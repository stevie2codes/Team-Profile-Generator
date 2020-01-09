let Employee = require("./employee");

class Engineer extends Employee{
    constructor(name,id,email,gitHub){
        super(name, id, email);
        this.gitHub = gitHub;       
    }

    getRole(){
        return "engineer";
    }

    getGitHub(){
        return this.gitHub;
    }
}
    // let newGuy = new Engineer("stevo", 22, "work@work.com", "stevie2codes");

    // console.log(newGuy.getRole());

    module.exports = Engineer;