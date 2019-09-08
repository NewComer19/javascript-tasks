var Employee = require("C:/Users/galey/Desktop/SoftServe_HW/OOP/Employee.js");

class Manager extends Employee {
  constructor(firstName, secondName, salary, experience, subordinates) {
    super(firstName, secondName, salary, experience);
    this._subordinates = subordinates;
  }

  get salary() {
    let experience = super.experience;
    let salary = super.salary;
    let numberOfSubordinates = this._subordinates.length

    if(experience > 2 && experience < 5) {
        salary += 200;
    } else if (experience > 5) {
      salary = salary*1.2 + 500;
    }

    let numberOfDevs = countNumberOfDevelopers(this._subordinates)
    if(numberOfSubordinates > 5 && numberOfSubordinates < 10) {
      salary += 200;
    } else if (numberOfSubordinates > 10) {
      salary += 100;
    }

    if(numberOfDevs > (numberOfSubordinates / 2)) {
      salary = salary * 1.1;
    }
    return salary;
  }
}

  function countNumberOfDevelopers(subordinates) {
    let numberOfDevs = 0;
    subordinates.forEach(val => {
      if(val.constructor.name == "Developer") {
        numberOfDevs++;
      }
    });
    return numberOfDevs;
  }


module.exports = Manager;
