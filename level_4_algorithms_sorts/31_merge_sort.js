function mergeSort(arr1,arr2){
  var newArr = []
  var x = 0;
  var y = 0;
  newArr.length = arr1.length + arr2.length
  for(var i = 0; i<newArr.length; i++){
    var arr1Min = arr1[x];
    var arr2Min = arr2[y];
    var numToAdd;
    if(arr1Min <= arr2Min || arr2Min == undefined){
      numToAdd = arr1Min
      x +=1
    }else if(arr2Min<arr1Min || arr1Min == undefined){
      numToAdd = arr2Min
      y +=1
    };
    newArr[i] = numToAdd
  };
  return newArr;
};

console.log(`This is the result of mergeSort([2,3],[5,6,9]) ${mergeSort([2,3],[5,6,9])}`)
console.log(`This is the result of mergeSort([2,3,5,6,9],[0,1,3,7,12,18,55]) ${mergeSort([2,3,5,6,9],[0,1,3,7,12,18,55])}`)
