// Write a function rBS that behaves like the following:
//
// var arr = [-90,-19,0,2,12,29,33,190,320];
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7
// rBS takes in an array and a value to search for. If the value is found within the array then rBS will return the index where the found value is. If the value is not found within the array then rBS returns false. Make sure your solution is recursive. Does your function need to have optional additional parameters? After that first initial call, successive recursive calls to itself might need these.

function BS(arr, key){
  var left = 0;
  var right = arr.length - 1;
  var midpoint = Math.floor((right+left)/2);
  if(arr[midpoint] == key){
    return midpoint;
  }else{
    return rBS(arr, key, left, right);
  }

  function rBS(arr, key, left, right){
    if(left>right){
      return -1;
    };
    midpoint = Math.floor((right+left)/2);
    if(arr[midpoint] == key){
      return midpoint;
    }else if(arr[midpoint]>key){
      return rBS(arr, key, left, midpoint-1);
    }else{
      return rBS(arr, key, midpoint+1, right)
    };
  };
};


var arr = [-90,-19,0,2,12,29,33,190,320];
console.log(`This is the result of BS(arr, 5) ${BS(arr,5)}`)
console.log(`This is the result of BS(arr, 12) ${BS(arr,12)}`)
console.log(`This is the result of BS(arr, 0) ${BS(arr,0)}`)
console.log(`This is the result of BS(arr, 190) ${BS(arr,190)}`)
