// Write a function iFibonacci that behaves like the following:
//
// rFibonacci(0) = 0           => 0
// rFibonacci(1) = 1           => 1
// rFibonacci(2) = 1           => 1
// rFibonacci(3) = 1 + 1       => 2
// rFibonacci(4) = 1 + 2       => 3
// rFibonacci(5) = 2 + 3       => 5
// rFibonacci(6) = 3 + 5       => 8
// Or I guess it can be written this way too...
//
// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8
// Make sure your solution is recursive.

function rFibonacci(num){
  if(num == 0){return 0};
  if(num == 1){
    return 1;
  }else{
    return rFibonacci(num-2) + rFibonacci(num-1);
  }
};

console.log(`This is the result of rFibonacci(6) ${rFibonacci(6)}`)
