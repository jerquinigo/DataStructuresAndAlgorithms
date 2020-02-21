const balancingBrackets = (str) => {
      let stack = []
      let dict = {
        "(":")",
        "{":"}",
        "[":"]"
      }
      for(let i = 0; i < str.length;i++){
        if(dict[str[i]]){
          stack.push(dict[str[i]])
        }
        else{
          if(stack[stack.length - 1] === str[i]){
            stack.pop()
          }
          else{
            return false
          }
        }
      }
      console.log(stack)
      return stack.length ? false: true
}


console.log(balancingBrackets("(){"))
