// Given a unsorted array [3,6,13,10,1,2,15,11] , find a specific element "13"

function quickSort(arr){
    if(arr.length <=1) return arr;
    let pivot = arr[Math.floor(arr.length/2)];
    let left = arr.filter(a => a < pivot);
    let right = arr.filter(a => a> pivot);
    let mid = arr.filter(a => a === pivot);
    return [...quickSort(left), ...mid, ...quickSort(right)]
}

function bSearch(sortedArr, target){
    if (sortedArr.length <= 1) return arr;
    let left = 0;
    let right = sortedArr.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left+right) /2);
        if(sortedArr[mid] === target) return mid;
        else if(sortedArr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

function creatElementMap(arr){
   let m = new Map(); 
   arr.forEach((a, index) =>{
     !m.has(a)? m.set(a, index) : null; 
   })
   return m;
}

function search(arr, target){
    let map = creatElementMap(arr);
    let sortedArr = quickSort(arr);
    return(map.get(bSearch(sortedArr, target)))
}

console.log(search([3,6,13,10,1,2,15,11], 13))