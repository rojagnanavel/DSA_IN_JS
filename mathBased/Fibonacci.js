// Problem: Compute the n-th Fibonacci Number

// Write a function that computes the n-th number in the Fibonacci sequence.

// The Fibonacci sequence is defined as:

// F(0) = 0

// F(1) = 1

// For n > 1: F(n) = F(n-1) + F(n-2)

// The sequence looks like:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, …

// Examples:

// Input: n = 0 → Output: 0

// Input: n = 1 → Output: 1

// Input: n = 5 → Output: 5 (sequence: 0, 1, 1, 2, 3, 5)

// Input: n = 7 → Output: 13

// Constraints:

// 0 <= n <= 30 (to avoid performance issues in recursion).

// Solve the problem using both recursion and iteration.


const printFibonacciSequence=(n)=>{
     if (n <= 0) return [];

  let sequence = [0];

  if (n === 1) return sequence;

  sequence.push(1); // add second term

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log(printFibonacciSequence(2));