// Given a sorted array [1, 2, 3, 4, 5, 6] , find a specific element "4"

function binarySearch(arr:number[], target:number){
    if (arr.length <= 1) return arr;
    let left = 0;
    let right = arr.length -1;
    while(left <= right) {
        let mid = Math.floor((left+right) / 2);
        if(arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid -1
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));