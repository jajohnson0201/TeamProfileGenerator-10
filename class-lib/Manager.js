const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name,id,email, role, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role="Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;