function quickSort(arr){
  var pivot;
  var left = [];
  var right = [];

};

console.log(`This is the result of quickSort([4,3,2,5,6,1]) ${quickSort([4,3,2,5,6,1])}`)
console.log(`This is the result of quickSort([2,3,5,6,9,0,1,3,7,12,18,55]) ${quickSort([2,3,5,6,9,0,1,3,7,12,18,55])}`)

// *******answer i found online*************



// var items = [2,3,5,6,9,0,1,3,7,12,18,55]
//
// function swap(items, firstIndex, secondIndex){
//     var temp = items[firstIndex];
//     items[firstIndex] = items[secondIndex];
//     items[secondIndex] = temp;
// }
//
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)],
//         i       = left,
//         j       = right;
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }
//
// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right);
//         if (left < index - 1) {
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) {
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
//
//
// // first call
// var result = quickSort(items, 0, items.length - 1);
// console.log(result)
