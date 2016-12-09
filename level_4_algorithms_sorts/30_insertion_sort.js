function insertionSort(arr){
  for(var i = 1; i<arr.length; i++){
    var index = i;
    while(index>=0){
      if(arr[index]<arr[index-1]){
        var temp = arr[index-1];
        arr[index-1] = arr[index];
        arr[index] = temp;
      };
      index -=1
    }
  };
  return arr;
};

console.log(`This is the result of insertionSort([3,2,9,6,5]) ${insertionSort([3,2,9,6,5])}`)
console.log(`This is the result of insertionSort([3,2,9,6,5,12,18,1,0,55,7]) ${insertionSort([3,2,9,6,5,12,18,1,0,55,7])}`)
