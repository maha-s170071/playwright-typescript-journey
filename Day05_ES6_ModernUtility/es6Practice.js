// Day 6 - ES6 Concepts Practice


// Task 1 — Arrow Function

const addTwoNumbers = (a, b) => a + b;

console.log(addTwoNumbers(40, 50));


// Task 2 — Reverse String

const reverseStr = (str) =>
    str.split("").reverse().join("");

console.log(reverseStr("hello"));


// Task 3 — Template Literals

const employeeName = "Maha";

const department = "QA";

console.log(
    `${employeeName} works in ${department}`
);


// Task 4 — Retry Utility Script

const retry = (testName, attempts) => {

    for(let i = 1; i <= attempts; i++){

        console.log(
            `Running ${testName} attempt ${i}`
        );
    }
};

retry("loginTest", 3);


// Task 5 — Object Destructuring

const employee = {

    name: "Maha",

    dep: "QA",

    sal: 50000
};

const employeeDetails = ({name, dep, sal}) => {

    return `${name} works in ${dep} and earns ${sal}`;
};

console.log(employeeDetails(employee));


// Task 6 — Spread Operator

const updatedEmployee = {

    ...employee,

    sal: 60000
};

console.log(updatedEmployee);


// Task 7 — Rest Operator

const totalSum = (...numbers) => {

    return numbers.reduce(
        (acc, current) => acc + current,
        0
    );
};

console.log(totalSum(10, 20, 30, 40));


// Task 8 — Default Parameters

const greetUser = (name = "Guest") => {

    console.log(`Hello ${name}`);
};

greetUser();

greetUser("Maha");


// Task 9 — Optional Chaining

const user = {

    profile: {

        city: "Bengaluru"
    }
};

console.log(user?.profile?.city);

console.log(user?.address?.city);