const students = [
    { name: "RAM", marks: 56 },
    { name: "TEJ", marks: 34 },
    { name: "JAN", marks: 79 },
    { name: "MAHI", marks: 95 }
];


// Calculate Total Marks
const totalMarks = (students) => {

    let total = 0;

    for (let i = 0; i < students.length; i++) {

        total += students[i].marks;
    }

    return total;
};


// Find Topper Student
const topperInStudents = (students) => {

    let topper = students[0];

    for (let i = 1; i < students.length; i++) {

        if (students[i].marks > topper.marks) {

            topper = students[i];
        }
    }

    return topper.name;
};


// Find Failed Students
const failedStudents = (students) => {

    let failedStudentNames = [];

    for (let i = 0; i < students.length; i++) {

        if (students[i].marks <= 35) {

            failedStudentNames.push(students[i].name);
        }
    }

    return failedStudentNames;
};


// Calculate Average Marks
const averageMarks = totalMarks(students) / students.length;


// Final Outputs
console.log(`Total Marks: ${totalMarks(students)}`);

console.log(`Average Marks: ${averageMarks}`);

console.log(`Topper Student: ${topperInStudents(students)}`);

console.log(`Failed Students: ${failedStudents(students)}`);