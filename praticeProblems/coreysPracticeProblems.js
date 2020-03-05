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