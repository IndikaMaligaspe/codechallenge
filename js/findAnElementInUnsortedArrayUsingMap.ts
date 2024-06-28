// Given a unsorted array [3,6,13,10,1,2,15,11] , find a specific element "13"

function creatElementMap(arr:number[]){
    let m = new Map(); 
    arr.forEach((a, index) =>{
      !m.has(a)? m.set(a, index) : null; 
    })
    return m;
 }
 
function search(arr:number[], target:number){
    let map = creatElementMap(arr);
    return map.get(target);
}


console.log(search([3,6,13,10,1,2,15,11,13], 13))