// Let's say we are given an array of unsorted numbers. We want to create a function called linearSearch that will take in two arguments: a number and an array. The function will return the position where the number is located in the array if found if it is not found it will return false. Go ahead and implement this algorithm.

function linearSearch(key, arr){
  for(var i = 0; i<arr.length; i++){
    if(arr[i] == key){
      console.log(i);
      return i
    };
  };
  console.log("false");
  return -1
};

var arr = [24, 8, 23, 3];
linearSearch(8, arr);   // => 1
linearSearch(-99, arr); // => false
