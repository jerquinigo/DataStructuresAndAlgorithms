// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// iterative approach and not sorted
const smallerNumberThanCurrent = (arr) => {
    let currIdx = 0
    let count = 0
    let newArr = []
    while(currIdx < arr.length){
      for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[currIdx]){
          if(arr[i] < arr[currIdx]){
            count = count + 1
          }
        }
      }
      newArr.push(count)
      count = 0
      currIdx++
     }
    return newArr
  }
  
  
  smallerNumberThanCurrent([8,1,2,2,3])



//! this answer is not correct. There are a few problems with this solution even though it is correctly doing the recursive call. The variables are resetting every time, even if i put a constant variable. This was hardcoded but the logic of recursion is there with a helper function. 



// Recursive call
  const smallerNumberThanCurrent = (arr) => {

    let count = 0
    let newArr = []
    if(arr.length === 0) return newArr
    count = loopingValues([8,1,2,2,3], count, arr[0])
    newArr.push(count)
    count = 0
    return newArr + smallerNumberThanCurrent(arr.slice(1))
  
    
  }
  
  
  smallerNumberThanCurrent([8,1,2,2,3])
  
  // helper function for smallerNumberThanCurrent
  function loopingValues(arr, count, currentValue){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== currentValue){
        if(arr[i] < currentValue){
         count = count + 1
        }
      }
    }
    return count
  }
  

  // end of problem



  //https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/