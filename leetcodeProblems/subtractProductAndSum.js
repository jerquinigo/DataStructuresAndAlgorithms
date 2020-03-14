// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 



function subtractProductAndSum(num){
    return recursiveSumProd(num)
  }
  
  subtractProductAndSum(234)
  
  function recursiveSumProd(num, product = 1, sum = 0){
    if(num === 0) return product - sum
    let currentNum = num % 10 
    num = Math.floor(num / 10)
    return recursiveSumProd(num, product * currentNum, sum + currentNum)
  
  }
  



  //https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
  