function fizzy(num) {
  let response = " "
  
  if (num % 3 ===0 && num % 5 === 0){
    response ="FizzBuzz"
    
    
  }else if(num%5===0 && num%3 !==0){
    response = 'Buzz'

  }else if (num % 3===0 && num % 5!==0){
    response = "Fizz"
  } else if (num % 3 !==0 && num % 5!==0){
    response = num
  }
  
  
  
  
  return response
}

module.exports = {
  fizzy,
}