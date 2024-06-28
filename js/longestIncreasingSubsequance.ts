// Given an array of integers [10, 9, 2, 5, 3, 7, 101, 18], 
// find the length of the longest increasing subsequence in an array.
// Answer should be 4

function lengthOfLIS(nums:number[]): number{
    if(nums.length == 0) return 0;
    let dp:number[] = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++){
        for (let j = 0; j < i; j++){
            if(nums[i] > nums [j]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return (Math.max(...dp))
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));