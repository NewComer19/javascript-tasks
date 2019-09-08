class Employee {
  constructor(firstName, secondName, salary, experience) {
    this._firstName = firstName;
    this._secondName = secondName;
    this._salary = salary;
    this._experience = experience;
  }

  get experience() {
    return this._experience;
  }

  get salary() {
    return this._salary;
  }

  get firstName() {
    return this._firstName;
  }

  get secondName() {
    return this._secondName;
  }
}

module.exports = Employee;
