
function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i<=n; i++){
        if ((i % 3) == 0) {
          if ((i % 5) == 0) {
              console.log("FizzBuzz")
          } else {console.log("Fizz")}
        } else if ((i % 5) == 0) {
            console.log("Buzz")
        } else { console.log(i)}
    }
}

// #1 Plus Minus
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

  function plusMinus(arr) {
    // Write your code here
    let positive = 0
    let negative = 0
    let zero = 0
    let length = arr.length
    for(let num of arr){
        if(num == 0) {
            zero++
        } else if(num > 0){
            positive++
        } else{
            negative++
        }
    }
    console.log((positive/length).toFixed(6))
    console.log((negative/length).toFixed(6))
    console.log((zero/length).toFixed(6))
  }

  // #2 Mini-Max Sum
  //Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

  function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b) => a-b)
    const sum = arr.reduce((accumulator, value) => accumulator + value, 0)
    const minSum = sum - arr[4]
    const maxSum = sum - arr[0]
    console.log(minSum, maxSum)
}