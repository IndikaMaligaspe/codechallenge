function insertionSort(arr:number[]){
    if(arr.length <= 1) return arr;
    for(let i = 0; i< arr.length; i++) {
        for(let j = i + 1; j <= arr.length; j++) {
            if ( arr[j] < arr[i] ) {
               let temp = arr[i];
               arr[i] = arr[j]
               arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(insertionSort([5,1,3,10,2,3,12,11]));
