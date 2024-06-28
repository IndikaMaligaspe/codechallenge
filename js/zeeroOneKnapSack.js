// Given items and values of n items, 
// put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
function knapsack(items, values, W){
 let n = items.length;
 let twoDArr = Array.from({length: n + 1}, () => Array(W + 1).fill(0));
 for(let i = 1; i <= n; i++){
    for(let w = 1; w <= W; w++){
        if (items[i - 1] <= w) {
            twoDArr[i][w] = Math.max(twoDArr[i - 1][w], twoDArr[i - 1][w - items[i - 1]] + values[i - 1]);
        } else {
            twoDArr[i][w] = twoDArr[i - 1][w]
        }
    }
 }
 return twoDArr[n][W];
}

console.log(knapsack([2,3,4,5],[1,2,5,6],  8))