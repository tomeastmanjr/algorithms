function bubbleSort(arr){
  var length = arr.length;
  for(var i = 0; i<arr.length; i++){
    for(var j = 0; j<length; j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      };
    };
    length -= 1;
  };
  return arr
};

console.log(`This is the result of bubbleSort([3,2,9,6,5]) ${bubbleSort([3,2,9,6,5])}`)
console.log(`This is the result of bubbleSort([3,2,9,6,5]) ${bubbleSort([3,2,9,6,5,12,18,1,0,55,7])}`)
