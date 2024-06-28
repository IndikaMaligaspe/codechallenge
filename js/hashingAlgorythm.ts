// Find two numbers in an integer array [3,6,13,10,1,2,15,11] that adds up to 9

function twoSum(arr:number[], target:number) {
    if(arr.length <=1 ) return arr;
    let m = new Map();
    for(let i = 0; i < arr.length; i++) {
        let comp = target - arr[i];
        if(m.has(comp)) 
            return ([m.get(comp), i])
        else
            m.set(arr[i], i);
    }
}

console.log(twoSum([6,13,10,1,2,3,15,11], 9));