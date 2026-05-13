const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const divide = (a, b) => {

    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
};

console.log(add(5, 6));
console.log(sub(5, 6));
console.log(mul(5, 6));
console.log(divide(5, 6));