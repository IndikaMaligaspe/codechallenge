// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

function maxSumSubArray(arr: number[], k: number) :number {
   let maxSum: number = 0;
   let windowSum: number = 0;

   for(let i = 0; i< k; i++){
      windowSum += arr[i];
   }
   maxSum = windowSum;

   for(let i = k; i< arr.length; i++){
      windowSum += arr[i] - arr[i - k]
      maxSum = Math.max(maxSum, windowSum);
   }
   return maxSum;
}

console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3));