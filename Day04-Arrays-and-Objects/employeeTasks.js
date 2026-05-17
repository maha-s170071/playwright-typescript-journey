const employees =require("./Employeedata");
// Task 1 — Print Employee Names

employees.forEach((item) => {

    console.log(item.name);
});


// Task 2 — Get Active Employees

const activeEmployees = employees
    .filter(item => item.isActive)
    .map(item => item.name);

console.log(activeEmployees);


// Task 3 — Increase Salary by 10%

const newSalary = employees.map(item => ({

    ...item,

    sal: item.sal * 1.10
}));

console.log(newSalary);


// Task 4 — Find Employee by ID

const findEmployee = employees.find(
    item => item.id === 2
);

console.log(findEmployee);


// Task 5 — Calculate Total Salary

const totalSalary = employees.reduce(
    (acc, current) => acc + current.sal,
    0
);

console.log(totalSalary);


// Task 6 — Sort Employees by Salary

const sortEmployees = employees.sort(
    (a, b) => a.sal - b.sal
);

console.log(sortEmployees);
