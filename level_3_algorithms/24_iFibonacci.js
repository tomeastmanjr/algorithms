// Write a function iFibonacci that behaves like the following:
//
// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8
// Make sure your solution is iterative.

function iFibonacci(num){
  var num1 = 0;
  var num2 = 1;
  var total = 0;
  if(num == 0){return 0};
  if(num == 1){return 1};
  for(var i = 2; i<=num; i++){
    total = num1 + num2;
    num1 = num2;
    num2 = total;
  };
  return total;
};

console.log(`This is the result of iFibonacci(6) ${iFibonacci(6)}`)
