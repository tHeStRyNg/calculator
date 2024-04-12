// Import the readline-sync module
const readline = require('readline-sync');

// Function to perform addition
function add(x, y) {
    return x + y;
}

// Function to perform subtraction
function subtract(x, y) {
    return x - y;
}

// Function to perform multiplication
function multiply(x, y) {
    return x * y;
}

// Function to perform division
function divide(x, y) {
    if (y === 0) {
        return "Error: Cannot divide by zero";
    }
    return x / y;
}

// Function to get user input for two numbers
function getUserInput() {
    const num1 = parseFloat(readline.question('Enter the first number: '));
    const num2 = parseFloat(readline.question('Enter the second number: '));
    return { num1, num2 };
}

// Main function to perform calculations
function main() {
    console.log('Simple Calculator');
    console.log('-----------------');

    const { num1, num2 } = getUserInput();

    console.log('Select operation:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    const choice = parseInt(readline.question('Enter your choice: '));

    let result;
    switch (choice) {
        case 1:
            result = add(num1, num2);
            break;
        case 2:
            result = subtract(num1, num2);
            break;
        case 3:
            result = multiply(num1, num2);
            break;
        case 4:
            result = divide(num1, num2);
            break;
        default:
            console.log('Invalid choice');
            return;
    }

    console.log('Result:', result);
}

// Call the main function
main();
