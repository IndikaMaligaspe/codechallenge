// Given an array of coin denominations and a total amount, 
// find the minimum number of coins needed to make the amount.
// Array - [1, 2, 5], total - 11, return - 3 (2 * 5 and 1)


function coinChange(coins:number[], amount: number): number {
    let dp = Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;

    for (let coin of coins){
        for (let i = coin; i <= amount; i++){
            dp[i] = Math.min(dp[i], dp [i - coin] + 1);
        }
    }
    return dp[amount] === Number.MAX_VALUE? -1 : dp[amount];
}

console.log(coinChange([1,5,6,8], 11))
