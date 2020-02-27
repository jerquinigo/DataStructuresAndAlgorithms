// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

//https://leetcode.com/problems/unique-number-of-occurrences/


const uniqueOccurance = (arr) => {
    let dict= {}
    for(let i = 0; i < arr.length; i++){
      if(!dict[arr[i]]){
        dict[arr[i]] = 1
      }
      else{
        dict[arr[i]] =  dict[arr[i]] + 1
      }
    }
  
    let uniqueValues = new Set(Object.values(dict))
    let initialValues = Object.values(dict)
    //console.log(initialValues, "init")
    //console.log(uniqueValues, "unique")
  
    if(uniqueValues.size === initialValues.length){
      return true
    }
  
    return false
  
  }
  
  uniqueOccurance([1,2,1,3,3,3])
  //return true



