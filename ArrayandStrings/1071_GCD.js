// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"

// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"

// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"

// Output: ""

// Example 4:

// Input: str1 = "AAAAAB", str2 = "AAA"

// Output: ""

//solution

// Approach
// GCD (Greatest Common Divisor)

// GCD is a classic algorithm used to find the largest value that divides two numbers exactly.
// It is commonly implemented using the Euclidean Algorithm.

// In string-based problems, GCD is applied to string lengths to determine the largest repeating base pattern shared by both strings
// a = 12, b = 18
// GCD(a, b) = b%a
// 18 % 12 =  GCD(6, 12)
// 12 % 6  = 0 GCD(6, 0)
// GCD = 6

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
  }
  const gcdLength = gcd(str1.length, str2.length);
  return str1.slice(0, gcdLength);
};
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("AAAAAB", "AAA"));
