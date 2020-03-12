// Given an array nums of integers, return how many of them contain an even number of digits.
 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

//iterative solution
function findEvenNums(arr){
 let count = 0
  for(let i = 0; i < arr.length; i++){
    let tempEl = arr[i].toString()
    if(tempEl.length % 2 === 0){
      count = count + 1
    }
  }
  return count
}
findEvenNums([12,345,2,6,7896])

//recursive solution
function findEvenNums(arr){
  
    if(arr.length === 0) return 0 
      let count = 0
      let currEl = arr[0].toString()
      if(currEl.length % 2 === 0){
        count = count + 1
      }
     
    return count + findEvenNums(arr.slice(1))
  
  }
  
  findEvenNums([12,345,2,6,7896])


  //https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

