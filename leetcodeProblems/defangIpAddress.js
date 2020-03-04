// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


// For this solution i am using splice to change the item in the array with square bracket if it locates it.
const defangIp = (str) => {
    let strArr = str.split("")
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] === "."){
        strArr.splice(i,1,"[.]")
      }
    }
  str = strArr.join("")
  return str
  }
  
  defangIp("1.1.1.1")



  //the recursive solution
  const defangIp = (str) => {
    let newStr = ""
    if(str.length === 0) return newStr
    
    if(str[0] === "."){
      newStr += "[.]"
    }
    else{
      newStr += str[0]
    }
    
    return newStr + defangIp(str.slice(1))
  
  }
  
  defangIp("1.1.1.1")
  
  //1[.]1[.]1[.]1
  

  //https://leetcode.com/problems/defanging-an-ip-address/
  
  