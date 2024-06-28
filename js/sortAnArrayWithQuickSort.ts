function quickSort(arr:number[]){
    if(arr.length <=1) return arr;
    let pivot = arr[Math.floor(arr.length /2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right  = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)]
    
}

console.log(quickSort([3,6,13,10,1,2,15,11]));

