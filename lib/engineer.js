let Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;

    }


    getGithub() {
        return this.github;
    }
}
// let newGuy = new Engineer("stevo", 22, "work@work.com", "stevie2codes");

// console.log(newGuy.getRole());

module.exports = Engineer;