var minSubArrayLen = function(target: number, nums: number[]): number {
    // Edge cases
    if (nums.length == 0) return 0
    if (nums[0] >= target) return 1;
    let left = 0;
    let right = 0;
    let windowSum = 0;
    let minimumLength = Infinity;
        while(right < nums.length) { 
          windowSum = windowSum + nums[right]
          while(windowSum >= target){
            minimumLength = Math.min(minimumLength, right - left + 1);
            windowSum -= nums[left];
            left++;
          }
          right++
        } 
        return minimumLength== Infinity? 0 : minimumLength
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(15, [1,2,3,4,5]));
