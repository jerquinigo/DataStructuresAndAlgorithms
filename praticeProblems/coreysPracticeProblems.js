// Write a function equalTo that takes in two inputs and checks whether the two inputs are identical.

// const equalTo = (arg1, arg2) => {
//   if(arg1 === arg2){
//     return true
//   }
//   else{
//     return false
//   }
// }

// equalTo('two', 'two')

// Write a function or that takes in two inputs and returns a boolean of whether at least one has a truthy value.

// const booleanOr = (arg1, arg2) => {
//   if(!!arg1 || arg2){
//     return true
//   }
//   else{
//     return false
//   }
// }

// booleanOr(0," ")

//get all even numbers in array

// const getEvens = (arr) => {
//   return arr.filter(el => {
//     return el % 2 === 0
//   })
// }

// getEvens([1,2,3,4,5,6,7,8,9])

// switchCase - takes in a string and returns a string with every other letter alternating between capital and lowercase.

// function switchCase(str){
//   let output = ""
//   for(let i = 0; i < str.length; i++){
//     if(i % 2 === 0){
//       output += str[i].toUpperCase()
//     }
//     else{
//       output += str[i].toLowerCase()
//     }
//   }
//   return output
// }

// switchCase("hello")


// counter - a function that returns an object that has a count of each characters occurrence. Don't worry about punctuation, ignore spaces, but it should be case insensitive.

// function myCounter(str){
//  let counter = {}
//   let strArr = str.split("")

//   strArr.forEach(el => {
//     if(counter[el]){
//       counter[el] = counter[el] + 1
//     }
//     else{
//       counter[el] = 1
//     }
//   })
//   console.log(counter)
// }




// myCounter("hhello")


// countZeroes - a function that takes in an array of numbers and returns the amount of zeroes that occur in it.

// function countZeroes(arr){
//   return arr.reduce((acc, curEl) => {
//     if(curEl ===0){
//       acc = acc + 1
//     }
//     return acc
//   }, 0)

// }

// countZeroes([1,2,0,4,5,0,6,7,8,0,9])

// isPalindrome - a function that takes in a string and returns whether that string is a palindrome.

// const isPali = (str) => {
//   let reversedStr = ""
//   for(let i = str.length - 1; i >= 0; i--){
//     reversedStr += str[i]
//   }
  
//   let finalCheck = ""
//   for(let i = 0; i < str.length; i++){
//     if(str[i] === reversedStr[i]){
//       finalCheck += str[i]
//     }
//   }
  
//   if(finalCheck.length === str.length){
//     return true
//   }
//   else{
//     return false
//   }
// }

// isPali("racecar")

// includes - a function that takes in an array and a target. Returns a boolean whether or not the target is included in the function.

function isIncluded(arr, target){

    for(let i = 0; i < arr.length; i++){
      if(arr[i] === target){
        return true
      }
    }
    return false
  }
  
  isIncluded([1,2,3,4,5,6,7,8,9,10], 7)

  // getMiddle - function that returns the middle character of a string. If the length is even it should return the middle two characters.

// function getMiddle(str){
//   let middle = Math.floor(str.length / 2)
//   if(str.length % 2 === 0){
//     return str[middle] 
//   }
//   else{
//      return str[middle] + str[middle + 1]
//   }
// }

// getMiddle("hello")


// palindromeSubstrings - a function that takes in a string and returns an array of all the palindrome substrings.

// function palindromeSubstrings(str){
//    let output = [];
//   for(let i = 0; i < str.length; i++) {
//     for(let j = 0; j <= str.length; j++) {
//       let temp = str.slice(i, j)
//       if(paliChecker(temp)) {
//         output.push(temp)
//       }
//     }
//   }
//   return output
// }

// function paliChecker(str){
//     if(str.length < 2) return false
//     return str === str.split("").reverse().join("")
// }
// palindromeSubstrings("hello there taco cat or racecar driver")

// disemvowel - a function that removes all the vowels from a string.

function disemvowel(str){
    let vowels = new Set(["a","e","i","o", "u"])
    str = str.split("")
    for(let i = 0; i < str.length; i++){
      if(vowels.has(str[i])){
        str.splice(i, 1)
      }
    }
    return str.join("")
  }
  
  disemvowel("happy go lucky")

  // targetIndices - a function that takes in array of numbers and a target. Return the indices as an array of the pair of elements that add up to that target.

// function targetIndices(arr,target){

//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j< arr.length; j++){
//       if(arr[i] + arr[j] === target){
//         return [i,j]
//       }
//     }
//   }
// }

// targetIndices([1,2,4,5,7], 9)


// rangeWithStep - a function that takes three number variables: min, max and step. The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step. If no step value is provided, the increment will be 1

// function rangeWithStep(min,max,step=1){
//   let output = []
//   for(let i = min; i <= max; i = i + step){
//     output.push(i)
//   }
//   return output
// }

// rangeWithStep(4,10,3)


// doubler - a function that doubles each element in an array.

// function doubler(arr){
//   let output = []
//   for(let i = 0; i < arr.length; i++){
//     output.push(arr[i] * 2)
//   }
//   return output
// }

// doubler([1,2,3,4,5,6,7,8,9])

// function findLargest(arr){
//   currentLargest = arr[0]
//   for(let i = 0; i < arr.length; i++){
//     if(currentLargest < arr[i]){
//       currentLargest = arr[i]
//     }
//   }
//   return currentLargest
// }

// findLargest([1,3,5,4,9,2])

// secondLargest - a function that returns the second largest value in an array.

function secondLargest(arr){
  let firstLargest = Number.NEGATIVE_INFINITY
  let secondLargest = Number.NEGATIVE_INFINITY

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > firstLargest){
      secondLargest = firstLargest
      firstLargest = arr[i]
    }
    else if(arr[i] > secondLargest){
      secondLargest = arr[i]
    }
  }
  return secondLargest
}

secondLargest([1,3,5,4,9,2])