function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  
}

function insertionSort(array){
 let newMin = 0;
 let sorted = [];
 while (array > 0){
   newMin = findMinAndRemove(array);
   sorted.push(newMin);
 }
 return sorted;
}
