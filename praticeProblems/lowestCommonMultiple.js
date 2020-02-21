function lowestCommonMultiple(num1,num2){
    return (num1 * num2) / greatestCommonDenominator(num1,num2)
  }
  
  function greatestCommonDenominator(num1,num2){
    let temp = 0
    while(num2 !== 0){
      temp = num2
      num2 = num1 % num2
      num1 = temp
    }
  
    return num1
  }
  
  //greatestCommonDenominator(10,45)
  lowestCommonMultiple(10,45)