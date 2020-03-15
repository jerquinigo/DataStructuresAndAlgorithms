
// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true 
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false



function isPowerOfTwo(num){
    if(num < 1){
      return false
    }
    if(num === 1){
      return true
    }
    if(num % 2 === 1){
      return false
    }
    return isPowerOfTwo(num/2)
  }
  
  isPowerOfTwo(16)

  //https://leetcode.com/problems/power-of-two/