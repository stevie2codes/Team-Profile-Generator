let Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }

    getOffice(){
        return this.officeNumber;
    }

}

// let manager = new Manager("stevo", 33, "work@work.com", 6159438252);
// console.log(manager);

module.exports = Manager;