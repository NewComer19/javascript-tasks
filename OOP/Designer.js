var Employee = require("C:/Users/galey/Desktop/SoftServe_HW/OOP/Employee.js");

class Designer extends Employee {
  constructor(firstName, secondName, salary, experience, coefficient) {
    super(firstName, secondName, salary, experience);
    this._coefficient = coefficient;
  }

  get salary() {
    let experience = super.experience;
    let salary = super.salary;
    if(experience > 2 && experience < 5) {
      return salary * this._coefficient + 200;
    }

    else if (experience > 5) {
      return salary * 1.2 * this._coefficient  + 500;
    }

    return salary * this._coefficient;
  }
}


module.exports = Designer;
