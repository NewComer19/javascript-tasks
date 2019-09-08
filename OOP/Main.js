/*
  Task:
  Create structure for department:
a) There are 3 types of employee: developer, designer and manager
b) Each employee has: first name, second name, salary, experiance (years) and manager
c) Each designer has effectivness coefficient(0-1)
d) Each manager has team of developers and designers.
e) Department should have list of managers(which have their own teams)
f) Department should be able to give salary (for each employee message: "@firstName@ @secondName@: got salary: @salaryValue@")
g) Each employee gets the salary, defined in field Salary. If experiance of employee is > 2 years, he gets bonus + 200$, if experiance is > 5 years, he gets salary*1.2 + bonus 500
h) Each designer gets the salary = salary*effCoeff
i) Each manager gets salary +
  ii) 200$ if his team has >5 members
  iii) 300$ if his team has >10 members
  iiii) salary*1.1 if more than half of team members are developers.
*/


var Developer = require("./OOP/Developer.js");
var Designer = require("./OOP/Designer.js");
var Manager = require("./OOP/Manager.js");

let department = [];
let managers = [];

let dev1 = new Developer("Vasya","Pumpkin", 500, 3);
let dev2 = new Developer("Vasya","Pumpkin", 500, 7);
let dsn1 = new Designer("Vasya", "Pupkin", 500, 5, Math.random());
let manager = new Manager("Vasya", "Pupkin", 500, 4, [dev1, dev2, dsn1]);

department.push(dev1);
department.push(dev2);
department.push(dsn1);
department.push(manager);

managers.push(manager);
giveSalary();

function giveSalary() {
  department.forEach(val => {
    console.log(val.firstName + " " + val.secondName + " " + "have earned "  + val.salary)
  })
}
