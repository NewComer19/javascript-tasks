var Employee = require("C:/Users/galey/Desktop/SoftServe_HW/OOP/Employee.js");

class Developer extends Employee {
  constructor(firstName, secondName, salary, experience) {
    super(firstName, secondName, salary, experience);
  }

  get salary() {
    let experience = super.experience;
    let salary = super.salary;
    if(experience > 2 && experience < 5) {
      return salary + 200;
    }

    else if (experience > 5) {
      return salary*1.2 + 500;
    }

    return salary;
  }
}


module.exports = Developer;
