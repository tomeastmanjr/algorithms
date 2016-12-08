// Write a function iBS that behaves like the following:
//
// var arr = [-90,-19,0,2,12,29,33,190,320];
// iBS(arr, 5)              => false
// iBS(arr, 12)             => 4
// iBS(arr, 0)              => 2
// iBS(arr, 190)            => 7
// iBS takes in an array and a value to search for. If the value is found in the array then iBS will return the index where the found value is. If the value is not found in the array then iBS returns false. Make sure your solution is iterative.

function iBS(arr, key){
  var left = 0;
  var right = arr.length-1;
  while(left<=right){
    var middle = Math.floor((left+right)/2);
    if(key<arr[middle]){
      right = middle-1
    }else if(key>arr[middle]){
      left = middle+1
    }else if(key == arr[middle]){
      return middle;
    };
  };
  return "false"
};

var arr = [-90,-19,0,2,12,29,33,190,320];
console.log(`This is iBS(arr, 5) ${iBS(arr, 5)}`)
console.log(`This is iBS(arr, 12) ${iBS(arr,12)}`)
console.log(`This is iBS(arr, 0) ${iBS(arr,0)}`)
console.log(`This is iBS(arr, 190) ${iBS(arr,190)}`)
