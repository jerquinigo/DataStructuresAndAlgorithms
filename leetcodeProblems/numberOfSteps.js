// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.


// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.

//iterative approach
var numberOfSteps  = function(num) {
    let count = 0
while(num !== 0){
  if(num % 2 === 0){
    num = Math.floor(num / 2)
    count = count + 1
  }
  else{
    num = Math.floor(num - 1)
    count = count + 1
  }
}
return count
};

//recursive approach
const numberOfSteps = (num) => {
    let count = 0
    if(num === 0) return count
    if(num % 2 === 0){
      num = Math.floor(num / 2)
      count = count + 1
    }
    else{
      num = Math.floor(num - 1)
      count = count + 1
    }
    return count + numberOfSteps(num)
  }
  
  
  numberOfSteps(14)

//   https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

