function selectionSort(arr){
  for(var i = 0; i<arr.length; i++){
    var min = arr[i];
    var location = i
    for(var j = i; j<arr.length; j++){
      if(arr[j]<min){
        min = arr[j];
        location = j
      };
    };
    var temp = arr[i];
    if(temp != min){
      arr[i] = min;
      arr[location] = temp;
    };
  };
  return arr;
};

console.log(`This is the result of selectionSort([3,2,9,6,5]) ${selectionSort([3,2,9,6,5])}`)
console.log(`This is the result of selectionSort([3,2,9,6,5,12,18,1,0,55,7]) ${selectionSort([3,2,9,6,5,12,18,1,0,55,7])}`)
