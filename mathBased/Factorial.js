// Problem:
// Write a function that computes the factorial of a given non-negative integer n.

// The factorial of a number n is the product of all positive integers less than or equal to n.

// It is denoted as n! and defined as:

// 0! = 1

// n! = n × (n-1) × (n-2) × ... × 1 for n > 0

// Examples:

// Input: n = 5 → Output: 120 (because 5 × 4 × 3 × 2 × 1 = 120)

// Input: n = 0 → Output: 1

// Input: n = 1 → Output: 1

// Constraints:

// 0 <= n <= 20 (to avoid integer overflow in JavaScript).

// Solve the problem using recursion and also using an iterative approach.

const factorial = (n) =>{
    if( n === 0 || n===1) return 1; //base case
    return n*factorial(n-1);
}

console.log(factorial(5));